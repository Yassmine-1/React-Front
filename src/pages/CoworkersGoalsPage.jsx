import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CoworkersGoalsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Coworkers Goals
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Team goals and progress
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out team OKRs and alignment here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CoworkersGoalsPage;


