import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, Grid, 
  Avatar, Chip, Tabs, Tab, Divider, Card, 
  CardContent, CardMedia, Button, Dialog, DialogTitle,
  DialogContent, DialogActions, IconButton
} from '@mui/material';
import { Search, Work, School, Code, Star, Close } from '@mui/icons-material';

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    experience: [
      { role: 'Senior Developer', company: 'Tech Corp', years: 3 },
      { role: 'Full Stack Developer', company: 'Web Solutions', years: 4 }
    ],
    education: 'MSc in Computer Science',
    avatar: 'JD',
    bio: 'Passionate about building scalable web applications with modern JavaScript frameworks.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'UX/UI Designer',
    department: 'Design',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    experience: [
      { role: 'Senior Designer', company: 'DesignHub', years: 2 },
      { role: 'UI Designer', company: 'CreativeMinds', years: 3 }
    ],
    education: 'BFA in Design',
    avatar: 'JS',
    bio: 'Creating beautiful and intuitive user experiences that solve real problems.'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    title: 'Product Manager',
    department: 'Product',
    skills: ['Agile', 'Scrum', 'Product Strategy', 'User Stories'],
    experience: [
      { role: 'Product Lead', company: 'ProductLabs', years: 2 },
      { role: 'Associate PM', company: 'StartUp Co', years: 3 }
    ],
    education: 'MBA in Product Management',
    avatar: 'AJ',
    bio: 'Driving product vision and strategy to deliver exceptional user experiences.'
  },
  {
    id: 4,
    name: 'Maria Garcia',
    title: 'DevOps Engineer',
    department: 'Engineering',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    experience: [
      { role: 'DevOps Engineer', company: 'CloudTech', years: 3 },
      { role: 'System Administrator', company: 'DataSystems', years: 2 }
    ],
    education: 'BSc in Computer Science',
    avatar: 'MG',
    bio: 'Building and maintaining scalable infrastructure for high-availability systems.'
  }
];

const departments = ['All', 'Engineering', 'Design', 'Product'];

const CoworkersProInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDept = selectedDept === 'All' || member.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Team Directory</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Browse and connect with your colleagues
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <TextField
          placeholder="Search by name or skills..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
            sx: { width: 300 }
          }}
        />
        
        <Tabs 
          value={selectedDept} 
          onChange={(e, newValue) => setSelectedDept(newValue)}
          indicatorColor="primary"
          textColor="primary"
          sx={{ minHeight: 'auto' }}
        >
          {departments.map(dept => (
            <Tab 
              key={dept} 
              value={dept} 
              label={dept}
              sx={{ minHeight: 'auto', py: 1, px: 2 }}
            />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 1
                }
              }}
              onClick={() => handleMemberClick(member)}
            >
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 64, height: 64, fontSize: '1.5rem', mr: 2 }}>
                  {member.avatar}
                </Avatar>
                <Box>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.title}</Typography>
                  <Chip 
                    label={member.department} 
                    size="small" 
                    variant="outlined" 
                    sx={{ mt: 0.5 }}
                  />
                </Box>
              </Box>
              
              <Divider />
              
              <Box sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                  {member.skills.slice(0, 4).map((skill, index) => (
                    <Chip 
                      key={index} 
                      label={skill} 
                      size="small" 
                      variant="outlined"
                    />
                  ))}
                  {member.skills.length > 4 && (
                    <Chip 
                      label={`+${member.skills.length - 4}`} 
                      size="small"
                      variant="outlined"
                    />
                  )}
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }} noWrap>
                  {member.bio}
                </Typography>
              </Box>
              
              <Box sx={{ p: 2, pt: 0, textAlign: 'right' }}>
                <Button size="small" color="primary">View Profile</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Member Detail Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedMember && (
          <>
            <DialogTitle sx={{ m: 0, p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{selectedMember.name}</Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{ color: (theme) => theme.palette.grey[500] }}
                >
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 120, height: 120, fontSize: '2.5rem', mb: 2 }}>
                      {selectedMember.avatar}
                    </Avatar>
                    <Typography variant="h6">{selectedMember.name}</Typography>
                    <Typography color="primary" sx={{ mb: 1 }}>{selectedMember.title}</Typography>
                    <Chip 
                      label={selectedMember.department} 
                      color="primary" 
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      CONTACT
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {selectedMember.name.toLowerCase().replace(/\s+/g, '.')}@company.com
                    </Typography>
                    <Typography variant="body2">
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      SKILLS
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selectedMember.skills.map((skill, index) => (
                        <Chip 
                          key={index} 
                          label={skill} 
                          size="small" 
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={8}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>About</Typography>
                    <Typography variant="body1">
                      {selectedMember.bio}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>Experience</Typography>
                    {selectedMember.experience.map((exp, index) => (
                      <Box key={index} sx={{ mb: 2, '&:last-child': { mb: 0 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1">{exp.role}</Typography>
                          <Typography color="text.secondary">{exp.years} years</Typography>
                        </Box>
                        <Typography variant="body2" color="primary">{exp.company}</Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Box>
                    <Typography variant="h6" gutterBottom>Education</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <School color="primary" sx={{ mr: 1 }} />
                      <Typography>{selectedMember.education}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" color="primary">Send Message</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default CoworkersProInfoPage;
