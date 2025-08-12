const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot be more than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  phone: {
    type: String,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
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
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot be more than 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot be more than 2000 characters']
  },
  service: {
    type: String,
    enum: ['web-design', 'mobile-app', 'branding', 'illustration', 'ui-ux', 'development', 'consulting', 'other', 'not-specified'],
    default: 'not-specified'
  },
  budget: {
    type: String,
    enum: ['under-5k', '5k-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k', 'not-specified'],
    default: 'not-specified'
  },
  timeline: {
    type: String,
    enum: ['asap', '1-2-weeks', '1-month', '2-3-months', '3-6-months', '6-months-plus', 'not-specified'],
    default: 'not-specified'
  },
  projectType: {
    type: String,
    enum: ['new-project', 'redesign', 'maintenance', 'consultation', 'other', 'not-specified'],
    default: 'not-specified'
  },
  referralSource: {
    type: String,
    enum: ['google', 'social-media', 'referral', 'advertisement', 'event', 'other', 'not-specified'],
    default: 'not-specified'
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'in-progress', 'completed', 'spam'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
  followUpDate: {
    type: Date
  },
  lastContacted: {
    type: Date
  },
  responseTime: {
    type: Number, // in hours
    min: [0, 'Response time cannot be negative']
  },
  isLead: {
    type: Boolean,
    default: false
  },
  leadScore: {
    type: Number,
    min: [0, 'Lead score cannot be negative'],
    max: [100, 'Lead score cannot exceed 100'],
    default: 0
  },
  customFields: {
    type: Map,
    of: String
  },
  attachments: [{
    filename: {
      type: String,
      required: true
    },
    originalName: {
      type: String,
      required: true
    },
    mimetype: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  ipAddress: String,
  userAgent: String,
  location: {
    country: String,
    city: String,
    region: String
  },
  utmSource: String,
  utmMedium: String,
  utmCampaign: String,
  utmTerm: String,
  utmContent: String
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full name
contactSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for contact status
contactSchema.virtual('statusText').get(function() {
  const statusMap = {
    'new': 'New',
    'read': 'Read',
    'replied': 'Replied',
    'in-progress': 'In Progress',
    'completed': 'Completed',
    'spam': 'Spam'
  };
  return statusMap[this.status] || this.status;
});

// Virtual for priority text
contactSchema.virtual('priorityText').get(function() {
  const priorityMap = {
    'low': 'Low',
    'medium': 'Medium',
    'high': 'High',
    'urgent': 'Urgent'
  };
  return priorityMap[this.priority] || this.priority;
});

// Virtual for budget text
contactSchema.virtual('budgetText').get(function() {
  const budgetMap = {
    'under-5k': 'Under $5,000',
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    'over-100k': 'Over $100,000',
    'not-specified': 'Not Specified'
  };
  return budgetMap[this.budget] || this.budget;
});

// Virtual for timeline text
contactSchema.virtual('timelineText').get(function() {
  const timelineMap = {
    'asap': 'ASAP',
    '1-2-weeks': '1-2 Weeks',
    '1-month': '1 Month',
    '2-3-months': '2-3 Months',
    '3-6-months': '3-6 Months',
    '6-months-plus': '6+ Months',
    'not-specified': 'Not Specified'
  };
  return timelineMap[this.timeline] || this.timeline;
});

// Virtual for days since submission
contactSchema.virtual('daysSinceSubmission').get(function() {
  const now = new Date();
  const diffTime = Math.abs(now - this.createdAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

// Indexes for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ priority: 1 });
contactSchema.index({ assignedTo: 1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ followUpDate: 1 });
contactSchema.index({ isLead: 1 });
contactSchema.index({ leadScore: -1 });

// Pre-save middleware to set lead score
contactSchema.pre('save', function(next) {
  if (this.isModified('budget') || this.isModified('timeline') || this.isModified('projectType')) {
    this.calculateLeadScore();
  }
  next();
});

// Method to calculate lead score
contactSchema.methods.calculateLeadScore = function() {
  let score = 0;
  
  // Budget scoring
  const budgetScores = {
    'under-5k': 10,
    '5k-10k': 20,
    '10k-25k': 30,
    '25k-50k': 40,
    '50k-100k': 50,
    'over-100k': 60
  };
  score += budgetScores[this.budget] || 0;
  
  // Timeline scoring
  const timelineScores = {
    'asap': 30,
    '1-2-weeks': 25,
    '1-month': 20,
    '2-3-months': 15,
    '3-6-months': 10,
    '6-months-plus': 5
  };
  score += timelineScores[this.timeline] || 0;
  
  // Project type scoring
  const projectTypeScores = {
    'new-project': 25,
    'redesign': 20,
    'maintenance': 15,
    'consultation': 10,
    'other': 5
  };
  score += projectTypeScores[this.projectType] || 0;
  
  // Company size scoring (if company is provided)
  if (this.company && this.company.trim()) {
    score += 10;
  }
  
  // Position scoring (if position is provided)
  if (this.position && this.position.trim()) {
    score += 10;
  }
  
  // Phone scoring (if phone is provided)
  if (this.phone && this.phone.trim()) {
    score += 5;
  }
  
  // Message length scoring
  if (this.message && this.message.length > 100) {
    score += 10;
  }
  
  this.leadScore = Math.min(score, 100);
  this.isLead = this.leadScore >= 30;
};

// Static method to get new contacts
contactSchema.statics.getNewContacts = function() {
  return this.find({ status: 'new' })
    .sort({ createdAt: -1 })
    .populate('assignedTo', 'firstName lastName avatar');
};

// Static method to get contacts by status
contactSchema.statics.getContactsByStatus = function(status) {
  return this.find({ status })
    .sort({ createdAt: -1 })
    .populate('assignedTo', 'firstName lastName avatar');
};

// Static method to get high priority contacts
contactSchema.statics.getHighPriorityContacts = function() {
  return this.find({ 
    priority: { $in: ['high', 'urgent'] },
    status: { $nin: ['completed', 'spam'] }
  })
    .sort({ priority: -1, createdAt: -1 })
    .populate('assignedTo', 'firstName lastName avatar');
};

// Static method to get leads
contactSchema.statics.getLeads = function() {
  return this.find({ isLead: true })
    .sort({ leadScore: -1, createdAt: -1 })
    .populate('assignedTo', 'firstName lastName avatar');
};

// Static method to search contacts
contactSchema.statics.searchContacts = function(searchTerm, limit = 50) {
  const regex = new RegExp(searchTerm, 'i');
  return this.find({
    $or: [
      { firstName: regex },
      { lastName: regex },
      { email: regex },
      { company: regex },
      { subject: regex },
      { message: regex }
    ]
  })
  .sort({ createdAt: -1 })
  .limit(limit)
  .populate('assignedTo', 'firstName lastName avatar');
};

module.exports = mongoose.model('Contact', contactSchema);
