import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper
} from '@mui/material';
import {
  TrendingUp,
  Star,
  Warning,
  CheckCircle,
  Person
} from '@mui/icons-material';
import './OrganizationChartPage.css';

const OrganizationChartPage = () => {
  // Sample employee data - in a real app, this would come from an API
  const [employees] = useState({
    potentialGem: [
      { id: 1, name: 'Sarah Johnson', role: 'Software Engineer', performance: 95, potential: 90, avatar: 'SJ' },
      { id: 2, name: 'Mike Chen', role: 'Product Manager', performance: 88, potential: 92, avatar: 'MC' }
    ],
    highPotential: [
      { id: 3, name: 'Emily Davis', role: 'UX Designer', performance: 85, potential: 88, avatar: 'ED' },
      { id: 4, name: 'Alex Rodriguez', role: 'Data Analyst', performance: 82, potential: 87, avatar: 'AR' }
    ],
    star: [
      { id: 5, name: 'David Kim', role: 'Senior Developer', performance: 95, potential: 85, avatar: 'DK' },
      { id: 6, name: 'Lisa Wang', role: 'Team Lead', performance: 92, potential: 80, avatar: 'LW' }
    ],
    inconsistentPlayer: [
      { id: 7, name: 'Tom Wilson', role: 'Developer', performance: 65, potential: 75, avatar: 'TW' },
      { id: 8, name: 'Anna Brown', role: 'Designer', performance: 70, potential: 78, avatar: 'AB' }
    ],
    corePlayer: [
      { id: 9, name: 'James Lee', role: 'QA Engineer', performance: 75, potential: 70, avatar: 'JL' },
      { id: 10, name: 'Maria Garcia', role: 'Business Analyst', performance: 78, potential: 72, avatar: 'MG' }
    ],
    highPerformer: [
      { id: 11, name: 'Chris Taylor', role: 'DevOps Engineer', performance: 88, potential: 75, avatar: 'CT' },
      { id: 12, name: 'Rachel Green', role: 'Project Manager', performance: 85, potential: 70, avatar: 'RG' }
    ],
    risk: [
      { id: 13, name: 'Kevin Smith', role: 'Developer', performance: 45, potential: 60, avatar: 'KS' },
      { id: 14, name: 'Jennifer White', role: 'Analyst', performance: 50, potential: 65, avatar: 'JW' }
    ],
    averagePerformer: [
      { id: 15, name: 'Robert Johnson', role: 'Support Engineer', performance: 65, potential: 65, avatar: 'RJ' },
      { id: 16, name: 'Amanda Clark', role: 'Marketing Specialist', performance: 68, potential: 68, avatar: 'AC' }
    ],
    solidPerformer: [
      { id: 17, name: 'Daniel Martinez', role: 'Sales Rep', performance: 75, potential: 70, avatar: 'DM' },
      { id: 18, name: 'Sophie Turner', role: 'HR Coordinator', performance: 72, potential: 68, avatar: 'ST' }
    ]
  });

  const getBoxColor = (boxType) => {
    const colors = {
      potentialGem: '#FFD700',        // Yellow
      highPotential: '#4CAF50',      // Green
      star: '#2196F3',               // Blue
      inconsistentPlayer: '#FF9800',  // Orange
      corePlayer: '#FFD700',         // Yellow
      highPerformer: '#4CAF50',      // Green
      risk: '#F44336',               // Red
      averagePerformer: '#FF9800',   // Orange
      solidPerformer: '#FFD700'      // Yellow
    };
    return colors[boxType] || '#757575';
  };

  const getBoxIcon = (boxType) => {
    const icons = {
      potentialGem: <TrendingUp />,
      highPotential: <Star />,
      star: <Star />,
      inconsistentPlayer: <Warning />,
      corePlayer: <CheckCircle />,
      highPerformer: <TrendingUp />,
      risk: <Warning />,
      averagePerformer: <Person />,
      solidPerformer: <CheckCircle />
    };
    return icons[boxType] || <Person />;
  };

  const getBoxTitle = (boxType) => {
    const titles = {
      potentialGem: 'Potential Gem',
      highPotential: 'High Potential',
      star: 'Star',
      inconsistentPlayer: 'Inconsistent Player',
      corePlayer: 'Core Player',
      highPerformer: 'High Performer',
      risk: 'Risk',
      averagePerformer: 'Average Performer',
      solidPerformer: 'Solid Performer'
    };
    return titles[boxType] || boxType;
  };

  const renderEmployeeCard = (employee) => (
    <Card key={employee.id} className="employee-card">
      <CardContent className="employee-card-content">
        <Box className="employee-header">
          <Avatar className="employee-avatar">{employee.avatar}</Avatar>
          <Box className="employee-info">
            <Typography variant="subtitle2" className="employee-name">
              {employee.name}
            </Typography>
            <Typography variant="caption" className="employee-role">
              {employee.role}
            </Typography>
          </Box>
        </Box>
        <Box className="employee-metrics">
          <Chip 
            label={`Performance: ${employee.performance}%`}
            size="small"
            className="performance-chip"
          />
          <Chip 
            label={`Potential: ${employee.potential}%`}
            size="small"
            className="potential-chip"
          />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box className="organization-chart-page">
      <Box className="page-header">
        <Typography variant="h4" className="page-title">
          Organization Chart
        </Typography>
        <Typography variant="body1" className="page-subtitle">
          9-Box Talent Management Grid
        </Typography>
      </Box>

      <Paper className="talent-grid-container">
        <Grid container spacing={2} className="talent-grid">
          {/* Row 1: High Potential */}
          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('potentialGem') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('potentialGem') }}>
                {getBoxIcon('potentialGem')}
                <Typography variant="h6">{getBoxTitle('potentialGem')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.potentialGem.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('highPotential') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('highPotential') }}>
                {getBoxIcon('highPotential')}
                <Typography variant="h6">{getBoxTitle('highPotential')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.highPotential.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('star') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('star') }}>
                {getBoxIcon('star')}
                <Typography variant="h6">{getBoxTitle('star')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.star.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          {/* Row 2: Core Players */}
          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('inconsistentPlayer') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('inconsistentPlayer') }}>
                {getBoxIcon('inconsistentPlayer')}
                <Typography variant="h6">{getBoxTitle('inconsistentPlayer')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.inconsistentPlayer.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('corePlayer') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('corePlayer') }}>
                {getBoxIcon('corePlayer')}
                <Typography variant="h6">{getBoxTitle('corePlayer')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.corePlayer.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('highPerformer') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('highPerformer') }}>
                {getBoxIcon('highPerformer')}
                <Typography variant="h6">{getBoxTitle('highPerformer')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.highPerformer.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          {/* Row 3: Low Performance */}
          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('risk') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('risk') }}>
                {getBoxIcon('risk')}
                <Typography variant="h6">{getBoxTitle('risk')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.risk.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('averagePerformer') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('averagePerformer') }}>
                {getBoxIcon('averagePerformer')}
                <Typography variant="h6">{getBoxTitle('averagePerformer')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.averagePerformer.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="talent-box" style={{ borderColor: getBoxColor('solidPerformer') }}>
              <Box className="box-header" style={{ backgroundColor: getBoxColor('solidPerformer') }}>
                {getBoxIcon('solidPerformer')}
                <Typography variant="h6">{getBoxTitle('solidPerformer')}</Typography>
              </Box>
              <Box className="box-content">
                {employees.solidPerformer.map(renderEmployeeCard)}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default OrganizationChartPage;
