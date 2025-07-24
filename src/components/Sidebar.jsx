import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Employees', icon: <PeopleIcon />, path: '/employees' },
  { text: 'Teams', icon: <GroupIcon />, path: '/teams' },
  { text: 'Competencies', icon: <SchoolIcon />, path: '/competencies' },
  { text: 'Levels', icon: <StarIcon />, path: '/levels' },
];

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
