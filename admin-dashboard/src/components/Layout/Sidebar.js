import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  House, 
  FolderOpen, 
  Gear, 
  Users, 
  Envelope, 
  Newspaper, 
  ChartLine, 
  Settings,
  SignOut,
  Sun,
  Moon
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: House,
      description: 'Overview and analytics'
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: FolderOpen,
      description: 'Manage portfolio projects'
    },
    {
      path: '/services',
      name: 'Services',
      icon: Gear,
      description: 'Digital agency services'
    },
    {
      path: '/users',
      name: 'Users',
      icon: Users,
      description: 'User management',
      adminOnly: true
    },
    {
      path: '/contacts',
      name: 'Contacts',
      icon: Envelope,
      description: 'Lead management'
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      icon: Newspaper,
      description: 'Email subscriptions'
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: ChartLine,
      description: 'Performance metrics'
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: Settings,
      description: 'System configuration'
    }
  ];

  const handleLogout = () => {
    logout();
    onClose();
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebar-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`admin-sidebar ${isOpen ? 'open' : ''}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="currentColor"/>
                <path d="M33.6 34.5h0.9c0.5 0 0.9 0.4 0.9 0.9v3.7c0 0.5-0.4 0.9-0.9 0.9h-0.9c-0.5 0-0.9-0.4-0.9-0.9v-3.7c0-0.5 0.4-0.9 0.9-0.9z" fill="white"/>
                <path d="M20.5 37.3v1.9c0 0.5 0.4 0.9 0.9 0.9h0.9c0.5 0 0.9-0.4 0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5 0-0.9 0.4-0.9 0.9V37.3z" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-title">Digital Agency</span>
              <span className="logo-subtitle">Admin Panel</span>
            </div>
          </div>
          
          <button className="sidebar-close" onClick={onClose}>
            <span className="sr-only">Close sidebar</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {navigationItems.map((item) => {
                // Skip admin-only items for non-admin users
                if (item.adminOnly && user?.role !== 'admin') {
                  return null;
                }

                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);

                return (
                  <li key={item.path} className="nav-item">
                    <NavLink
                      to={item.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      <Icon className="nav-icon" size={20} />
                      <div className="nav-content">
                        <span className="nav-name">{item.name}</span>
                        <span className="nav-description">{item.description}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          className="active-indicator"
                          layoutId="activeIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.avatar?.url ? (
                <img src={user.avatar.url} alt={user.firstName} />
              ) : (
                <div className="avatar-placeholder">
                  {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                </div>
              )}
            </div>
            <div className="user-details">
              <span className="user-name">{user?.firstName} {user?.lastName}</span>
              <span className="user-role">{user?.role}</span>
            </div>
          </div>

          <div className="sidebar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <button
              className="logout-btn"
              onClick={handleLogout}
              title="Logout"
            >
              <SignOut size={18} />
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
