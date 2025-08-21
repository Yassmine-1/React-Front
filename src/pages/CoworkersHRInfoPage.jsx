import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, Table, 
  TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Avatar, Chip
} from '@mui/material';
import { Search } from '@mui/icons-material';

// Mock data
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Engineering',
    position: 'Senior Developer',
    email: 'john.doe@company.com',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'Design',
    position: 'UI/UX Designer',
    email: 'jane.smith@company.com',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    department: 'Marketing',
    position: 'Marketing Manager',
    email: 'alex.j@company.com',
    status: 'On Leave'
  }
];

const statusColors = {
  'Active': 'success',
  'On Leave': 'warning',
  'Inactive': 'error'
};

const CoworkersHRInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(member => 
    Object.values(member).some(
      value => value && 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team HR Directory</Typography>
      
      <TextField
        fullWidth
        size="small"
        placeholder="Search team members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
        }}
        sx={{ maxWidth: 400, mb: 3 }}
      />

      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow hover key={member.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar>{member.name.split(' ').map(n => n[0]).join('')}</Avatar>
                      {member.name}
                    </Box>
                  </TableCell>
                  <TableCell>{member.department}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <Chip 
                      label={member.status}
                      size="small"
                      color={statusColors[member.status] || 'default'}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default CoworkersHRInfoPage;
