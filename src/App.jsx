import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EmployeesPage from './pages/EmployeesPage';
import TeamsPage from './pages/TeamsPage';
import CompetenciesPage from './pages/CompetenciesPage';
import LevelsPage from './pages/LevelsPage';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/competencies" element={<CompetenciesPage />} />
        <Route path="/levels" element={<LevelsPage />} />
        <Route path="*" element={<Navigate to="/employees" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
