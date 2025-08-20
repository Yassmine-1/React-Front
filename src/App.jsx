import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Menu, 
  MenuItem,
  TextField,
  Button,
  Paper,
  Container,
  Alert
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from './components/Sidebar';
import OrganizationChartPage from './pages/OrganizationChartPage';
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
import './App.css';

// Login Component
function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // For demo purposes, accept any credentials
    // In a real app, you would validate against your backend
    if (formData.password.length >= 6) {
      setError('');
      onLogin(formData.email);
    } else {
      setError('Password must be at least 6 characters');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 400,
          }}
        >
          {/* App Logo */}
          <Box
            component="img"
            src="/vite.svg"
            alt="App Logo"
            sx={{
              width: 64,
              height: 64,
              marginBottom: 2,
            }}
          />
          
          <Typography component="h1" variant="h4" sx={{ marginBottom: 1 }}>
            HR Dashboard
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
            Sign in to access your dashboard
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              sx={{ marginBottom: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 1, 
                mb: 2,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                }
              }}
            >
              Sign In
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant="body2" color="text.secondary">
              Demo Credentials: Use any email and password (min 6 characters)
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

// Dashboard Component (existing dashboard content)
function Dashboard({ userEmail, onLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    onLogout();
  };

  return (
    <Box className="dashboard-container">
      {/* Header */}
      <AppBar className="dashboard-header" position="static">
        <Toolbar className="header-toolbar">
          {/* Left side - App Logo and Name */}
          <Box className="app-logo-section">
            <Box
              component="img"
              src="/vite.svg"
              alt="App Logo"
              className="app-logo"
            />
            <Typography className="app-title" variant="h6" component="div">
              HR Dashboard
            </Typography>
          </Box>

          {/* Right side - Help and User Profile */}
          <Box className="header-actions">
            <IconButton className="header-button" color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton
              className="header-button"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Startup Logo Section */}
      <Box className="startup-logo-section">
        <Box
          component="img"
          src="/vite.svg"
          alt="Startup Logo"
          className="startup-logo"
        />
      </Box>

      {/* Main Content with Sidebar */}
      <Box className="main-content">
        <Sidebar />
        <Box className="content-area" component="main">
          <Routes>
            <Route path="/" element={<OrganizationChartPage />} />
            <Route path="/personal/hr" element={<PersonalHRInfoPage />} />
            <Route path="/personal/pro" element={<PersonalProInfoPage />} />
            <Route path="/coworkers/hr" element={<CoworkersHRInfoPage />} />
            <Route path="/coworkers/pro" element={<CoworkersProInfoPage />} />
            <Route path="/skills/personal" element={<PersonalSkillsPage />} />
            <Route path="/skills/coworkers" element={<CoworkersSkillsPage />} />
            <Route path="/goals/personal" element={<PersonalGoalsPage />} />
            <Route path="/goals/coworkers" element={<CoworkersGoalsPage />} />
            <Route path="/reviews/personal" element={<PersonalReviewsPage />} />
            <Route path="/reviews/coworkers" element={<CoworkersReviewsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Box>

      {/* Profile Menu */}
      <Menu
        className="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem className="profile-menu-item" onClick={handleMenuClose}>
          Profile ({userEmail})
        </MenuItem>
        <MenuItem className="profile-menu-item" onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem className="profile-menu-item" onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <Router>
      {isLoggedIn ? (
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
