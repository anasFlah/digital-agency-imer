import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      const result = await login(data);
      if (result.success) {
        // Login successful, redirect handled by auth context
      } else {
        setError('root', {
          type: 'manual',
          message: result.error
        });
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Background Pattern */}
        <div className="auth-background">
          <div className="pattern-grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="pattern-dot" />
            ))}
          </div>
        </div>

        {/* Login Form */}
        <motion.div
          className="auth-form-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="auth-form"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <div className="auth-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="28" fill="currentColor"/>
                  <path d="M33.6 34.5h0.9c0.5 0 0.9 0.4 0.9 0.9v3.7c0 0.5-0.4 0.9-0.9 0.9h-0.9c-0.5 0-0.9-0.4-0.9-0.9v-3.7c0-0.5 0.4-0.9 0.9-0.9z" fill="white"/>
                  <path d="M20.5 37.3v1.9c0 0.5 0.4 0.9 0.9 0.9h0.9c0.5 0 0.9-0.4 0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5 0-0.9 0.4-0.9 0.9V37.3z" fill="white"/>
                </svg>
              </div>
              <div className="logo-text">
                <h1 className="logo-title">Digital Agency</h1>
                <p className="logo-subtitle">Admin Dashboard</p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="auth-welcome">
              <h2 className="welcome-title">Welcome back!</h2>
              <p className="welcome-subtitle">Sign in to your admin account to continue</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-container">
                  <Mail size={20} className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="error-message">
                    <AlertCircle size={16} />
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-container">
                  <Lock size={20} className="input-icon" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">
                    <AlertCircle size={16} />
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    {...register('rememberMe')}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Remember me</span>
                </label>
                
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              {/* Root Error */}
              {errors.root && (
                <div className="root-error">
                  <AlertCircle size={16} />
                  <span>{errors.root.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`btn btn-primary btn-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="demo-credentials">
              <h4>Demo Credentials</h4>
              <div className="credential-item">
                <strong>Admin:</strong> admin@digitalagency.com / admin123
              </div>
              <div className="credential-item">
                <strong>Moderator:</strong> mod@digitalagency.com / mod123
              </div>
            </div>

            {/* Footer */}
            <div className="auth-footer">
              <p className="footer-text">
                Don't have an account?{' '}
                <Link to="/register" className="footer-link">
                  Contact your administrator
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div
          className="auth-info"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="info-content">
            <h2 className="info-title">Manage Your Digital Agency</h2>
            <p className="info-description">
              Take control of your projects, services, and client relationships with our comprehensive admin dashboard.
            </p>
            
            <div className="info-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Project Management</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Client Management</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Analytics & Reports</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
