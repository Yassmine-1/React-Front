import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Chip, TextField, LinearProgress, Avatar
} from '@mui/material';
import { Search } from '@mui/icons-material';

// Mock data
const mockTeamData = [
  {
    _id: "1",
    name: "John Doe",
    team: "Frontend",
    experience_level: "SENIOR",
    competencies: [
      { competency_name: "React", score: 4.0, level_name: "EXPERT" },
      { competency_name: "TypeScript", score: 3.5, level_name: "SENIOR" },
    ]
  },
  {
    _id: "2",
    name: "Jane Smith",
    team: "Backend",
    experience_level: "CONFIRME",
    competencies: [
      { competency_name: "Python", score: 3.0, level_name: "CONFIRME" },
      { competency_name: "Django", score: 3.0, level_name: "CONFIRME" },
    ]
  },
];

const getLevelColor = (level) => ({
  'JUNIOR': 'info',
  'JUNIOR+': 'info',
  'CONFIRME': 'success',
  'SENIOR': 'warning',
  'EXPERT': 'error'
})[level] || 'default';

const CoworkersSkillsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamFilter, setTeamFilter] = useState('all');
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMembers(mockTeamData);
      setLoading(false);
    }, 500);
  }, []);

  const filteredMembers = members.filter(member => 
    (teamFilter === 'all' || member.team === teamFilter) &&
    (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     member.team.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const allSkills = [...new Set(members.flatMap(m => 
    m.competencies.map(c => c.competency_name)
  ))].sort();

  if (loading) return <LinearProgress />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team Skills Matrix</Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          placeholder="Search members..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
          }}
        />
        <select 
          value={teamFilter}
          onChange={(e) => setTeamFilter(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          <option value="all">All Teams</option>
          {[...new Set(members.map(m => m.team))].map(team => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team Member</TableCell>
              <TableCell>Experience</TableCell>
              {allSkills.map(skill => (
                <TableCell key={skill}>{skill}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map(member => (
              <TableRow key={member._id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {member.name[0]}
                    </Avatar>
                    {member.name}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={member.experience_level}
                    size="small"
                    color={getLevelColor(member.experience_level)}
                  />
                </TableCell>
                {allSkills.map(skill => {
                  const competency = member.competencies.find(c => c.competency_name === skill);
                  return (
                    <TableCell key={skill}>
                      {competency ? (
                        <Chip
                          label={competency.score.toFixed(1)}
                          size="small"
                          color={getLevelColor(competency.level_name)}
                          variant="outlined"
                        />
                      ) : '-'}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CoworkersSkillsPage;
