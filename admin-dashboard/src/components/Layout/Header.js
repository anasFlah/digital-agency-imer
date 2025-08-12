import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  Menu, 
  Bell, 
  Search, 
  User, 
  Settings, 
  HelpCircle,
  Sun,
  Moon
} from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'New contact form submission',
      message: 'John Doe submitted a contact form',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Project published',
      message: 'E-commerce website project is now live',
      time: '1 hour ago',
      read: true
    },
    {
      id: 3,
      type: 'warning',
      title: 'Newsletter bounce rate high',
      message: 'Bounce rate increased to 15%',
      time: '3 hours ago',
      read: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <button 
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Toggle sidebar menu"
        >
          <Menu size={24} />
        </button>
        
        <div className="header-search">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        {/* Theme Toggle */}
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notifications */}
        <div className="notifications-container">
          <button
            className="notifications-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                className="notifications-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="notifications-header">
                  <h3>Notifications</h3>
                  <button 
                    className="mark-all-read"
                    onClick={() => {/* Mark all as read */}}
                  >
                    Mark all read
                  </button>
                </div>
                
                <div className="notifications-list">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                    >
                      <div className="notification-icon">
                        <div className={`icon-${notification.type}`} />
                      </div>
                      <div className="notification-content">
                        <h4>{notification.title}</h4>
                        <p>{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="notifications-footer">
                  <button className="view-all-notifications">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Menu */}
        <div className="user-menu-container">
          <button
            className="user-menu-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="User menu"
          >
            <div className="user-avatar">
              {user?.avatar?.url ? (
                <img src={user.avatar.url} alt={user.firstName} />
              ) : (
                <div className="avatar-placeholder">
                  {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                </div>
              )}
            </div>
            <span className="user-name">{user?.firstName}</span>
            <svg className="chevron-down" viewBox="0 0 24 24" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                className="user-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="user-dropdown-header">
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
                      <span className="user-full-name">{user?.firstName} {user?.lastName}</span>
                      <span className="user-email">{user?.email}</span>
                      <span className="user-role">{user?.role}</span>
                    </div>
                  </div>
                </div>

                <div className="user-dropdown-menu">
                  <button className="dropdown-item">
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  <button className="dropdown-item">
                    <Settings size={18} />
                    <span>Settings</span>
                  </button>
                  <button className="dropdown-item">
                    <HelpCircle size={18} />
                    <span>Help & Support</span>
                  </button>
                </div>

                <div className="user-dropdown-footer">
                  <button className="logout-btn" onClick={handleLogout}>
                    <span>Sign out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
