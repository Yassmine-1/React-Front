import React, { useState } from 'react';
import { 
  Box, Typography, Paper, Tabs, Tab, Divider, 
  List, ListItem, ListItemText, ListItemIcon, 
  LinearProgress, Chip, Button, Avatar, Grid
} from '@mui/material';
import { Star, StarHalf, StarBorder, Event, Person, Assessment } from '@mui/icons-material';

// Mock data for reviews
const reviews = [
  {
    id: 1,
    period: 'Q2 2023',
    date: '2023-06-30',
    status: 'Completed',
    reviewer: 'Sarah Johnson',
    reviewerRole: 'Engineering Manager',
    rating: 4.5,
    strengths: [
      'Excellent problem-solving skills',
      'Strong team collaboration',
      'Consistently meets deadlines'
    ],
    areasForImprovement: [
      'Could take more initiative in mentoring junior team members',
      'Documentation could be more detailed'
    ],
    comments: 'John has shown significant growth this quarter. His contributions to the new authentication system were outstanding. Looking forward to seeing more leadership in mentoring junior developers.'
  },
  {
    id: 2,
    period: 'Q1 2023',
    date: '2023-03-31',
    status: 'Completed',
    reviewer: 'Sarah Johnson',
    reviewerRole: 'Engineering Manager',
    rating: 4.0,
    strengths: [
      'Strong technical skills',
      'Good communication with team',
      'Reliable and consistent performer'
    ],
    areasForImprovement: [
      'Could improve on cross-team collaboration',
      'Should work on time management for larger projects'
    ],
    comments: 'Solid performance this quarter. John has been a reliable team member. We discussed opportunities for growth in project management.'
  },
  {
    id: 3,
    period: 'Q4 2022',
    date: '2022-12-31',
    status: 'Completed',
    reviewer: 'Michael Chen',
    reviewerRole: 'Senior Engineering Manager',
    rating: 4.2,
    strengths: [
      'Quick learner',
      'Strong coding practices',
      'Good team player'
    ],
    areasForImprovement: [
      'Needs to speak up more in meetings',
      'Should take on more challenging tasks'
    ],
    comments: 'John has integrated well into the team. With more experience, I expect to see him take on more responsibility.'
  }
];

// Component to render star rating
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} color="primary" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<StarHalf key={i} color="primary" />);
    } else {
      stars.push(<StarBorder key={i} color="primary" />);
    }
  }

  return <Box sx={{ display: 'flex', alignItems: 'center' }}>{stars}</Box>;
};

// Component for individual review card
const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Paper sx={{ p: 3, mb: 3, position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom>{review.period} Performance Review</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Event fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Completed on {new Date(review.date).toLocaleDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Person fontSize="small" color="action" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Reviewed by {review.reviewer}, {review.reviewerRole}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Chip 
            label={review.status} 
            color={review.status === 'Completed' ? 'success' : 'default'}
            size="small"
            variant="outlined"
            sx={{ mb: 1 }}
          />
          <StarRating rating={review.rating} />
          <Typography variant="caption" color="text.secondary">
            {review.rating.toFixed(1)}/5.0
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" gutterBottom>Strengths</Typography>
          <List dense>
            {review.strengths.map((strength, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Star color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={strength} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" gutterBottom>Areas for Improvement</Typography>
          <List dense>
            {review.areasForImprovement.map((area, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Assessment color="action" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={area} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {expanded && (
        <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Typography variant="subtitle2" gutterBottom>Additional Comments</Typography>
          <Typography variant="body2" paragraph>{review.comments}</Typography>
        </Box>
      )}

      <Box sx={{ textAlign: 'right', mt: 1 }}>
        <Button 
          size="small" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Read Full Review'}
        </Button>
      </Box>
    </Paper>
  );
};

// Component for performance summary
const PerformanceSummary = () => {
  const ratings = reviews.map(r => r.rating);
  const avgRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
  const maxRating = Math.max(...ratings);
  const minRating = Math.min(...ratings);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>Performance Overview</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary">{avgRating}</Typography>
            <StarRating rating={avgRating} />
            <Typography variant="body2" color="text.secondary">Average Rating</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" color="primary">{maxRating.toFixed(1)}</Typography>
            <Typography variant="body2" color="text.secondary">Highest Rating</Typography>
            <Typography variant="caption" color="text.secondary">
              {reviews.find(r => r.rating === maxRating).period}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" color="primary">{minRating.toFixed(1)}</Typography>
            <Typography variant="body2" color="text.secondary">Lowest Rating</Typography>
            <Typography variant="caption" color="text.secondary">
              {reviews.find(r => r.rating === minRating).period}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

const PersonalReviewsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>My Performance Reviews</Typography>
        <Typography color="text.secondary">
          Track your performance history and feedback
        </Typography>
      </Box>

      <PerformanceSummary />

      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        sx={{ mb: 3 }}
      >
        <Tab label="All Reviews" />
        <Tab label="2023" />
        <Tab label="2022" />
      </Tabs>

      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="outlined" startIcon={<Assessment />}>
          Request 360° Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalReviewsPage;
