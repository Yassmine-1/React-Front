import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CoworkersProInfoPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Coworkers Professional Info
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          Professional profiles of your coworkers
        </Typography>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Typography variant="body2">
          This is a placeholder page. Build out coworkers' professional info here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CoworkersProInfoPage;


