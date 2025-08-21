import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, Avatar, 
  Chip, Button, Grid, LinearProgress, Divider
} from '@mui/material';
import { Search, Star, StarHalf, StarBorder } from '@mui/icons-material';

const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Developer', rating: 4.5, status: 'On Track', avatar: 'JD' },
  { id: 2, name: 'Jane Smith', role: 'Designer', rating: 4.8, status: 'Exceeding', avatar: 'JS' },
  { id: 3, name: 'Alex Johnson', role: 'PM', rating: 3.9, status: 'On Track', avatar: 'AJ' },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} color="primary" fontSize="small" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<StarHalf key={i} color="primary" fontSize="small" />);
    } else {
      stars.push(<StarBorder key={i} color="primary" fontSize="small" />);
    }
  }
  return <Box sx={{ display: 'flex' }}>{stars}</Box>;
};

const CoworkersReviewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team Performance</Typography>
      
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Search team..."
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />
          }}
          sx={{ width: 300 }}
        />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {filteredMembers.map((member) => (
            <Paper key={member.id} sx={{ p: 2, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ mr: 2 }}>{member.avatar}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <StarRating rating={member.rating} />
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      {member.rating.toFixed(1)}
                    </Typography>
                  </Box>
                </Box>
                <Chip 
                  label={member.status}
                  color={member.status === 'Exceeding' ? 'success' : 'primary'}
                  size="small"
                />
              </Box>
              <Button size="small" sx={{ mt: 1 }}>View Details</Button>
            </Paper>
          ))}
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, position: 'sticky', top: 20 }}>
            <Typography variant="h6" gutterBottom>Team Stats</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Average Rating</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={85} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                <Typography>4.4</Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="body2" gutterBottom>Performance</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Exceeding</Typography>
                <Typography>1</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">On Track</Typography>
                <Typography>2</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Needs Improvement</Typography>
                <Typography>0</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoworkersReviewsPage;
