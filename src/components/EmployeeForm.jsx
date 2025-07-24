import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Paper, Stack } from '@mui/material';

const levels = [
  { value: 'IDJ', label: 'IDJ' },
  { value: 'IDC', label: 'IDC' },
  { value: 'EXP', label: 'EXP' },
];

const EmployeeForm = ({ initialValues, onSubmit, onCancel }) => {
  const [form, setForm] = useState({ id: '', name: '', team: '', experience: '', level: '' });

  useEffect(() => {
    if (initialValues) {
      setForm({ ...initialValues });
    } else {
      setForm({ id: '', name: '', team: '', experience: '', level: '' });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 0,
        borderRadius: 3,
        background: 'var(--subtle-gradient)',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.10)',
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          background: 'var(--button-gradient)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 1,
            textShadow: '0 2px 8px #764ba2',
          }}
        >
          {initialValues ? 'Edit Employee' : 'Add Employee'}
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          background: 'var(--white)',
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField label="ID" name="id" value={form.id} onChange={handleChange} required fullWidth />
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField label="Team" name="team" value={form.team} onChange={handleChange} required fullWidth />
          <TextField label="Experience (years)" name="experience" type="number" value={form.experience} onChange={handleChange} required fullWidth />
          <TextField select label="Level" name="level" value={form.level} onChange={handleChange} required fullWidth>
            {levels.map((option) => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
          {onCancel && (
            <Button onClick={onCancel} variant="outlined" sx={{ minWidth: 100, border: '2px solid var(--button-gradient)', color: 'var(--primary-color)' }}>Cancel</Button>
          )}
          <Button type="submit" variant="contained" className="btn-gradient" sx={{ minWidth: 100 }}>Save</Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default EmployeeForm;
