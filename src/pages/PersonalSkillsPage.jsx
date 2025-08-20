import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PersonalSkillsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Personal Skills
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Your skills and competencies
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out your skills list and ratings here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PersonalSkillsPage;


