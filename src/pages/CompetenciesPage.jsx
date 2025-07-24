import React from 'react';
import { Paper, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const mockCompetencies = [
  { name: 'Python', category: 'Programming Languages', description: 'Python programming language skills' },
  { name: 'C++', category: 'Programming Languages', description: 'C++ programming language skills' },
];

const CompetenciesPage = () => (
  <div style={{ marginLeft: 240, padding: 24 }}>
    <Typography variant="h4" gutterBottom>Competencies</Typography>
    <Paper className="card" sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" className="card-header" sx={{ mb: 2 }}>Add Competency</Typography>
      <Box component="form" sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Competency Name" required />
        <TextField label="Category" />
        <TextField label="Description" />
        <Button type="submit" variant="contained" className="btn-gradient">Add</Button>
      </Box>
    </Paper>
    <TableContainer component={Paper} className="card">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockCompetencies.map((comp) => (
            <TableRow key={comp.name}>
              <TableCell>{comp.name}</TableCell>
              <TableCell>{comp.category}</TableCell>
              <TableCell>{comp.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default CompetenciesPage; 