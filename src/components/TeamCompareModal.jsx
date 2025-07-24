import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';

const TeamCompareModal = ({ open, onClose, teams }) => {
  if (!open || !teams || teams.length < 2) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Compare Teams</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          {teams.map((team) => (
            <Paper key={team.name} className="card" sx={{ minWidth: 220, p: 2, flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>{team.name}</Typography>
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
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TeamCompareModal; 