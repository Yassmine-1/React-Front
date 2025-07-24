import React from 'react';
import { Paper, Typography, Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const mockLevels = [
  { id: 0, name: 'PAS FORME', description: 'Not trained - No knowledge or experience', min: 0.0, max: 0.9 },
  { id: 1, name: 'THEORIQUE', description: 'Theoretical knowledge', min: 1.0, max: 1.9 },
  { id: 2, name: 'JUNIOR', description: 'Junior level', min: 2.0, max: 2.9 },
  { id: 3, name: 'CONFIRME', description: 'Confirmed level', min: 3.0, max: 3.9 },
  { id: 4, name: 'EXPERT', description: 'Expert level', min: 4.0, max: 4.0 },
];

const LevelsPage = () => (
  <div style={{ marginLeft: 240, padding: 24 }}>
    <Typography variant="h4" gutterBottom>Competency Levels</Typography>
    <Paper className="card" sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" className="card-header" sx={{ mb: 2 }}>Add Level</Typography>
      <Box component="form" sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Level Name" required />
        <TextField label="Description" />
        <TextField label="Min Score" type="number" />
        <TextField label="Max Score" type="number" />
        <Button type="submit" variant="contained" className="btn-gradient">Add</Button>
      </Box>
    </Paper>
    <TableContainer component={Paper} className="card">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Min Score</TableCell>
            <TableCell>Max Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockLevels.map((level) => (
            <TableRow key={level.id}>
              <TableCell>{level.id}</TableCell>
              <TableCell>{level.name}</TableCell>
              <TableCell>{level.description}</TableCell>
              <TableCell>{level.min}</TableCell>
              <TableCell>{level.max}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default LevelsPage; 