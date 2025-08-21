import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, Button, 
  Grid, Divider, Avatar, InputAdornment, IconButton
} from '@mui/material';
import { Edit, Save, Email, Phone, LocationOn, Work, Cake, Person } from '@mui/icons-material';

const PersonalHRInfoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Alex Johnson',
    employeeId: 'EMP-2023-045',
    email: 'alex.johnson@company.com',
    phone: '(555) 123-4567',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    hireDate: '2021-03-15',
    dateOfBirth: '1990-07-22',
    address: '123 Tech Street, Silicon Valley, CA 94025',
    emergencyContact: 'Sarah Johnson (Spouse) - (555) 987-6543'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the data
    console.log('Form submitted:', formData);
    setIsEditing(false);
  };

  const renderField = (label, name, type = 'text', icon) => (
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label={label}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        disabled={!isEditing}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        }}
        variant={isEditing ? 'outlined' : 'filled'}
        sx={{ mb: 2 }}
      />
    </Grid>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" gutterBottom>Personal HR Information</Typography>
          <Typography color="text.secondary">
            View and update your human resources details
          </Typography>
        </Box>
        {!isEditing ? (
          <Button 
            variant="contained" 
            startIcon={<Edit />}
            onClick={() => setIsEditing(true)}
          >
            Edit Information
          </Button>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="outlined" 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              startIcon={<Save />}
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Box>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar sx={{ width: 80, height: 80, mr: 3, fontSize: '2rem' }}>
            {formData.fullName.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box>
            <Typography variant="h5">{formData.fullName}</Typography>
            <Typography color="text.secondary">{formData.position}</Typography>
            <Typography variant="body2" color="text.secondary">
              Employee ID: {formData.employeeId}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h6" gutterBottom>Personal Details</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {renderField('Full Name', 'fullName', 'text', <Person />)}
            {renderField('Email', 'email', 'email', <Email />)}
            {renderField('Phone', 'phone', 'tel', <Phone />)}
            {renderField('Date of Birth', 'dateOfBirth', 'date', <Cake />)}
            {renderField('Address', 'address', 'text', <LocationOn />)}
            {renderField('Emergency Contact', 'emergencyContact', 'text', <Phone />)}
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Employment Details</Typography>
          <Grid container spacing={2}>
            {renderField('Department', 'department', 'text', <Work />)}
            {renderField('Position', 'position', 'text', <Work />)}
            {renderField('Hire Date', 'hireDate', 'date', <Work />)}
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default PersonalHRInfoPage;
