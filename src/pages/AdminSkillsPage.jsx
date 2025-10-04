import React, { useState } from 'react';

const AdminSkillsPage = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedJobLevel, setSelectedJobLevel] = useState('');
  const [showModificationPopup, setShowModificationPopup] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  const clients = [
    'Client A',
    'Client B', 
    'Client C',
    'Client D'
  ];

  const projects = [
    'Project Alpha',
    'Project Beta',
    'Project Gamma',
    'Project Delta'
  ];

  const jobs = [
    'Ing Dev H/W-Confirmé',
    'Software Engineer',
    'Project Manager',
    'DevOps Engineer'
  ];

  const jobLevels = [
    'JUNIOR',
    'CONFIRME',
    'SENIOR',
    'EXPERT'
  ];

  const projectSkills = [
    {
      name: 'Langages de Programmation',
      requiredScore: 2,
      level: 'JUNIOR',
      skills: ['C', 'Cembarqué', 'C++']
    },
    {
      name: 'OS & Outils',
      requiredScore: 1,
      level: 'THEORIQUE',
      skills: ['Linux', 'Windows', 'Docker']
    },
    {
      name: 'Connaissances métier Génériques',
      requiredScore: 3,
      level: 'CONFIRME',
      skills: ['Agile', 'Scrum', 'DevOps']
    },
    {
      name: 'Connaissances métier spécifiques client',
      requiredScore: 2,
      level: 'JUNIOR',
      skills: ['Client A', 'Client B', 'Client C']
    },
    {
      name: 'Dev Ops',
      requiredScore: 3,
      level: 'CONFIRME',
      skills: ['CI/CD', 'Kubernetes', 'AWS']
    },
    {
      name: 'COM',
      requiredScore: 3,
      level: 'CONFIRME',
      skills: ['Communication', 'Presentation', 'Documentation']
    },
    {
      name: 'MNG',
      requiredScore: 4,
      level: 'EXPERT',
      skills: ['Leadership', 'Project Management', 'Team Building']
    }
  ];

  const hardSkills = [
    {
      name: 'Leader Technique',
      requiredScore: 2,
      level: 'Atteinte du niveau attendu',
      skills: ['Technical Leadership', 'Architecture Design', 'Code Review']
    },
    {
      name: 'Connaitre les technos utilisées dans nos différents projets',
      requiredScore: 1,
      level: 'En-dessous du niveau attendu',
      skills: ['Technology Stack', 'Framework Knowledge', 'Tool Proficiency']
    },
    {
      name: 'Savoir définir une architecture globale',
      requiredScore: 3,
      level: 'Au-dessus du niveau attendu',
      skills: ['System Design', 'Architecture Patterns', 'Scalability']
    },
    {
      name: 'Savoir prendre en compte les attentes des développeurs',
      requiredScore: 2,
      level: 'Atteinte du niveau attendu',
      skills: ['Developer Relations', 'Team Collaboration', 'Feedback Management']
    },
    {
      name: 'Savoir s\'approprier le besoin du demandeur',
      requiredScore: 4,
      level: 'Excellence, il est un modèle dans son domaine',
      skills: ['Requirements Analysis', 'Stakeholder Management', 'Business Understanding']
    }
  ];

  const softSkills = [
    {
      name: 'Performance dans son poste',
      requiredScore: 2,
      level: 'Atteinte du niveau attendu',
      skills: ['Job Performance', 'Efficiency', 'Quality']
    },
    {
      name: 'Sens du collectif et coopération',
      requiredScore: 1,
      level: 'En-dessous du niveau attendu',
      skills: ['Teamwork', 'Collaboration', 'Communication']
    },
    {
      name: 'Orientation client',
      requiredScore: 3,
      level: 'Au-dessus du niveau attendu',
      skills: ['Customer Focus', 'Client Relations', 'Service Excellence']
    },
    {
      name: 'Fiabilité',
      requiredScore: 2,
      level: 'Atteinte du niveau attendu',
      skills: ['Reliability', 'Consistency', 'Dependability']
    },
    {
      name: 'Engagement dans ses missions',
      requiredScore: 4,
      level: 'Excellence, il est un modèle dans son domaine',
      skills: ['Mission Commitment', 'Dedication', 'Passion']
    },
    {
      name: 'Autonomie',
      requiredScore: 3,
      level: 'Au-dessus du niveau attendu',
      skills: ['Independence', 'Self-direction', 'Initiative']
    },
    {
      name: 'Investissement dans l\'entreprise',
      requiredScore: 2,
      level: 'Atteinte du niveau attendu',
      skills: ['Company Investment', 'Loyalty', 'Growth Mindset']
    },
    {
      name: 'Autres qualités personnelles',
      requiredScore: 4,
      level: 'Excellence, il est un modèle dans son domaine',
      skills: ['Personal Qualities', 'Character', 'Values']
    }
  ];

  const getLevelColor = (level) => {
    if (level.includes('En-dessous')) return '#dc3545'; // Red
    if (level.includes('Atteinte')) return '#28a745'; // Green
    if (level.includes('Au-dessus')) return '#ffc107'; // Yellow
    if (level.includes('Excellence')) return '#6f42c1'; // Purple
    return '#6c757d'; // Gray
  };

  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName);
    setShowModificationPopup(true);
  };

  const closePopup = () => {
    setShowModificationPopup(false);
    setSelectedSkill('');
  };

  return (
    <div className="admin-skills-page">
      {/* Filters Section */}
      <div className="filters-section">
        <h1>Admin Skills Management</h1>
        <div className="filters-grid">
          <div className="filter-group">
            <label>Client:</label>
            <div className="filter-row">
              <select 
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="filter-select"
              >
                <option value="">(select a Client)</option>
                {clients.map(client => (
                  <option key={client} value={client}>{client}</option>
                ))}
              </select>
              <span className="filter-text">(list of all clients)</span>
              <button className="add-btn">(+) add a new client</button>
            </div>
          </div>

          <div className="filter-group">
            <label>Project:</label>
            <div className="filter-row">
              <select 
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="filter-select"
              >
                <option value="">(select a Project)</option>
                {projects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
              <span className="filter-text">(list of all projects of the</span>
              <button className="add-btn">(+) add new Project</button>
            </div>
          </div>

          <div className="filter-group">
            <label>Job:</label>
            <div className="filter-row">
              <select 
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="filter-select"
              >
                <option value="">(select a Jobs)</option>
                {jobs.map(job => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
              <span className="filter-text">(list of all jobs of that project:</span>
              <button className="add-btn">(+) add a new Job</button>
            </div>
          </div>

          <div className="filter-group">
            <label>Job Level:</label>
            <div className="filter-row">
              <select 
                value={selectedJobLevel}
                onChange={(e) => setSelectedJobLevel(e.target.value)}
                className="filter-select"
              >
                <option value="">(select a Job level)</option>
                {jobLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <span className="filter-text">(list of all levels of the</span>
              <button className="add-btn">(+) add a new Job level</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Skills Tables */}
      <div className="skills-tables">
        {/* Project Skills */}
        <div className="skill-section">
          <h3>Project Skills</h3>
          <table className="skills-table">
            <thead>
              <tr>
                <th>Skill Name</th>
                <th>Required Skills</th>
                <th>Required Skills (exemple) / Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectSkills.map((skill, index) => (
                <tr key={index}>
                  <td className="skill-name">{skill.name}</td>
                  <td className="required-score">{skill.requiredScore}</td>
                  <td className="skill-level">{skill.level}</td>
                  <td className="action-cell">
                    <button 
                      className="expand-btn"
                      onClick={() => handleSkillClick(skill.name)}
                    >
                      &gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hard Skills */}
        <div className="skill-section">
          <h3>Hard Skills</h3>
          <table className="skills-table">
            <thead>
              <tr>
                <th>Skill Name</th>
                <th>Required Skills</th>
                <th>Required Skills (exemple) / Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hardSkills.map((skill, index) => (
                <tr key={index}>
                  <td className="skill-name">{skill.name}</td>
                  <td className="required-score">{skill.requiredScore}</td>
                  <td className="skill-level">
                    <span 
                      className="level-text"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button 
                      className="expand-btn"
                      onClick={() => handleSkillClick(skill.name)}
                    >
                      &gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Soft Skills */}
        <div className="skill-section">
          <h3>Soft Skills</h3>
          <table className="skills-table">
            <thead>
              <tr>
                <th>Skill Name</th>
                <th>Required Skills</th>
                <th>Required Skills (exemple) / Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {softSkills.map((skill, index) => (
                <tr key={index}>
                  <td className="skill-name">{skill.name}</td>
                  <td className="required-score">{skill.requiredScore}</td>
                  <td className="skill-level">
                    <span 
                      className="level-text"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button 
                      className="expand-btn"
                      onClick={() => handleSkillClick(skill.name)}
                    >
                      &gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modification Popup */}
      {showModificationPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Modifier les compétences</h3>
              <button className="close-btn" onClick={closePopup}>×</button>
            </div>
            <div className="popup-body">
              <p>Modification de: <strong>{selectedSkill}</strong></p>
              <div className="popup-actions">
                <button className="btn-primary">Mettre à jour</button>
                <button className="btn-secondary" onClick={closePopup}>Annuler</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSkillsPage;
