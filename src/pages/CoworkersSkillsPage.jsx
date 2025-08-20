import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CoworkersSkillsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Coworkers Skills
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Skills and competencies across the team
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out team skills matrices here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CoworkersSkillsPage;


