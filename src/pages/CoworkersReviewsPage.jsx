import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CoworkersReviewsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Coworkers Reviews
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Team performance reviews
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out team review data here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CoworkersReviewsPage;


