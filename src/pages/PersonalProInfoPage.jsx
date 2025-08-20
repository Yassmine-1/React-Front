import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const PersonalProInfoPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Personal Professional Info
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Your professional profile details
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out your personal professional info here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default PersonalProInfoPage;


