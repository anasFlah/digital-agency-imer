const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Project title cannot be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [1000, 'Project description cannot be more than 1000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Project content is required']
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['web-design', 'mobile-app', 'branding', 'illustration', 'ui-ux', 'development', 'other']
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Tag cannot be more than 30 characters']
  }],
  client: {
    type: String,
    trim: true,
    maxlength: [100, 'Client name cannot be more than 100 characters']
  },
  projectUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please enter a valid URL'
    ]
  },
  githubUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please enter a valid URL'
    ]
  },
  behanceUrl: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please enter a valid URL'
    ]
  },
  images: [{
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Project image'
    },
    isMain: {
      type: Boolean,
      default: false
    }
  }],
  featuredImage: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Featured project image'
    }
  },
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
  startDate: {
    type: Date,
    required: [true, 'Project start date is required']
  },
  endDate: {
    type: Date
  },
  duration: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'completed', 'on-hold', 'cancelled'],
    default: 'completed'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  budget: {
    type: Number,
    min: [0, 'Budget cannot be negative']
  },
  budgetCurrency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
  },
  teamSize: {
    type: Number,
    min: [1, 'Team size must be at least 1']
  },
  challenges: [{
    type: String,
    maxlength: [300, 'Challenge description cannot be more than 300 characters']
  }],
  solutions: [{
    type: String,
    maxlength: [300, 'Solution description cannot be more than 300 characters']
  }],
  results: [{
    type: String,
    maxlength: [300, 'Result description cannot be more than 300 characters']
  }],
  metrics: {
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    shares: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    }
  },
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
  isPublished: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['designer', 'developer', 'project-manager', 'consultant', 'other']
    },
    contribution: {
      type: String,
      maxlength: [200, 'Contribution description cannot be more than 200 characters']
    }
  }],
  relatedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for project duration
projectSchema.virtual('durationInDays').get(function() {
  if (this.startDate && this.endDate) {
    const diffTime = Math.abs(this.endDate - this.startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  return null;
});

// Virtual for project status
projectSchema.virtual('statusText').get(function() {
  const statusMap = {
    'planning': 'Planning',
    'in-progress': 'In Progress',
    'completed': 'Completed',
    'on-hold': 'On Hold',
    'cancelled': 'Cancelled'
  };
  return statusMap[this.status] || this.status;
});

// Virtual for formatted dates
projectSchema.virtual('formattedStartDate').get(function() {
  return this.startDate ? this.startDate.toLocaleDateString() : '';
});

projectSchema.virtual('formattedEndDate').get(function() {
  return this.endDate ? this.endDate.toLocaleDateString() : '';
});

// Indexes for better query performance
projectSchema.index({ slug: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ isPublished: 1 });
projectSchema.index({ isFeatured: 1 });
projectSchema.index({ author: 1 });
projectSchema.index({ tags: 1 });
projectSchema.index({ technologies: 1 });
projectSchema.index({ createdAt: -1 });

// Pre-save middleware to generate slug
projectSchema.pre('save', function(next) {
  if (!this.isModified('title')) {
    return next();
  }
  
  // Generate slug from title
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
  
  next();
});

// Pre-save middleware to set publishedAt
projectSchema.pre('save', function(next) {
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

// Static method to get featured projects
projectSchema.statics.getFeaturedProjects = function(limit = 6) {
  return this.find({ 
    isPublished: true, 
    isFeatured: true 
  })
  .sort({ publishedAt: -1 })
  .limit(limit)
  .populate('author', 'firstName lastName avatar')
  .select('title slug shortDescription featuredImage category tags metrics');
};

// Static method to get projects by category
projectSchema.statics.getProjectsByCategory = function(category, limit = 12) {
  return this.find({ 
    category, 
    isPublished: true 
  })
  .sort({ publishedAt: -1 })
  .limit(limit)
  .populate('author', 'firstName lastName avatar')
  .select('title slug shortDescription featuredImage category tags metrics');
};

// Static method to search projects
projectSchema.statics.searchProjects = function(searchTerm, limit = 20) {
  const regex = new RegExp(searchTerm, 'i');
  return this.find({
    $or: [
      { title: regex },
      { description: regex },
      { tags: regex },
      { technologies: regex }
    ],
    isPublished: true
  })
  .sort({ publishedAt: -1 })
  .limit(limit)
  .populate('author', 'firstName lastName avatar')
  .select('title slug shortDescription featuredImage category tags metrics');
};

module.exports = mongoose.model('Project', projectSchema);
