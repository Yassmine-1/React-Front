import React, { useState } from 'react';

const TeamsSkillsPage = () => {
  const [viewMode, setViewMode] = useState('graph'); // 'graph' or 'list'
  const [selectedJob, setSelectedJob] = useState('Ing Dev H/W-Confirmé');
  const [selectedJobLevel, setSelectedJobLevel] = useState('CONFIRME');
  const [selectedTeam1, setSelectedTeam1] = useState('Team01');
  const [selectedTeam2, setSelectedTeam2] = useState('Team02');
  
  const jobs = [
    'Ing Dev H/W-Confirmé',
    'Software Engineer',
    'Project Manager',
    'DevOps Engineer',
    'Frontend Developer'
  ];

  const jobLevels = [
    'JUNIOR',
    'CONFIRME', 
    'SENIOR',
    'EXPERT'
  ];

  const teams = [
    'Team01',
    'Team02',
    'Team03',
    'Team04'
  ];

  const skillCategories = [
    {
      name: 'Langages de Programmation',
      required: { score: 2, level: 'JUNIOR' },
      team1: { score: 3.7, level: 'CONFIRME' },
      team2: { score: 3.7, level: 'CONFIRME' }
    },
    {
      name: 'OS & Outils',
      required: { score: 1, level: 'THEORIQUE' },
      team1: { score: 3, level: 'CONFIRME' },
      team2: { score: 3, level: 'CONFIRME' }
    },
    {
      name: 'Connaissances métier Génériques',
      required: { score: 3, level: 'CONFIRME' },
      team1: { score: 3, level: 'CONFIRME' },
      team2: { score: 3, level: 'CONFIRME' }
    },
    {
      name: 'Connaissances métier spécifiques client',
      required: { score: 2, level: 'JUNIOR' },
      team1: { score: 2.3, level: 'JUNIOR' },
      team2: { score: 2.3, level: 'JUNIOR' }
    },
    {
      name: 'Dev Ops',
      required: { score: 3, level: 'CONFIRME' },
      team1: { score: 2, level: 'JUNIOR' },
      team2: { score: 2, level: 'JUNIOR' }
    },
    {
      name: 'COM',
      required: { score: 3, level: 'CONFIRME' },
      team1: { score: 2.8, level: 'JUNIOR' },
      team2: { score: 2.8, level: 'JUNIOR' }
    },
    {
      name: 'MNG',
      required: { score: 4, level: 'EXPERT' },
      team1: { score: 4, level: 'EXPERT' },
      team2: { score: 4, level: 'EXPERT' }
    }
  ];

  const radarChartData = {
    leftChart: {
      profiles: [
        { name: 'Ing Dev H/W-Confirmé', color: '#007bff' },
        { name: 'Team01', color: '#fd7e14' }
      ],
      skills: [
        { name: 'Dev Embarqué', values: [3.0, 2.8] },
        { name: 'Linux Embarqué & Tools', values: [2.5, 3.2] },
        { name: 'NET/TVN.Gen', values: [2.8, 2.5] },
        { name: 'Techno SAH', values: [3.2, 2.9] },
        { name: 'Wifi', values: [2.7, 3.1] },
        { name: 'Dev Ops', values: [3.0, 2.0] },
        { name: 'COM', values: [3.5, 2.8] },
        { name: 'MNG', values: [4.0, 4.0] },
        { name: 'AGES', values: [2.9, 3.3] }
      ]
    },
    rightChart: {
      profiles: [
        { name: 'Team01', color: '#007bff' },
        { name: 'Team02', color: '#fd7e14' }
      ],
      skills: [
        { name: 'Dev Embarqué', values: [2.8, 2.8] },
        { name: 'Linux Embarqué & Tools', values: [3.2, 3.2] },
        { name: 'NET/TVN.Gen', values: [2.5, 2.5] },
        { name: 'Techno SAH', values: [2.9, 2.9] },
        { name: 'Wifi', values: [3.1, 3.1] },
        { name: 'Dev Ops', values: [2.0, 2.0] },
        { name: 'COM', values: [2.8, 2.8] },
        { name: 'MNG', values: [4.0, 4.0] },
        { name: 'AGES', values: [3.3, 3.3] }
      ]
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'THEORIQUE': return '#6c757d';
      case 'JUNIOR': return '#ffc107';
      case 'CONFIRME': return '#28a745';
      case 'SENIOR': return '#fd7e14';
      case 'EXPERT': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getScoreColor = (score, required) => {
    if (score >= required) return '#28a745'; // Green if meets or exceeds
    if (score >= required * 0.8) return '#ffc107'; // Yellow if close
    return '#dc3545'; // Red if below
  };

  return (
    <div className="teams-skills-page">
      {/* Filters Section */}
      <div className="filters-section">
        <h1>Project Team Skills Synthesis</h1>
        <div className="filters-grid">
          <div className="filter-group">
            <label>(select a Jobs)</label>
            <select 
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="filter-select"
            >
              <option value="">(list of all jobs)</option>
              {jobs.map(job => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>(select a Job level)</label>
            <select 
              value={selectedJobLevel}
              onChange={(e) => setSelectedJobLevel(e.target.value)}
              className="filter-select"
            >
              <option value="">(list of all Job levels)</option>
              {jobLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>(select a Team (1))</label>
            <select 
              value={selectedTeam1}
              onChange={(e) => setSelectedTeam1(e.target.value)}
              className="filter-select"
            >
              <option value="">(list of all teams)</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>(select a Team (2))</label>
            <select 
              value={selectedTeam2}
              onChange={(e) => setSelectedTeam2(e.target.value)}
              className="filter-select"
            >
              <option value="">(list of all teams)</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <button className="add-team-btn">(+) select a new Team</button>
          </div>
        </div>
      </div>

      {/* Project Team Skills Synthesis Table */}
      <div className="synthesis-section">
        <div className="section-header">
          <h3>Project Team Skills Synthesis</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {viewMode === 'graph' ? (
          <div className="synthesis-table-container">
            <table className="synthesis-table">
              <thead>
                <tr>
                  <th className="skill-category-header">Skill Categories</th>
                  <th className="required-header">Required Skills based on selected Job and Level</th>
                  <th className="team-header">{selectedTeam1} current Skills</th>
                  <th className="team-header">{selectedTeam2} current Skills</th>
                </tr>
              </thead>
              <tbody>
                {skillCategories.map((category, index) => (
                  <tr key={index}>
                    <td className="skill-category">{category.name}</td>
                    <td className="required-score">
                      <span className="score-value">{category.required.score}</span>
                      <span 
                        className="level-badge"
                        style={{ backgroundColor: getLevelColor(category.required.level) }}
                      >
                        ({category.required.level})
                      </span>
                    </td>
                    <td className="team-score">
                      <span 
                        className="score-value"
                        style={{ color: getScoreColor(category.team1.score, category.required.score) }}
                      >
                        {category.team1.score}
                      </span>
                      <span 
                        className="level-badge"
                        style={{ backgroundColor: getLevelColor(category.team1.level) }}
                      >
                        ({category.team1.level})
                      </span>
                    </td>
                    <td className="team-score">
                      <span 
                        className="score-value"
                        style={{ color: getScoreColor(category.team2.score, category.required.score) }}
                      >
                        {category.team2.score}
                      </span>
                      <span 
                        className="level-badge"
                        style={{ backgroundColor: getLevelColor(category.team2.level) }}
                      >
                        ({category.team2.level})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="synthesis-list">
            {skillCategories.map((category, index) => (
              <div key={index} className="synthesis-item">
                <div className="item-header">
                  <h4>{category.name}</h4>
                </div>
                <div className="item-scores">
                  <div className="score-item required">
                    <span className="score-label">Required:</span>
                    <span className="score-value">{category.required.score}</span>
                    <span 
                      className="level-badge"
                      style={{ backgroundColor: getLevelColor(category.required.level) }}
                    >
                      {category.required.level}
                    </span>
                  </div>
                  <div className="score-item team1">
                    <span className="score-label">{selectedTeam1}:</span>
                    <span 
                      className="score-value"
                      style={{ color: getScoreColor(category.team1.score, category.required.score) }}
                    >
                      {category.team1.score}
                    </span>
                    <span 
                      className="level-badge"
                      style={{ backgroundColor: getLevelColor(category.team1.level) }}
                    >
                      {category.team1.level}
                    </span>
                  </div>
                  <div className="score-item team2">
                    <span className="score-label">{selectedTeam2}:</span>
                    <span 
                      className="score-value"
                      style={{ color: getScoreColor(category.team2.score, category.required.score) }}
                    >
                      {category.team2.score}
                    </span>
                    <span 
                      className="level-badge"
                      style={{ backgroundColor: getLevelColor(category.team2.level) }}
                    >
                      {category.team2.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Radar Charts Section */}
      <div className="radar-charts-section">
        <div className="charts-grid">
          {/* Left Radar Chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h4>Team Skills Comparison</h4>
              <div className="chart-toggle">
                <button 
                  className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
                  onClick={() => setViewMode('graph')}
                >
                  Graph
                </button>
                <button 
                  className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
              </div>
            </div>
            <div className="radar-chart-placeholder">
              <div className="chart-note">
                Radar Chart: {radarChartData.leftChart.profiles[0].name} vs {radarChartData.leftChart.profiles[1].name}
                <br />
                Skills: Dev Embarqué, Linux Embarqué & Tools, NET/TVN.Gen, Techno SAH, Wifi, Dev Ops, COM, MNG, AGES
                <br />
                Scale: 0 to 3.5
              </div>
            </div>
          </div>

          {/* Right Radar Chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h4>Team vs Team Comparison</h4>
              <div className="chart-toggle">
                <button 
                  className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
                  onClick={() => setViewMode('graph')}
                >
                  Graph
                </button>
                <button 
                  className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  List
                </button>
              </div>
            </div>
            <div className="radar-chart-placeholder">
              <div className="chart-note">
                Radar Chart: {radarChartData.rightChart.profiles[0].name} vs {radarChartData.rightChart.profiles[1].name}
                <br />
                Skills: Dev Embarqué, Linux Embarqué & Tools, NET/TVN.Gen, Techno SAH, Wifi, Dev Ops, COM, MNG, AGES
                <br />
                Scale: 0 to 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSkillsPage;
