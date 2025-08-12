import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FolderOpen, 
  Envelope, 
  TrendingUp, 
  Eye, 
  MousePointer,
  Calendar,
  Clock
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    totalProjects: 89,
    totalContacts: 234,
    totalRevenue: 45600
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'project',
      title: 'New project created',
      description: 'E-commerce website for TechCorp',
      time: '2 minutes ago',
      user: 'Alex Johnson'
    },
    {
      id: 2,
      type: 'contact',
      title: 'New contact submission',
      description: 'John Doe submitted contact form',
      time: '15 minutes ago',
      user: 'System'
    },
    {
      id: 3,
      type: 'user',
      title: 'New user registered',
      description: 'Sarah Wilson joined the platform',
      time: '1 hour ago',
      user: 'System'
    },
    {
      id: 4,
      type: 'service',
      title: 'Service updated',
      description: 'Web Development package pricing updated',
      time: '2 hours ago',
      user: 'Mike Chen'
    }
  ]);

  // Sample data for charts
  const visitorData = [
    { name: 'Jan', visitors: 4000, pageViews: 2400 },
    { name: 'Feb', visitors: 3000, pageViews: 1398 },
    { name: 'Mar', visitors: 2000, pageViews: 9800 },
    { name: 'Apr', visitors: 2780, pageViews: 3908 },
    { name: 'May', visitors: 1890, pageViews: 4800 },
    { name: 'Jun', visitors: 2390, pageViews: 3800 },
    { name: 'Jul', visitors: 3490, pageViews: 4300 }
  ];

  const projectData = [
    { name: 'Web Design', value: 35, color: '#8884d8' },
    { name: 'Development', value: 25, color: '#82ca9d' },
    { name: 'Branding', value: 20, color: '#ffc658' },
    { name: 'Marketing', value: 15, color: '#ff7300' },
    { name: 'Other', value: 5, color: '#8dd1e1' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 12000, projects: 8 },
    { month: 'Feb', revenue: 19000, projects: 12 },
    { month: 'Mar', revenue: 15000, projects: 10 },
    { month: 'Apr', revenue: 22000, projects: 15 },
    { month: 'May', revenue: 18000, projects: 11 },
    { month: 'Jun', revenue: 25000, projects: 18 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="dashboard-page">
      <motion.div
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Header */}
        <motion.div className="page-header" variants={itemVariants}>
          <div className="header-content">
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">Welcome back! Here's what's happening with your digital agency.</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary">
              <Calendar size={16} />
              Generate Report
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div className="stats-grid" variants={itemVariants}>
          <div className="stat-card">
            <div className="stat-icon users">
              <Users size={24} />
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalUsers.toLocaleString()}</h3>
              <p className="stat-label">Total Users</p>
              <span className="stat-change positive">+12% from last month</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon projects">
              <FolderOpen size={24} />
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalProjects}</h3>
              <p className="stat-label">Active Projects</p>
              <span className="stat-change positive">+5 new this week</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon contacts">
              <Envelope size={24} />
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.totalContacts}</h3>
              <p className="stat-label">New Contacts</p>
              <span className="stat-change positive">+23% from last week</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon revenue">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <h3 className="stat-value">${stats.totalRevenue.toLocaleString()}</h3>
              <p className="stat-label">Total Revenue</p>
              <span className="stat-change positive">+18% from last month</span>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <motion.div className="charts-section" variants={itemVariants}>
          <div className="chart-row">
            {/* Visitor Analytics */}
            <div className="chart-card large">
              <div className="chart-header">
                <h3>Visitor Analytics</h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color visitors"></span>
                    <span>Visitors</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color pageViews"></span>
                    <span>Page Views</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={visitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="visitors" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="pageViews" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Project Distribution */}
            <div className="chart-card medium">
              <div className="chart-header">
                <h3>Project Distribution</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={projectData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="chart-row">
            <div className="chart-card full">
              <div className="chart-header">
                <h3>Revenue & Projects</h3>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color revenue"></span>
                    <span>Revenue ($)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color projects"></span>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="projects" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity & Quick Actions */}
        <motion.div className="activity-section" variants={itemVariants}>
          <div className="activity-row">
            {/* Recent Activity */}
            <div className="activity-card">
              <div className="card-header">
                <h3>Recent Activity</h3>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="activity-list">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className={`activity-icon ${activity.type}`}>
                      {activity.type === 'project' && <FolderOpen size={16} />}
                      {activity.type === 'contact' && <Envelope size={16} />}
                      {activity.type === 'user' && <Users size={16} />}
                      {activity.type === 'service' && <TrendingUp size={16} />}
                    </div>
                    <div className="activity-content">
                      <h4 className="activity-title">{activity.title}</h4>
                      <p className="activity-description">{activity.description}</p>
                      <div className="activity-meta">
                        <span className="activity-time">{activity.time}</span>
                        <span className="activity-user">by {activity.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="actions-grid">
                <button className="action-btn">
                  <FolderOpen size={20} />
                  <span>New Project</span>
                </button>
                <button className="action-btn">
                  <Users size={20} />
                  <span>Add User</span>
                </button>
                <button className="action-btn">
                  <Envelope size={20} />
                  <span>View Contacts</span>
                </button>
                <button className="action-btn">
                  <TrendingUp size={20} />
                  <span>Analytics</span>
                </button>
                <button className="action-btn">
                  <Calendar size={20} />
                  <span>Schedule</span>
                </button>
                <button className="action-btn">
                  <Clock size={20} />
                  <span>Recent</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
