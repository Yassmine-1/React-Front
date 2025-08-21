import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, Button, 
  Grid, Divider, Avatar, Chip, Tabs, Tab,
  List, ListItem, ListItemText, ListItemIcon, IconButton
} from '@mui/material';
import { Edit, Save, Work, School, Code, Language, Star } from '@mui/icons-material';

const skills = [
  { name: 'React', level: 4, category: 'Frontend' },
  { name: 'Node.js', level: 4, category: 'Backend' },
  { name: 'MongoDB', level: 3, category: 'Database' },
  { name: 'JavaScript', level: 5, category: 'Language' },
  { name: 'TypeScript', level: 3, category: 'Language' },
  { name: 'Material-UI', level: 4, category: 'Frontend' },
];

const experience = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp Inc.',
    period: '2020 - Present',
    description: 'Leading frontend development and mentoring junior developers.'
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Web Solutions Ltd.',
    period: '2018 - 2020',
    description: 'Developed and maintained web applications using React and Node.js.'
  },
];

const education = [
  {
    id: 1,
    degree: 'MSc in Computer Science',
    institution: 'Tech University',
    period: '2016 - 2018'
  },
  {
    id: 2,
    degree: 'BSc in Software Engineering',
    institution: 'State University',
    period: '2012 - 2016'
  },
];

const PersonalProInfoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  const [profile, setProfile] = useState({
    summary: 'Experienced software engineer with 5+ years of experience in web development. Specialized in React and Node.js with a passion for creating efficient and user-friendly applications.',
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'French', level: 'Professional' },
      { name: 'Spanish', level: 'Basic' },
    ]
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderStars = (level) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} color={i < level ? 'primary' : 'disabled'} fontSize="small" />
    ));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>Professional Profile</Typography>
          <Typography color="text.secondary">
            Manage your professional information and experience
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={isEditing ? <Save /> : <Edit />}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Professional Summary</Typography>
        {isEditing ? (
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={profile.summary}
            onChange={(e) => setProfile({...profile, summary: e.target.value})}
          />
        ) : (
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {profile.summary}
          </Typography>
        )}
      </Paper>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="Skills" />
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Languages" />
      </Tabs>

      <Paper sx={{ p: 3 }}>
        {tabValue === 0 && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Skills & Expertise</Typography>
              {isEditing && <Button size="small">+ Add Skill</Button>}
            </Box>
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2">{skill.name}</Typography>
                      <Chip label={skill.category} size="small" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      {renderStars(skill.level)}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Work Experience</Typography>
              {isEditing && <Button size="small">+ Add Experience</Button>}
            </Box>
            <List>
              {experience.map((exp) => (
                <React.Fragment key={exp.id}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 1 }}>
                      <Work color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">{exp.title}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {exp.period}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography variant="subtitle2" color="text.primary">
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.description}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Education</Typography>
              {isEditing && <Button size="small">+ Add Education</Button>}
            </Box>
            <List>
              {education.map((edu) => (
                <React.Fragment key={edu.id}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 1 }}>
                      <School color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">{edu.degree}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {edu.period}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {edu.institution}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}

        {tabValue === 3 && (
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Languages</Typography>
              {isEditing && <Button size="small">+ Add Language</Button>}
            </Box>
            <Grid container spacing={2}>
              {profile.languages.map((lang, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle1">{lang.name}</Typography>
                      <Chip label={lang.level} size="small" />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default PersonalProInfoPage;
