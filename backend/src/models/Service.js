const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true,
    maxlength: [100, 'Service name cannot be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    maxlength: [500, 'Service description cannot be more than 500 characters']
  },
  longDescription: {
    type: String,
    required: [true, 'Long description is required']
  },
  category: {
    type: String,
    required: [true, 'Service category is required'],
    enum: ['design', 'development', 'marketing', 'consulting', 'support', 'other']
  },
  subcategory: {
    type: String,
    trim: true,
    maxlength: [50, 'Subcategory cannot be more than 50 characters']
  },
  icon: {
    type: String,
    default: 'ph ph-gear'
  },
  image: {
    public_id: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: 'Service image'
    }
  },
  features: [{
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Feature title cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: true,
      maxlength: [300, 'Feature description cannot be more than 300 characters']
    },
    icon: {
      type: String,
      default: 'ph ph-check-circle'
    }
  }],
  benefits: [{
    type: String,
    maxlength: [200, 'Benefit description cannot be more than 200 characters']
  }],
  process: [{
    step: {
      type: Number,
      required: true,
      min: [1, 'Step number must be at least 1']
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Step title cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: true,
      maxlength: [300, 'Step description cannot be more than 300 characters']
    },
    icon: {
      type: String,
      default: 'ph ph-arrow-right'
    }
  }],
  technologies: [{
    type: String,
    trim: true,
    maxlength: [50, 'Technology name cannot be more than 50 characters']
  }],
  tools: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tool name cannot be more than 50 characters']
  }],
  deliverables: [{
    type: String,
    maxlength: [200, 'Deliverable description cannot be more than 200 characters']
  }],
  timeline: {
    min: {
      type: Number,
      min: [1, 'Minimum timeline must be at least 1 day']
    },
    max: {
      type: Number,
      min: [1, 'Maximum timeline must be at least 1 day']
    },
    unit: {
      type: String,
      enum: ['days', 'weeks', 'months'],
      default: 'weeks'
    }
  },
  pricing: {
    type: {
      type: String,
      enum: ['fixed', 'hourly', 'project-based', 'subscription', 'custom'],
      default: 'project-based'
    },
    minPrice: {
      type: Number,
      min: [0, 'Minimum price cannot be negative']
    },
    maxPrice: {
      type: Number,
      min: [0, 'Maximum price cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD',
      enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
    },
    hourlyRate: {
      type: Number,
      min: [0, 'Hourly rate cannot be negative']
    },
    packages: [{
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, 'Package name cannot be more than 50 characters']
      },
      description: {
        type: String,
        maxlength: [300, 'Package description cannot be more than 300 characters']
      },
      price: {
        type: Number,
        required: true,
        min: [0, 'Package price cannot be negative']
      },
      features: [String],
      isPopular: {
        type: Boolean,
        default: false
      }
    }]
  },
  portfolio: [{
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      public_id: String,
      url: String,
      alt: String
    },
    description: {
      type: String,
      maxlength: [200, 'Portfolio description cannot be more than 200 characters']
    }
  }],
  testimonials: [{
    clientName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Client name cannot be more than 100 characters']
    },
    clientPosition: {
      type: String,
      trim: true,
      maxlength: [100, 'Client position cannot be more than 100 characters']
    },
    clientCompany: {
      type: String,
      trim: true,
      maxlength: [100, 'Company name cannot be more than 100 characters']
    },
    content: {
      type: String,
      required: true,
      maxlength: [500, 'Testimonial content cannot be more than 500 characters']
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot be more than 5']
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  }],
  faqs: [{
    question: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'Question cannot be more than 200 characters']
    },
    answer: {
      type: String,
      required: true,
      maxlength: [1000, 'Answer cannot be more than 1000 characters']
    }
  }],
  seo: {
    metaTitle: {
      type: String,
      maxlength: [60, 'Meta title cannot be more than 60 characters']
    },
    metaDescription: {
      type: String,
      maxlength: [160, 'Meta description cannot be more than 160 characters']
    },
    keywords: [String],
    canonicalUrl: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  relatedServices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  }],
  metrics: {
    views: {
      type: Number,
      default: 0
    },
    inquiries: {
      type: Number,
      default: 0
    },
    conversions: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for formatted timeline
serviceSchema.virtual('formattedTimeline').get(function() {
  if (!this.timeline.min && !this.timeline.max) {
    return 'Custom';
  }
  
  if (this.timeline.min === this.timeline.max) {
    return `${this.timeline.min} ${this.timeline.unit}`;
  }
  
  return `${this.timeline.min}-${this.timeline.max} ${this.timeline.unit}`;
});

// Virtual for price range
serviceSchema.virtual('priceRange').get(function() {
  if (!this.pricing.minPrice && !this.pricing.maxPrice) {
    return 'Custom Quote';
  }
  
  if (this.pricing.minPrice === this.pricing.maxPrice) {
    return `${this.pricing.currency} ${this.pricing.minPrice}`;
  }
  
  return `${this.pricing.currency} ${this.pricing.minPrice} - ${this.pricing.maxPrice}`;
});

// Virtual for service status
serviceSchema.virtual('statusText').get(function() {
  return this.isActive ? 'Active' : 'Inactive';
});

// Indexes for better query performance
serviceSchema.index({ slug: 1 });
serviceSchema.index({ category: 1 });
serviceSchema.index({ subcategory: 1 });
serviceSchema.index({ isActive: 1 });
serviceSchema.index({ isFeatured: 1 });
serviceSchema.index({ order: 1 });
serviceSchema.index({ author: 1 });
serviceSchema.index({ technologies: 1 });
serviceSchema.index({ createdAt: -1 });

// Pre-save middleware to generate slug
serviceSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  
  // Generate slug from name
  this.slug = this.name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
  
  next();
});

// Static method to get active services
serviceSchema.statics.getActiveServices = function() {
  return this.find({ isActive: true })
    .sort({ order: 1, createdAt: -1 })
    .populate('author', 'firstName lastName avatar')
    .select('name slug description image category icon features pricing');
};

// Static method to get featured services
serviceSchema.statics.getFeaturedServices = function(limit = 6) {
  return this.find({ 
    isActive: true, 
    isFeatured: true 
  })
  .sort({ order: 1, createdAt: -1 })
  .limit(limit)
  .populate('author', 'firstName lastName avatar')
  .select('name slug description image category icon features pricing');
};

// Static method to get services by category
serviceSchema.statics.getServicesByCategory = function(category) {
  return this.find({ 
    category, 
    isActive: true 
  })
  .sort({ order: 1, createdAt: -1 })
  .populate('author', 'firstName lastName avatar')
  .select('name slug description image category icon features pricing');
};

// Static method to search services
serviceSchema.statics.searchServices = function(searchTerm, limit = 20) {
  const regex = new RegExp(searchTerm, 'i');
  return this.find({
    $or: [
      { name: regex },
      { description: regex },
      { longDescription: regex },
      { features: { $elemMatch: { title: regex } } },
      { technologies: regex }
    ],
    isActive: true
  })
  .sort({ order: 1, createdAt: -1 })
  .limit(limit)
  .populate('author', 'firstName lastName avatar')
  .select('name slug description image category icon features pricing');
};

module.exports = mongoose.model('Service', serviceSchema);
