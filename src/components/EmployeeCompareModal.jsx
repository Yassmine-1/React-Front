import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';

const EmployeeCompareModal = ({ open, onClose, employees }) => {
  if (!open || !employees || employees.length < 2) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Compare Employees</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          {employees.map((emp) => (
            <Paper key={emp.id} className="card" sx={{ minWidth: 220, p: 2, flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>{emp.name}</Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>{emp.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Team</TableCell>
                    <TableCell>{emp.team}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Experience</TableCell>
                    <TableCell>{emp.experience} years</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>{emp.level}</TableCell>
                  </TableRow>
                  {/* Add more fields/competencies as needed */}
                </TableBody>
              </Table>
            </Paper>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeCompareModal; 