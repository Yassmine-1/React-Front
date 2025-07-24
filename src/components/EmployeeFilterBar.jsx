import React from 'react';
import { Box, Autocomplete, TextField, Slider, Chip, Button } from '@mui/material';

const mockCompetencies = [
  { name: 'Python' },
  { name: 'C++' },
  { name: 'Linux' },
];
const mockTeams = [
  { name: 'TEAM01' },
  { name: 'TEAM02' },
  { name: 'TEAM03' },
];
const mockLevels = [
  { name: 'IDJ' },
  { name: 'IDC' },
  { name: 'EXP' },
];

const EmployeeFilterBar = ({ filterState, onFilterChange }) => (
  <Box className="card" sx={{ mb: 3, p: 2, display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
    <Autocomplete
      multiple
      options={mockCompetencies}
      getOptionLabel={opt => opt.name}
      value={filterState.competencies}
      onChange={(_, value) => onFilterChange({ ...filterState, competencies: value })}
      renderInput={params => <TextField {...params} label="Competencies" />}
      sx={{ minWidth: 200 }}
    />
    <Autocomplete
      multiple
      options={mockTeams}
      getOptionLabel={opt => opt.name}
      value={filterState.teams}
      onChange={(_, value) => onFilterChange({ ...filterState, teams: value })}
      renderInput={params => <TextField {...params} label="Teams" />}
      sx={{ minWidth: 160 }}
    />
    <Autocomplete
      multiple
      options={mockLevels}
      getOptionLabel={opt => opt.name}
      value={filterState.levels}
      onChange={(_, value) => onFilterChange({ ...filterState, levels: value })}
      renderInput={params => <TextField {...params} label="Levels" />}
      sx={{ minWidth: 120 }}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
            sx={{
              background: 'var(--button-gradient)',
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        ))
      }
    />
    <Box sx={{ minWidth: 180 }}>
      <Slider
        value={filterState.experience}
        onChange={(_, value) => onFilterChange({ ...filterState, experience: value })}
        valueLabelDisplay="auto"
        min={0}
        max={40}
        marks
      />
      <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
        Experience: {filterState.experience[0]} - {filterState.experience[1]} years
      </div>
    </Box>
    <Button variant="contained" className="btn-gradient">
      Filter
    </Button>
  </Box>
);

export default EmployeeFilterBar; 