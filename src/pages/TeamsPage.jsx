import React, { useState } from 'react';
import { Paper, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import TeamList from '../components/TeamList';
import TeamCompareModal from '../components/TeamCompareModal';
import TeamForm from '../components/TeamForm';
import TeamDetailCard from '../components/TeamDetailCard';

const mockTeams = [
  { name: 'TEAM01', description: 'Development Team 1', manager: 'Alice' },
  { name: 'TEAM02', description: 'QA Team', manager: 'Bob' },
];

const TeamsPage = () => {
  const [compareMode, setCompareMode] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add');
  const [formInitial, setFormInitial] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleCompare = () => setCompareOpen(true);
  const handleCloseCompare = () => setCompareOpen(false);
  const handleAdd = () => {
    setFormMode('add');
    setFormInitial(null);
    setFormOpen(true);
  };
  const handleEdit = (team) => {
    setFormMode('edit');
    setFormInitial(team);
    setFormOpen(true);
  };
  const handleDelete = (team) => alert(`Delete team: ${team.name}`);
  const handleFormClose = () => setFormOpen(false);
  const handleFormSubmit = (data) => {
    alert(`${formMode === 'add' ? 'Add' : 'Edit'} team: ${JSON.stringify(data)}`);
    setFormOpen(false);
  };
  const handleSelectTeam = (team) => setSelectedTeam(team);

  return (
    <div style={{ marginLeft: 240, padding: 24 }}>
      <Typography variant="h4" gutterBottom>Teams</Typography>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <Button
          variant="contained"
          className="btn-gradient"
          onClick={() => setCompareMode((v) => !v)}
        >
          {compareMode ? 'Exit Compare' : 'Compare'}
        </Button>
        <Button
          variant="contained"
          className="btn-gradient"
          onClick={handleAdd}
          sx={{ height: 40, minWidth: 140, fontWeight: 'bold' }}
        >
          Add Team
        </Button>
      </div>
      <TeamList
        teams={mockTeams}
        compareMode={compareMode}
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelectTeam={handleSelectTeam}
        selectedTeam={selectedTeam}
      />
      {selectedTeam && (
        <div style={{ marginTop: 24 }}>
          <TeamDetailCard team={selectedTeam} />
        </div>
      )}
      {compareMode && (
        <div style={{ marginTop: 16 }}>
          <Button
            variant="contained"
            className="btn-gradient"
            onClick={handleCompare}
            disabled={selectedTeams.length < 2}
          >
            Compare Selected ({selectedTeams.length})
          </Button>
        </div>
      )}
      <TeamCompareModal
        open={compareOpen}
        onClose={handleCloseCompare}
        teams={selectedTeams}
      />
      <Dialog open={formOpen} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>{formMode === 'add' ? 'Add Team' : 'Edit Team'}</DialogTitle>
        <DialogContent>
          <TeamForm initialValues={formInitial} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamsPage; 