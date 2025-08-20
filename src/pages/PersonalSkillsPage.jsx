import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  LinearProgress, 
  Chip,
  Tabs,
  Tab,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Mock data - Replace with API calls to your backend
const mockEmployeeData = {
  employee_id: "ING1",
  team: "TEAM01",
  experience_years: 2.0,
  experience_level: "IDJ",
  competencies: [
    {
      competency_name: "Python",
      category: "Programming Languages",
      score: 3.0,
      level_name: "CONFIRME",
      last_updated: "2025-07-17T12:00:00Z"
    },
    {
      competency_name: "C++",
      category: "Programming Languages",
      score: 2.0,
      level_name: "JUNIOR",
      last_updated: "2025-07-17T12:00:00Z"
    },
    {
      competency_name: "React",
      category: "Frontend",
      score: 2.5,
      level_name: "JUNIOR+",
      last_updated: "2025-07-17T12:00:00Z"
    },
    {
      competency_name: "Node.js",
      category: "Backend",
      score: 3.0,
      level_name: "CONFIRME",
      last_updated: "2025-07-17T12:00:00Z"
    },
  ]
};

// Styled components
const SkillCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4]
  }
}));

const SkillLevel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,
  '& .MuiLinearProgress-root': {
    flexGrow: 1,
    marginRight: 8,
    height: 8,
    borderRadius: 4
  }
});

const PersonalSkillsPage = () => {
  const [tabValue, setTabValue] = useState('all');
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/employee/skills');
        // const data = await response.json();
        setSkills(mockEmployeeData.competencies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLevelColor = (level) => {
    switch(level) {
      case 'JUNIOR': return 'info';
      case 'JUNIOR+': return 'info';
      case 'CONFIRME': return 'success';
      case 'SENIOR': return 'warning';
      case 'EXPERT': return 'error';
      default: return 'default';
    }
  };

  const getFilteredSkills = () => {
    if (tabValue === 'all') return skills;
    return skills.filter(skill => skill.category === tabValue);
  };

  const categories = ['all', ...new Set(skills.map(skill => skill.category))];

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading skills...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Skills & Competencies
        </Typography>
        <Typography color="text.secondary">
          Track and manage your professional skills and growth
        </Typography>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Tabs 
            value={tabValue} 
            onChange={(e, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All Skills" value="all" />
            {categories.filter(cat => cat !== 'all').map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>
        
        <Divider sx={{ mb: 3 }} />

        {getFilteredSkills().length === 0 ? (
          <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
            No skills found in this category
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {getFilteredSkills().map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SkillCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6" component="div">
                        {skill.competency_name}
                      </Typography>
                      <Chip 
                        label={skill.level_name} 
                        size="small" 
                        color={getLevelColor(skill.level_name)}
                        variant="outlined"
                      />
                    </Box>
                    
                    <Typography color="text.secondary" variant="body2" gutterBottom>
                      {skill.category}
                    </Typography>
                    
                    <SkillLevel>
                      <LinearProgress 
                        variant="determinate" 
                        value={(skill.score / 4) * 100} 
                        color={getLevelColor(skill.level_name)}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {skill.score.toFixed(1)}/4.0
                      </Typography>
                    </SkillLevel>
                    
                    <Typography variant="caption" color="text.secondary">
                      Last updated: {new Date(skill.last_updated).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </SkillCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Box>
  );
};

export default PersonalSkillsPage;
