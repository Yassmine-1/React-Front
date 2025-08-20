import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Collapse,
  ListItemButton,
  Typography,
  Box
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Person,
  Work,
  School,
  Star,
  RateReview,
  Group,
  BusinessCenter,
  Psychology,
  TrendingUp,
  AccountTree
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    organizationChart: false,
    personalInfo: false,
    coworkersInfo: false,
    skills: false,
    goals: false,
    reviews: false
  });

  const handleSectionToggle = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Drawer 
      variant="permanent" 
      anchor="left"
      className="sidebar-drawer"
      classes={{
        paper: 'sidebar-paper'
      }}
    >
      <Box className="sidebar-header">
        <Typography className="sidebar-title" variant="h6">
          Navigation
        </Typography>
      </Box>
      
      <List className="sidebar-list">
        {/* Organization Chart Section */}
        <ListItem disablePadding className="sidebar-section-item organization-chart">
          <ListItemButton 
            className="sidebar-section-button"
            component={Link}
            to="/"
          >
            <ListItemIcon className="sidebar-section-icon">
              <AccountTree />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Organization Chart" />
          </ListItemButton>
        </ListItem>

        {/* Personal Info Section */}
        <ListItem disablePadding className="sidebar-section-item personal-info">
          <ListItemButton 
            className="sidebar-section-button"
            onClick={() => handleSectionToggle('personalInfo')}
          >
            <ListItemIcon className="sidebar-section-icon">
              <Person />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Personal Info" />
            {openSections.personalInfo ? 
              <ExpandLess className="expand-icon expanded" /> : 
              <ExpandMore className="expand-icon" />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={openSections.personalInfo} timeout="auto" unmountOnExit className="sidebar-collapse">
          <List component="div" disablePadding className="sidebar-subsection">
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/personal/hr">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Work />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="HR Info" />
              </ListItemButton>
            </ListItem>
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/personal/pro">
                <ListItemIcon className="sidebar-subsection-icon">
                  <BusinessCenter />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Pro Info" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Coworkers Info Section */}
        <ListItem disablePadding className="sidebar-section-item coworkers-info">
          <ListItemButton 
            className="sidebar-section-button"
            onClick={() => handleSectionToggle('coworkersInfo')}
          >
            <ListItemIcon className="sidebar-section-icon">
              <Group />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Coworkers Info" />
            {openSections.coworkersInfo ? 
              <ExpandLess className="expand-icon expanded" /> : 
              <ExpandMore className="expand-icon" />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={openSections.coworkersInfo} timeout="auto" unmountOnExit className="sidebar-collapse">
          <List component="div" disablePadding className="sidebar-subsection">
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/coworkers/hr">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Work />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="HR Info" />
              </ListItemButton>
            </ListItem>
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/coworkers/pro">
                <ListItemIcon className="sidebar-subsection-icon">
                  <BusinessCenter />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Pro Info" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Skills Section */}
        <ListItem disablePadding className="sidebar-section-item skills">
          <ListItemButton 
            className="sidebar-section-button"
            onClick={() => handleSectionToggle('skills')}
          >
            <ListItemIcon className="sidebar-section-icon">
              <School />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Skills" />
            {openSections.skills ? 
              <ExpandLess className="expand-icon expanded" /> : 
              <ExpandMore className="expand-icon" />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={openSections.skills} timeout="auto" unmountOnExit className="sidebar-collapse">
          <List component="div" disablePadding className="sidebar-subsection">
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/skills/personal">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Psychology />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Personal Skills" />
              </ListItemButton>
            </ListItem>
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/skills/coworkers">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Group />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Coworkers Skills" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Goals Section */}
        <ListItem disablePadding className="sidebar-section-item goals">
          <ListItemButton 
            className="sidebar-section-button"
            onClick={() => handleSectionToggle('goals')}
          >
            <ListItemIcon className="sidebar-section-icon">
              <Star />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Goals" />
            {openSections.goals ? 
              <ExpandLess className="expand-icon expanded" /> : 
              <ExpandMore className="expand-icon" />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={openSections.goals} timeout="auto" unmountOnExit className="sidebar-collapse">
          <List component="div" disablePadding className="sidebar-subsection">
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/goals/personal">
                <ListItemIcon className="sidebar-subsection-icon">
                  <TrendingUp />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Personal Goals" />
              </ListItemButton>
            </ListItem>
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/goals/coworkers">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Group />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Coworkers Goals" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        {/* Reviews Section */}
        <ListItem disablePadding className="sidebar-section-item reviews">
          <ListItemButton 
            className="sidebar-section-button"
            onClick={() => handleSectionToggle('reviews')}
          >
            <ListItemIcon className="sidebar-section-icon">
              <RateReview />
            </ListItemIcon>
            <ListItemText className="sidebar-section-text" primary="Reviews" />
            {openSections.reviews ? 
              <ExpandLess className="expand-icon expanded" /> : 
              <ExpandMore className="expand-icon" />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={openSections.reviews} timeout="auto" unmountOnExit className="sidebar-collapse">
          <List component="div" disablePadding className="sidebar-subsection">
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/reviews/personal">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Person />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Personal Reviews" />
              </ListItemButton>
            </ListItem>
            <ListItem className="sidebar-subsection-item">
              <ListItemButton className="sidebar-subsection-button" component={Link} to="/reviews/coworkers">
                <ListItemIcon className="sidebar-subsection-icon">
                  <Group />
                </ListItemIcon>
                <ListItemText className="sidebar-subsection-text" primary="Coworkers Reviews" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
