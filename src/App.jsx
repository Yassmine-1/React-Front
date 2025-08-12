import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from './components/Sidebar';
import OrganizationChartPage from './pages/OrganizationChartPage';
import './App.css';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
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
          <MenuItem className="profile-menu-item" onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem className="profile-menu-item" onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem className="profile-menu-item" onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Router>
  );
}

export default App;
