import React from 'react';
import { Paper, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';

const TeamDetailCard = ({ team }) => {
  if (!team) return null;
  return (
    <Paper className="card" sx={{ p: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 2, background: 'var(--card-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
        {team.name}
      </Typography>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{team.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Manager</TableCell>
            <TableCell>{team.manager}</TableCell>
          </TableRow>
          {/* Add more fields as needed */}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TeamDetailCard; 