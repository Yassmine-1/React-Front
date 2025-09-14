import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const userName = "Aymen";
  
  // Get current date dynamically
  const getCurrentDate = () => {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };
  
  const currentDate = getCurrentDate();
  const appName = "HR Dashboard";
  
  // Sample news data
  const [newsItems] = useState([
    {
      id: 1,
      title: "Company Annual Meeting Scheduled",
      date: "July 30, 2025",
      type: "announcement",
      description: "The annual company meeting will be held on August 15th at the main conference hall."
    },
    {
      id: 2,
      title: "New HR Policies Released",
      date: "July 28, 2025",
      type: "policy",
      description: "Updated employee handbook and new remote work guidelines are now available."
    },
    {
      id: 3,
      title: "Team Building Event",
      date: "July 25, 2025",
      type: "event",
      description: "Join us for the quarterly team building event this Friday at 2 PM."
    }
  ]);

  // Sample colleagues data
  const [colleagues] = useState({
    recent: [
      { id: 1, name: "Sarah Johnson", position: "Marketing Manager", avatar: "SJ", joinDate: "July 29, 2025" },
      { id: 2, name: "Mike Chen", position: "Software Developer", avatar: "MC", joinDate: "July 26, 2025" },
      { id: 3, name: "Emily Davis", position: "UX Designer", avatar: "ED", joinDate: "July 24, 2025" }
    ],
    comingSoon: [
      { id: 4, name: "Alex Rodriguez", position: "Data Analyst", avatar: "AR", startDate: "August 5, 2025" },
      { id: 5, name: "Lisa Wang", position: "Product Manager", avatar: "LW", startDate: "August 12, 2025" },
      { id: 6, name: "David Brown", position: "DevOps Engineer", avatar: "DB", startDate: "August 18, 2025" }
    ]
  });

  const [activeTab, setActiveTab] = useState('recent');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="image-placeholder">
          <img src="/logos/logo-app.png" alt="User Avatar" className="user-avatar-img" />
        </div>
        <div className="welcome-text">
          <h2>Hello {userName}</h2>
          <p>The date is {currentDate}</p>
        </div>
      </div>
      
      {/* News Section */}
      <div className="news-section">
        <h3>Your latest news</h3>
        <div className="news-content">
          {newsItems.map(item => (
            <div key={item.id} className="news-item">
              <div className="news-item-header">
                <span className={`news-type ${item.type}`}>{item.type}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h4 className="news-title">{item.title}</h4>
              <p className="news-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions-section">
        <h3>Quick Actions</h3>
        <div className="quick-actions-grid">
          <Link to="/personal/hr-info" className="quick-action-card">
            <div className="action-icon">👤</div>
            <div className="action-title">My HR Info</div>
            <div className="action-description">View and update your personal information</div>
          </Link>
          <Link to="/personal/pro-info" className="quick-action-card">
            <div className="action-icon">💼</div>
            <div className="action-title">Professional Info</div>
            <div className="action-description">Manage your professional details</div>
          </Link>
          <Link to="/skills/personal" className="quick-action-card">
            <div className="action-icon">🎯</div>
            <div className="action-title">My Skills</div>
            <div className="action-description">Track and update your skills</div>
          </Link>
          <Link to="/goals/personal" className="quick-action-card">
            <div className="action-icon">🏆</div>
            <div className="action-title">My Goals</div>
            <div className="action-description">Set and monitor your objectives</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
