import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import OrganizationChartPage from './pages/OrganizationChartPage';
import LandingPage from './pages/LandingPage';
import PersonalHRInfoPage from './pages/PersonalHRInfoPage';
import PersonalProInfoPage from './pages/PersonalProInfoPage';
import CoworkersHRInfoPage from './pages/CoworkersHRInfoPage';
import CoworkersProInfoPage from './pages/CoworkersProInfoPage';
import PersonalSkillsPage from './pages/PersonalSkillsPage';
import CoworkersSkillsPage from './pages/CoworkersSkillsPage';
import PersonalGoalsPage from './pages/PersonalGoalsPage';
import CoworkersGoalsPage from './pages/CoworkersGoalsPage';
import PersonalReviewsPage from './pages/PersonalReviewsPage';
import CoworkersReviewsPage from './pages/CoworkersReviewsPage';
import LoginPage from './pages/LoginPage';
import './App.css';


// Sidebar Component
function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="left-sidebar">
      <div className="menu-section">
        <Link to="/dashboard" className={`menu-item ${isActive('/dashboard') ? 'active' : ''}`}>
          🏠 Dashboard
        </Link>
      </div>
      
      <div className="menu-section">
        <div className="menu-header">Personal info</div>
        <Link to="/personal/hr-info" className={`menu-item ${isActive('/personal/hr-info') ? 'active' : ''}`}>
          &gt; HR Info
        </Link>
        <Link to="/personal/pro" className={`menu-item ${isActive('/personal/pro') ? 'active' : ''}`}>
          &gt; Pro Info
        </Link>
      </div>
      
      <div className="menu-section">
        <div className="menu-header">Coworkers info</div>
        <Link to="/coworkers/hr" className={`menu-item ${isActive('/coworkers/hr') ? 'active' : ''}`}>
          &gt; HR Info
        </Link>
        <Link to="/coworkers/pro" className={`menu-item ${isActive('/coworkers/pro') ? 'active' : ''}`}>
          &gt; Pro Info
        </Link>
      </div>
      
      <div className="menu-section">
        <div className="menu-header">Skills</div>
        <Link to="/skills/personal" className={`menu-item ${isActive('/skills/personal') ? 'active' : ''}`}>
          &gt; My Skills
        </Link>
        <Link to="/skills/coworkers" className={`menu-item ${isActive('/skills/coworkers') ? 'active' : ''}`}>
          &gt; Coworkers Skills
        </Link>
      </div>
      
      <div className="menu-section">
        <div className="menu-header">Goals</div>
        <Link to="/goals/personal" className={`menu-item ${isActive('/goals/personal') ? 'active' : ''}`}>
          &gt; Personal Goals
        </Link>
        <Link to="/goals/coworkers" className={`menu-item ${isActive('/goals/coworkers') ? 'active' : ''}`}>
          &gt; Coworkers Goals
        </Link>
      </div>
      
      <div className="menu-section">
        <div className="menu-header">Reviews</div>
        <Link to="/reviews/personal" className={`menu-item ${isActive('/reviews/personal') ? 'active' : ''}`}>
          &gt; Personal Reviews
        </Link>
        <Link to="/reviews/coworkers" className={`menu-item ${isActive('/reviews/coworkers') ? 'active' : ''}`}>
          &gt; Coworkers Reviews
        </Link>
      </div>
      
      {/* <div className="menu-section special">
        <div className="menu-header">9 BOX GRID TALENT MANAGEMENT</div>
        <div className="menu-item red">&gt; To be defined</div>
      </div> */}
    </div>
  );
}

// Dashboard Component (new design)
function Dashboard() {
  const location = useLocation();
  const appName = "HR Dashboard";
  
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

  // Check if we're on the dashboard route
  const isDashboardRoute = location.pathname === '/dashboard';

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
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <img src="/logos/logo-app.png" alt="App Logo" className="app-logo" />
          <span className="app-name">{appName}</span>
        </div>
        <div className="header-center">
          <img src="/logos/logo-telnet.jpg" alt="LOGO TELNET" className="telnet-logo" />
        </div>
        <div className="header-right">
          <span className="help-link">? (help)</span>
          <div className="user-profile-container" ref={userMenuRef}>
            <span 
              className="user-profile" 
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{ cursor: 'pointer' }}
            >
              User profile
            </span>
            {showUserMenu && (
              <div className="user-menu-dropdown">
                <div className="user-menu-header">
                  <div className="user-avatar">A</div>
                  <div className="user-info">
                    <div className="user-name">Aymen</div>
                    <div className="user-email">aymen@company.com</div>
                  </div>
                </div>
                <div className="user-menu-divider"></div>
                <div className="user-menu-items">
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">👤</span>
                    <span>My Profile</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">⚙️</span>
                    <span>Settings</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">🔔</span>
                    <span>Notifications</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">📊</span>
                    <span>Dashboard</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">📋</span>
                    <span>My Tasks</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">📈</span>
                    <span>Reports</span>
                  </div>
                  <div className="menu-item" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">❓</span>
                    <span>Help & Support</span>
                  </div>
                  <div className="menu-divider"></div>
                  <div className="menu-item logout" onClick={() => setShowUserMenu(false)}>
                    <span className="menu-icon">🚪</span>
                    <span>Disconnect</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Content */}
        <div className={`center-content ${!isDashboardRoute ? 'no-right-sidebar' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<LandingPage />} />
            <Route path="/personal/hr-info" element={<PersonalHRInfoPage />} />
            <Route path="/personal/pro" element={<PersonalProInfoPage />} />
            <Route path="/coworkers/hr" element={<CoworkersHRInfoPage />} />
            <Route path="/coworkers/pro" element={<CoworkersProInfoPage />} />
            <Route path="/skills/personal" element={<PersonalSkillsPage />} />
            <Route path="/skills/coworkers" element={<CoworkersSkillsPage />} />
            <Route path="/goals/personal" element={<PersonalGoalsPage />} />
            <Route path="/goals/coworkers" element={<CoworkersGoalsPage />} />
            <Route path="/reviews/personal" element={<PersonalReviewsPage />} />
            <Route path="/reviews/coworkers" element={<CoworkersReviewsPage />} />
            <Route path="/organization-chart" element={<OrganizationChartPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>

        {/* Right Sidebar - Only show on dashboard route */}
        {isDashboardRoute && (
          <div className="right-sidebar">
            <div className="colleagues-header">
              <span>Colleagues</span>
              <Link to="/organization-chart" className="org-chart">View the organization chart</Link>
            </div>
            
            <div className="search-section">
              <input 
                type="text" 
                placeholder="(search for a colleague)"
                className="search-input"
              />
            </div>
            
            <div className="new-colleagues">
              <div className="section-title">New colleagues</div>
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
                  onClick={() => setActiveTab('recent')}
                >
                  Recent ({colleagues.recent.length})
                </button>
                <button 
                  className={`tab ${activeTab === 'comingSoon' ? 'active' : ''}`}
                  onClick={() => setActiveTab('comingSoon')}
                >
                  Coming Soon ({colleagues.comingSoon.length})
                </button>
              </div>
              <div className="colleagues-grid">
                {activeTab === 'recent' ? (
                  colleagues.recent.map(colleague => (
                    <div key={colleague.id} className="colleague-card">
                      <div className="colleague-avatar">{colleague.avatar}</div>
                      <div className="colleague-info">
                        <h4 className="colleague-name">{colleague.name}</h4>
                        <p className="colleague-position">{colleague.position}</p>
                        <p className="colleague-date">Joined: {colleague.joinDate}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  colleagues.comingSoon.map(colleague => (
                    <div key={colleague.id} className="colleague-card">
                      <div className="colleague-avatar">{colleague.avatar}</div>
                      <div className="colleague-info">
                        <h4 className="colleague-name">{colleague.name}</h4>
                        <p className="colleague-position">{colleague.position}</p>
                        <p className="colleague-date">Starts: {colleague.startDate}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Footer */}
      <div className="footer">
        l'affichage biensur dépend du profile qui a fait le Login (il y aurait donc des restrictions selon le cas)
      </div>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handler to be passed to LoginPage
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Protected dashboard routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


