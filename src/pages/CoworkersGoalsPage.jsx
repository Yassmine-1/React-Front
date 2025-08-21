import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, TextField } from '@mui/material';

const teamGoals = [
  {
    id: 1,
    title: 'Q3 Product Launch',
    progress: 65,
    due: 'Sep 30, 2023',
    owner: 'Product Team'
  },
  {
    id: 2,
    title: 'Code Quality',
    progress: 40,
    due: 'Oct 15, 2023',
    owner: 'Engineering'
  },
  {
    id: 3,
    title: 'Team Development',
    progress: 75,
    due: 'Dec 31, 2023',
    owner: 'HR'
  }
];

const GoalCard = ({ goal }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{goal.title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={goal.progress} 
            color={goal.progress < 30 ? 'error' : goal.progress < 70 ? 'warning' : 'success'}
            sx={{ height: 8, borderRadius: 2 }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {goal.progress}%
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="caption" color="text.secondary">
          {goal.owner}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Due: {goal.due}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const CoworkersGoalsPage = () => {
  const [search, setSearch] = useState('');
  
  const filtered = teamGoals.filter(g => 
    g.title.toLowerCase().includes(search.toLowerCase()) ||
    g.owner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team Goals</Typography>
      
      <TextField
        fullWidth
        size="small"
        placeholder="Search goals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      
      {filtered.map(goal => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
      
      {filtered.length === 0 && (
        <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
          No goals found matching your search
        </Typography>
      )}
    </Box>
  );
};

export default CoworkersGoalsPage;
