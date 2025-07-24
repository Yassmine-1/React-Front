import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const mockEmployees = [
  { id: 'ING1', name: 'Alice', team: 'TEAM01', experience: 2, level: 'IDJ' },
  { id: 'ING2', name: 'Bob', team: 'TEAM02', experience: 3, level: 'IDC' },
  { id: 'ING3', name: 'Charlie', team: 'TEAM01', experience: 5, level: 'EXP' },
];

const EmployeeList = ({ filterState, compareMode, selectedEmployees, setSelectedEmployees, onSelectEmployee, selectedEmployee, onEdit, onDelete }) => {
  // Filtering logic placeholder (to be implemented)
  const employees = mockEmployees;

  const handleSelect = (emp) => {
    if (selectedEmployees.some((e) => e.id === emp.id)) {
      setSelectedEmployees(selectedEmployees.filter((e) => e.id !== emp.id));
    } else {
      setSelectedEmployees([...selectedEmployees, emp]);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {compareMode && <TableCell>Select</TableCell>}
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Experience (years)</TableCell>
            <TableCell>Level</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              hover
              selected={selectedEmployee && selectedEmployee.id === emp.id}
              onClick={() => onSelectEmployee && onSelectEmployee(emp)}
              style={{ cursor: 'pointer' }}
            >
              {compareMode && (
                <TableCell onClick={e => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedEmployees.some((e) => e.id === emp.id)}
                    onChange={() => handleSelect(emp)}
                    color="primary"
                  />
                </TableCell>
              )}
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.team}</TableCell>
              <TableCell>{emp.experience}</TableCell>
              <TableCell>{emp.level}</TableCell>
              <TableCell align="center" onClick={e => e.stopPropagation()}>
                <Tooltip title="Edit">
                  <IconButton color="primary" onClick={() => onEdit && onEdit(emp)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell align="center" onClick={e => e.stopPropagation()}>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => onDelete && onDelete(emp)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
