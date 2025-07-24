import React from 'react';
import { Paper, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';

const EmployeeDetailCard = ({ employee }) => {
  if (!employee) return null;
  return (
    <Paper className="card" sx={{ p: 3, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 2, background: 'var(--card-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
        {employee.name}
      </Typography>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>{employee.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>{employee.team}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Experience</TableCell>
            <TableCell>{employee.experience} years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell>{employee.level}</TableCell>
          </TableRow>
          {/* Add more fields/competencies as needed */}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default EmployeeDetailCard; 