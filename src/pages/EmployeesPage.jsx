import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeFilterBar from '../components/EmployeeFilterBar';
import EmployeeCompareModal from '../components/EmployeeCompareModal';
import EmployeeDetailCard from '../components/EmployeeDetailCard';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

const defaultFilter = {
  competencies: [],
  teams: [],
  levels: [],
  experience: [0, 40],
};

const EmployeesPage = () => {
  const [filterState, setFilterState] = useState(defaultFilter);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [formInitial, setFormInitial] = useState(null);

  const handleCompare = () => setCompareOpen(true);
  const handleCloseCompare = () => setCompareOpen(false);
  const handleEdit = (emp) => {
    setFormMode('edit');
    setFormInitial(emp);
    setFormOpen(true);
  };
  const handleDelete = (emp) => alert(`Delete employee: ${emp.name}`);
  const handleSelectEmployee = (emp) => setSelectedEmployee(emp);
  const handleAdd = () => {
    setFormMode('add');
    setFormInitial(null);
    setFormOpen(true);
  };
  const handleFormClose = () => setFormOpen(false);
  const handleFormSubmit = (data) => {
    alert(`${formMode === 'add' ? 'Add' : 'Edit'} employee: ${JSON.stringify(data)}`);
    setFormOpen(false);
  };

  return (
    <div style={{ marginLeft: 240, padding: 24 }}>
      <h2>Employees</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <EmployeeFilterBar filterState={filterState} onFilterChange={setFilterState} />
        <button
          className="btn-gradient"
          style={{ height: 40, minWidth: 120, fontWeight: 'bold' }}
          onClick={() => setCompareMode((v) => !v)}
        >
          {compareMode ? 'Exit Compare' : 'Compare'}
        </button>
        <Button
          variant="contained"
          className="btn-gradient"
          onClick={handleAdd}
          sx={{ height: 40, minWidth: 140, fontWeight: 'bold' }}
        >
          Add Employee
        </Button>
      </div>
      <EmployeeList
        filterState={filterState}
        compareMode={compareMode}
        selectedEmployees={selectedEmployees}
        setSelectedEmployees={setSelectedEmployees}
        onSelectEmployee={handleSelectEmployee}
        selectedEmployee={selectedEmployee}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {selectedEmployee && (
        <div style={{ marginTop: 24 }}>
          <EmployeeDetailCard employee={selectedEmployee} />
        </div>
      )}
      {compareMode && selectedEmployees.length >= 2 && (
        <div style={{ marginTop: 16 }}>
          <button
            className="btn-gradient"
            style={{ height: 40, minWidth: 180, fontWeight: 'bold' }}
            onClick={handleCompare}
          >
            Compare Selected ({selectedEmployees.length})
          </button>
        </div>
      )}
      <EmployeeCompareModal
        open={compareOpen}
        onClose={handleCloseCompare}
        employees={selectedEmployees}
      />
      <Dialog open={formOpen} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>{formMode === 'add' ? 'Add Employee' : 'Edit Employee'}</DialogTitle>
        <DialogContent>
          <EmployeeForm initialValues={formInitial} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeesPage;
