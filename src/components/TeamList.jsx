import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TeamList = ({ teams, compareMode, selectedTeams, setSelectedTeams, onEdit, onDelete, onSelectTeam, selectedTeam }) => {
  const handleSelect = (team) => {
    if (selectedTeams.some((t) => t.name === team.name)) {
      setSelectedTeams(selectedTeams.filter((t) => t.name !== team.name));
    } else {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  return (
    <TableContainer component={Paper} className="card">
      <Table>
        <TableHead>
          <TableRow>
            {compareMode && <TableCell>Select</TableCell>}
            <TableCell>Team Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow
              key={team.name}
              hover
              selected={selectedTeam && selectedTeam.name === team.name}
              onClick={() => onSelectTeam && onSelectTeam(team)}
              style={{ cursor: 'pointer' }}
            >
              {compareMode && (
                <TableCell onClick={e => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedTeams.some((t) => t.name === team.name)}
                    onChange={() => handleSelect(team)}
                    color="primary"
                  />
                </TableCell>
              )}
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.description}</TableCell>
              <TableCell>{team.manager}</TableCell>
              <TableCell align="center" onClick={e => e.stopPropagation()}>
                <Tooltip title="Edit">
                  <IconButton color="primary" onClick={() => onEdit && onEdit(team)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell align="center" onClick={e => e.stopPropagation()}>
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => onDelete && onDelete(team)}>
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

export default TeamList; 