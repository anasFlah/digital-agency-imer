const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes - require authentication
const protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // Check for token in cookies
  else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'User account is deactivated'
      });
    }

    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }
};

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role '${req.user.role}' is not authorized to access this route`
      });
    }

    next();
  };
};

// Check if user is admin
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'User not authenticated'
      });
  }

  if (!req.user.isAdmin()) {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }

  next();
};

// Check if user is moderator or admin
const isModerator = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'User not authenticated'
    });
  }

  if (!req.user.isModerator()) {
    return res.status(403).json({
      success: false,
      message: 'Moderator or admin access required'
    });
  }

  next();
};

// Optional authentication - user can be authenticated but it's not required
const optionalAuth = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  // Check for token in cookies
  else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      const user = await User.findById(decoded.id).select('-password');

      if (user && user.isActive) {
        req.user = user;
      }
    } catch (error) {
      // Token is invalid, but we don't fail the request
      // Just continue without user authentication
    }
  }

  next();
};

// Rate limiting for authentication attempts
const authRateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
};

// Check if user owns the resource or is admin
const checkOwnership = (modelName) => {
  return async (req, res, next) => {
    try {
      const Model = require(`../models/${modelName}`);
      const resource = await Model.findById(req.params.id);

      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }

      // Admin can access any resource
      if (req.user.isAdmin()) {
        return next();
      }

      // Check if user owns the resource
      if (resource.author && resource.author.toString() === req.user._id.toString()) {
        return next();
      }

      // Check if user is moderator and resource is published
      if (req.user.isModerator() && resource.isPublished !== undefined) {
        return next();
      }

      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this resource'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error checking resource ownership'
      });
    }
  };
};

// Check if user can edit the resource
const canEdit = (modelName) => {
  return async (req, res, next) => {
    try {
      const Model = require(`../models/${modelName}`);
      const resource = await Model.findById(req.params.id);

      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }

      // Admin can edit any resource
      if (req.user.isAdmin()) {
        return next();
      }

      // Check if user owns the resource
      if (resource.author && resource.author.toString() === req.user._id.toString()) {
        return next();
      }

      // Check if user is moderator and resource is not published
      if (req.user.isModerator() && resource.isPublished !== undefined && !resource.isPublished) {
        return next();
      }

      return res.status(403).json({
        success: false,
        message: 'Not authorized to edit this resource'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error checking edit permissions'
      });
    }
  };
};

// Check if user can delete the resource
const canDelete = (modelName) => {
  return async (req, res, next) => {
    try {
      const Model = require(`../models/${modelName}`);
      const resource = await Model.findById(req.params.id);

      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }

      // Admin can delete any resource
      if (req.user.isAdmin()) {
        return next();
      }

      // Check if user owns the resource
      if (resource.author && resource.author.toString() === req.user._id.toString()) {
        return next();
      }

      // Moderators cannot delete resources
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this resource'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error checking delete permissions'
      });
    }
  };
};

module.exports = {
  protect,
  authorize,
  isAdmin,
  isModerator,
  optionalAuth,
  authRateLimit,
  checkOwnership,
  canEdit,
  canDelete
};
