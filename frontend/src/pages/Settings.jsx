import React, { useState } from 'react';
import { User, Bell, Palette, Lock, Globe, Upload } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true
  });

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account preferences, notifications, and profile details.</p>
      </div>

      <div className="settings-layout">
        {/* Sidebar */}
        <div className="settings-sidebar">
          <button 
            className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} /> Profile
          </button>
          <button 
            className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} /> Notifications
          </button>
          <button 
            className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            <Palette size={18} /> Appearance
          </button>
          <button 
            className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Lock size={18} /> Security
          </button>
        </div>

        {/* Content Area */}
        <div className="settings-content">
          {activeTab === 'profile' && (
            <div>
              <h2 className="settings-section-title">Public Profile</h2>
              
              <div className="avatar-upload">
                <div className="avatar-preview">JS</div>
                <div className="avatar-actions">
                  <button className="btn btn-primary"><Upload size={16}/> Upload new image</button>
                  <button className="btn btn-secondary">Remove</button>
                </div>
              </div>

              <div style={{display: 'flex', gap: '24px'}}>
                <div className="form-group" style={{flex: 1}}>
                  <label>First Name</label>
                  <input type="text" defaultValue="John" />
                </div>
                <div className="form-group" style={{flex: 1}}>
                  <label>Last Name</label>
                  <input type="text" defaultValue="Smith" />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="john.smith@example.com" />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input type="text" defaultValue="Acme Corp" />
              </div>

              <div className="settings-actions">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="settings-section-title">Notification Preferences</h2>
              
              <div className="toggle-group">
                <div className="toggle-info">
                  <h4>Email Notifications</h4>
                  <p>Receive daily summaries and important alerts via email.</p>
                </div>
                <div 
                  className={`toggle-switch ${notifications.email ? 'active' : ''}`}
                  onClick={() => toggleNotification('email')}
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>

              <div className="toggle-group">
                <div className="toggle-info">
                  <h4>Push Notifications</h4>
                  <p>Receive real-time alerts in your browser when tasks are updated.</p>
                </div>
                <div 
                  className={`toggle-switch ${notifications.push ? 'active' : ''}`}
                  onClick={() => toggleNotification('push')}
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>

              <div className="toggle-group">
                <div className="toggle-info">
                  <h4>Weekly Analytics Report</h4>
                  <p>Get a comprehensive breakdown of your CRM stats every Monday.</p>
                </div>
                <div 
                  className={`toggle-switch ${notifications.weekly ? 'active' : ''}`}
                  onClick={() => toggleNotification('weekly')}
                >
                  <div className="toggle-knob"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div>
              <h2 className="settings-section-title">Appearance</h2>
              <div className="form-group">
                <label>Theme</label>
                <select defaultValue="light">
                  <option value="light">Light Mode (Default)</option>
                  <option value="dark">Dark Mode</option>
                  <option value="system">System Preference</option>
                </select>
              </div>
              <div className="form-group">
                <label>Language</label>
                <select defaultValue="en">
                  <option value="en">English (US)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h2 className="settings-section-title">Security & Passwords</h2>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
              <div className="settings-actions">
                <button className="btn btn-primary">Update Password</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
