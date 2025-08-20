import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PersonalGoalsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Personal Goals
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Your objectives and key results
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out your OKRs and progress tracking here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PersonalGoalsPage;


