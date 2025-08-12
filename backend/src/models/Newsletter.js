const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: [50, 'First name cannot be more than 50 characters']
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, 'Last name cannot be more than 50 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot be more than 100 characters']
  },
  position: {
    type: String,
    trim: true,
    maxlength: [100, 'Position cannot be more than 100 characters']
  },
  interests: [{
    type: String,
    enum: ['web-design', 'mobile-app', 'branding', 'illustration', 'ui-ux', 'development', 'marketing', 'consulting', 'industry-news', 'case-studies', 'tips-tricks', 'events', 'other'],
    default: 'other'
  }],
  preferences: {
    frequency: {
      type: String,
      enum: ['weekly', 'bi-weekly', 'monthly', 'quarterly'],
      default: 'monthly'
    },
    categories: [{
      type: String,
      enum: ['design', 'development', 'marketing', 'business', 'technology', 'creativity', 'inspiration']
    }],
    format: {
      type: String,
      enum: ['html', 'text'],
      default: 'html'
    }
  },
  status: {
    type: String,
    enum: ['subscribed', 'unsubscribed', 'pending', 'bounced', 'spam'],
    default: 'pending'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
  verificationExpire: Date,
  unsubscribeToken: String,
  lastEmailSent: Date,
  emailCount: {
    type: Number,
    default: 0
  },
  openRate: {
    type: Number,
    min: [0, 'Open rate cannot be negative'],
    max: [100, 'Open rate cannot exceed 100'],
    default: 0
  },
  clickRate: {
    type: Number,
    min: [0, 'Click rate cannot be negative'],
    max: [100, 'Click rate cannot exceed 100'],
    default: 0
  },
  bounceCount: {
    type: Number,
    default: 0
  },
  spamCount: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Tag cannot be more than 30 characters']
  }],
  notes: [{
    content: {
      type: String,
      required: true,
      maxlength: [500, 'Note content cannot be more than 500 characters']
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  source: {
    type: String,
    enum: ['website', 'landing-page', 'social-media', 'referral', 'event', 'manual', 'other'],
    default: 'website'
  },
  utmSource: String,
  utmMedium: String,
  utmCampaign: String,
  utmTerm: String,
  utmContent: String,
  ipAddress: String,
  userAgent: String,
  location: {
    country: String,
    city: String,
    region: String
  },
  referrer: String,
  landingPage: String,
  customFields: {
    type: Map,
    of: String
  },
  lastActivity: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full name
newsletterSchema.virtual('fullName').get(function() {
  if (this.firstName && this.lastName) {
    return `${this.firstName} ${this.lastName}`;
  }
  return this.firstName || this.lastName || 'Anonymous';
});

// Virtual for subscription status
newsletterSchema.virtual('statusText').get(function() {
  const statusMap = {
    'subscribed': 'Subscribed',
    'unsubscribed': 'Unsubscribed',
    'pending': 'Pending Verification',
    'bounced': 'Bounced',
    'spam': 'Marked as Spam'
  };
  return statusMap[this.status] || this.status;
});

// Virtual for subscription duration
newsletterSchema.virtual('subscriptionDuration').get(function() {
  const now = new Date();
  const diffTime = Math.abs(now - this.createdAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) {
    return `${diffDays} days`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months > 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} year${years > 1 ? 's' : ''}`;
  }
});

// Virtual for engagement score
newsletterSchema.virtual('engagementScore').get(function() {
  let score = 0;
  
  // Open rate scoring
  if (this.openRate >= 80) score += 30;
  else if (this.openRate >= 60) score += 20;
  else if (this.openRate >= 40) score += 10;
  
  // Click rate scoring
  if (this.clickRate >= 20) score += 30;
  else if (this.clickRate >= 10) score += 20;
  else if (this.clickRate >= 5) score += 10;
  
  // Email count scoring
  if (this.emailCount >= 10) score += 20;
  else if (this.emailCount >= 5) score += 10;
  
  // Bounce and spam penalty
  score -= (this.bounceCount * 5);
  score -= (this.spamCount * 10);
  
  return Math.max(0, Math.min(100, score));
});

// Indexes for better query performance
newsletterSchema.index({ email: 1 });
newsletterSchema.index({ status: 1 });
newsletterSchema.index({ isVerified: 1 });
newsletterSchema.index({ isActive: 1 });
newsletterSchema.index({ createdAt: -1 });
newsletterSchema.index({ lastActivity: -1 });
newsletterSchema.index({ interests: 1 });
newsletterSchema.index({ source: 1 });

// Pre-save middleware to generate tokens
newsletterSchema.pre('save', function(next) {
  if (this.isNew) {
    // Generate verification token
    this.verificationToken = require('crypto').randomBytes(32).toString('hex');
    this.verificationExpire = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    
    // Generate unsubscribe token
    this.unsubscribeToken = require('crypto').randomBytes(32).toString('hex');
  }
  
  // Update last activity
  this.lastActivity = new Date();
  
  next();
});

// Method to verify subscription
newsletterSchema.methods.verify = function() {
  this.isVerified = true;
  this.status = 'subscribed';
  this.verificationToken = undefined;
  this.verificationExpire = undefined;
  return this.save();
};

// Method to unsubscribe
newsletterSchema.methods.unsubscribe = function() {
  this.status = 'unsubscribed';
  this.isActive = false;
  return this.save();
};

// Method to resubscribe
newsletterSchema.methods.resubscribe = function() {
  this.status = 'subscribed';
  this.isActive = true;
  return this.save();
};

// Method to mark as bounced
newsletterSchema.methods.markAsBounced = function() {
  this.bounceCount += 1;
  if (this.bounceCount >= 3) {
    this.status = 'bounced';
    this.isActive = false;
  }
  return this.save();
};

// Method to mark as spam
newsletterSchema.methods.markAsSpam = function() {
  this.spamCount += 1;
  if (this.spamCount >= 2) {
    this.status = 'spam';
    this.isActive = false;
  }
  return this.save();
};

// Method to update engagement metrics
newsletterSchema.methods.updateEngagement = function(opens, clicks) {
  if (this.emailCount > 0) {
    this.openRate = Math.round((opens / this.emailCount) * 100);
    this.clickRate = Math.round((clicks / this.emailCount) * 100);
  }
  return this.save();
};

// Static method to get active subscribers
newsletterSchema.statics.getActiveSubscribers = function() {
  return this.find({ 
    status: 'subscribed', 
    isActive: true, 
    isVerified: true 
  })
  .sort({ lastActivity: -1 });
};

// Static method to get subscribers by interest
newsletterSchema.statics.getSubscribersByInterest = function(interest) {
  return this.find({ 
    interests: interest,
    status: 'subscribed', 
    isActive: true, 
    isVerified: true 
  })
  .sort({ lastActivity: -1 });
};

// Static method to get high engagement subscribers
newsletterSchema.statics.getHighEngagementSubscribers = function(limit = 100) {
  return this.find({ 
    status: 'subscribed', 
    isActive: true, 
    isVerified: true 
  })
  .sort({ openRate: -1, clickRate: -1 })
  .limit(limit);
};

// Static method to get subscribers by frequency
newsletterSchema.statics.getSubscribersByFrequency = function(frequency) {
  return this.find({ 
    'preferences.frequency': frequency,
    status: 'subscribed', 
    isActive: true, 
    isVerified: true 
  })
  .sort({ lastActivity: -1 });
};

// Static method to search subscribers
newsletterSchema.statics.searchSubscribers = function(searchTerm, limit = 50) {
  const regex = new RegExp(searchTerm, 'i');
  return this.find({
    $or: [
      { email: regex },
      { firstName: regex },
      { lastName: regex },
      { company: regex },
      { position: regex }
    ],
    status: 'subscribed',
    isActive: true
  })
  .sort({ lastActivity: -1 })
  .limit(limit);
};

// Static method to get subscription statistics
newsletterSchema.statics.getSubscriptionStats = function() {
  return this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
        avgOpenRate: { $avg: '$openRate' },
        avgClickRate: { $avg: '$clickRate' }
      }
    }
  ]);
};

module.exports = mongoose.model('Newsletter', newsletterSchema);
