import React, { useState } from 'react';
import { 
  Box, Typography, Paper, Button, LinearProgress, 
  Card, CardContent, IconButton, TextField, Divider 
} from '@mui/material';
import { Add, Edit, Delete, CheckCircle } from '@mui/icons-material';

// Mock data
const initialObjectives = [
  {
    id: 1,
    title: "Enhance Technical Skills",
    progress: 45,
    keyResults: [
      { id: 101, title: "Complete React Course", completed: true },
      { id: 102, title: "Build 3 Projects", completed: true },
      { id: 103, title: "Learn TypeScript", completed: false },
    ]
  },
  {
    id: 2,
    title: "Improve Teamwork",
    progress: 75,
    keyResults: [
      { id: 201, title: "Lead Meetings", completed: true },
      { id: 202, title: "Mentor Junior", completed: true },
      { id: 203, title: "Documentation", completed: false },
    ]
  }
];

const PersonalGoalsPage = () => {
  const [objectives, setObjectives] = useState(initialObjectives);
  const [newObjective, setNewObjective] = useState('');

  const toggleKeyResult = (objectiveId, keyResultId) => {
    setObjectives(objectives.map(obj => {
      if (obj.id === objectiveId) {
        const updated = obj.keyResults.map(kr => 
          kr.id === keyResultId ? { ...kr, completed: !kr.completed } : kr
        );
        const progress = Math.round((updated.filter(kr => kr.completed).length / updated.length) * 100);
        return { ...obj, keyResults: updated, progress };
      }
      return obj;
    }));
  };

  const addObjective = () => {
    if (newObjective.trim()) {
      setObjectives([...objectives, {
        id: Date.now(),
        title: newObjective,
        progress: 0,
        keyResults: []
      }]);
      setNewObjective('');
    }
  };

  const deleteObjective = (id) => {
    setObjectives(objectives.filter(obj => obj.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>My OKRs</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            size="small"
            placeholder="New objective..."
            value={newObjective}
            onChange={(e) => setNewObjective(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addObjective()}
          />
          <Button 
            variant="contained" 
            onClick={addObjective}
            disabled={!newObjective.trim()}
          >
            Add
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gap: 3 }}>
        {objectives.map((obj) => (
          <Card key={obj.id}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">{obj.title}</Typography>
                <IconButton size="small" onClick={() => deleteObjective(obj.id)}>
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={obj.progress} 
                    color={
                      obj.progress < 30 ? 'error' : 
                      obj.progress < 70 ? 'warning' : 'success'
                    }
                    sx={{ height: 8, borderRadius: 2 }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {obj.progress}%
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ mt: 1 }}>
                {obj.keyResults.map((kr) => (
                  <Box 
                    key={kr.id} 
                    onClick={() => toggleKeyResult(obj.id, kr.id)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1,
                      cursor: 'pointer',
                      textDecoration: kr.completed ? 'line-through' : 'none',
                      color: kr.completed ? 'text.secondary' : 'inherit',
                      '&:hover': { bgcolor: 'action.hover', borderRadius: 1 }
                    }}
                  >
                    <CheckCircle 
                      color={kr.completed ? 'success' : 'disabled'} 
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2">
                      {kr.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PersonalGoalsPage;
