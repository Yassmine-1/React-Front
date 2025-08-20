import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CoworkersHRInfoPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Coworkers HR Info
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          HR details for your coworkers
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out coworkers' HR information here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CoworkersHRInfoPage;


