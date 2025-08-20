import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PersonalReviewsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Personal Reviews
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Your performance reviews
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out your review history and feedback here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PersonalReviewsPage;


