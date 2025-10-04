import React, { useState } from 'react';

const PersonalSkillsPage = () => {
  const [viewMode, setViewMode] = useState('graph'); // 'graph' or 'list'
  
  const employeeName = "Aymen Jerbi";
  const jobLevel = "JUNIOR / CONFIRMED / SENIOR";
  
  const skillsData = [
    {
      category: "Langages de Programmation",
      required: { value: 2, level: "JUNIOR" },
      current: { value: 3.7, level: "CONFIRME" }
    },
    {
      category: "OS & Outils",
      required: { value: 1, level: "THEORIQUE" },
      current: { value: 3, level: "JUNIOR" }
    },
    {
      category: "Connaissances métier Génériques",
      required: { value: 3, level: "CONFIRME" },
      current: { value: 3, level: "JUNIOR" }
    },
    {
      category: "Connaissances métier spécifiques client",
      required: { value: 2, level: "JUNIOR" },
      current: { value: 2.3, level: "JUNIOR" }
    },
    {
      category: "Dev Ops",
      required: { value: 3, level: "CONFIRME" },
      current: { value: 2, level: "JUNIOR" }
    },
    {
      category: "COM",
      required: { value: 3, level: "CONFIRME" },
      current: { value: 2.8, level: "JUNIOR" }
    },
    {
      category: "MNG",
      required: { value: 4, level: "EXPERT" },
      current: { value: 4, level: "EXPERT" }
    }
  ];

  const radarChartData = [
    { skill: "Dev Embarqué", value: 3.5 },
    { skill: "Linux Embarqué & Tools", value: 2.8 },
    { skill: "NET/TVN. Gen", value: 3.2 },
    { skill: "Techno SAH", value: 2.5 },
    { skill: "Wifi", value: 3.0 },
    { skill: "Dev Ops", value: 2.8 },
    { skill: "COM", value: 3.5 },
    { skill: "MNG", value: 4.0 }
  ];

  const hardSkillsData = [
    {
      skill: "Connaitre les technos utilisées dans nos différents produit",
      required: { value: 2, level: "Atteinte du niveau attendu" },
      current: { value: 0, level: "Point d'amélioration prioritaire" }
    },
    {
      skill: "Savoir définir une architecture globale",
      required: { value: 1, level: "En-dessous du niveau attendu" },
      current: { value: 1, level: "En-dessous du niveau attendu" }
    },
    {
      skill: "Savoir prendre en compte les attentes des développeurs",
      required: { value: 3, level: "Au-dessus du niveau attendu" },
      current: { value: 2, level: "Atteinte du niveau attendu" }
    },
    {
      skill: "Savoir s'approprier le besoin du demandeur",
      required: { value: 2, level: "Atteinte du niveau attendu" },
      current: { value: 3, level: "Au-dessus du niveau attendu" }
    },
    {
      skill: "",
      required: { value: 4, level: "Excellence, il est un modèle dans son rôle" },
      current: { value: 4, level: "Excellence, il est un modèle dans son rôle" }
    }
  ];

  const softSkillsData = [
    {
      skill: "Performance dans son poste",
      required: { value: 2, level: "Atteinte du niveau attendu" },
      current: { value: 0, level: "Point d'amélioration prioritaire" }
    },
    {
      skill: "Sens du collectif et coopération",
      required: { value: 1, level: "En-dessous du niveau attendu" },
      current: { value: 1, level: "En-dessous du niveau attendu" }
    },
    {
      skill: "Orientation client",
      required: { value: 3, level: "Au-dessus du niveau attendu" },
      current: { value: 2, level: "Atteinte du niveau attendu" }
    },
    {
      skill: "Fiabilité",
      required: { value: 2, level: "Atteinte du niveau attendu" },
      current: { value: 3, level: "Au-dessus du niveau attendu" }
    },
    {
      skill: "Engagement dans ses missions",
      required: { value: 4, level: "Excellence, il est un modèle dans son rôle" },
      current: { value: 4, level: "Excellence, il est un modèle dans son rôle" }
    },
    {
      skill: "Autonomie",
      required: { value: 3, level: "Au-dessus du niveau attendu" },
      current: { value: 1, level: "En-dessous du niveau attendu" }
    },
    {
      skill: "Investissement dans l'entreprise",
      required: { value: 2, level: "Atteinte du niveau attendu" },
      current: { value: 2, level: "Atteinte du niveau attendu" }
    },
    {
      skill: "Autres qualités personnelles",
      required: { value: 4, level: "Excellence, il est un modèle dans son rôle" },
      current: { value: 3, level: "Au-dessus du niveau attendu" }
    }
  ];

  return (
    <div className="skills-page">
      {/* Header Section */}
      <div className="profile-header">
        <div className="image-placeholder">
          <div className="avatar-placeholder">
            {employeeName.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="employee-info">
          <div className="employee-name">{employeeName}</div>
          <div className="job-level">
            My Job required level ({jobLevel})
          </div>
          <div className="note">
            (l'information devrait etre récupérée des review du collègue)
          </div>
        </div>
      </div>



      {/* Project Skills Synthesis Section */}
      <div className="skills-synthesis-section">
        <div className="section-header">
          <h3>Project Skills Synthesis</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>

        {viewMode === 'graph' ? (
          <div className="skills-table">
            <table className="synthesis-table">
              <thead>
                <tr>
                  <th>Skill Categories</th>
                  <th colSpan="2">Required Skills (exemple)</th>
                  <th colSpan="2">My current Skills</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Value</th>
                  <th>Level</th>
                  <th>Value</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {skillsData.map((skill, index) => (
                  <tr key={index}>
                    <td className="skill-category">{skill.category}</td>
                    <td className="required-value">{skill.required.value}</td>
                    <td className="required-level">{skill.required.level}</td>
                    <td className={`current-value ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                      {skill.current.value}
                    </td>
                    <td className={`current-level ${skill.current.level === 'JUNIOR' ? 'red-text' : ''}`}>
                      {skill.current.level}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="skills-list">
            <div className="list-container">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-category">{skill.category}</div>
                  <div className="skill-details">
                    <div className="required">
                      <span className="label">Required:</span>
                      <span className="value">{skill.required.value} ({skill.required.level})</span>
                    </div>
                    <div className="current">
                      <span className="label">Current:</span>
                      <span className={`value ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                        {skill.current.value} ({skill.current.level})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Radar Chart Section */}
      <div className="radar-chart-section">
        <div className="section-header">
          <h3>Skills Visualization</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>
        
        <div className="radar-chart-container">
          <div className="radar-chart">
            <div className="chart-title">Skills Radar Chart</div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color blue"></div>
                <span>Ing Dev HGW-Confirmé</span>
              </div>
              <div className="legend-item">
                <div className="legend-color orange"></div>
                <span>INGS</span>
              </div>
            </div>
            <div className="chart-placeholder">
              <div className="chart-note">
                Radar chart visualization would be implemented here
                <br />
                Scale: 0-4 (increments of 0.5)
                <br />
                Skills: Dev Embarqué, Linux Embarqué & Tools, NET/TVN. Gen, 
                Techno SAH, Wifi, Dev Ops, COM, MNG
              </div>
            </div>
          </div>
        </div>

              {/* Hard Skills Section */}
      <div className="hard-skills-section">
        <div className="section-header">
          <h3>Hard Skills</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="hard-skills-table">
            <table className="hard-skills-table-content">
              <thead>
                <tr>
                  <th>Leader Technique</th>
                  <th colSpan="2">Required Skills (exemple)</th>
                  <th colSpan="2">My current Skills</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Value</th>
                  <th>Level</th>
                  <th>Value</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {hardSkillsData.map((skill, index) => (
                  <tr key={index}>
                    <td className="skill-name">{skill.skill}</td>
                    <td className="required-value">{skill.required.value}</td>
                    <td className="required-level">{skill.required.level}</td>
                    <td className={`current-value ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                      {skill.current.value}
                    </td>
                    <td className={`current-level ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                      {skill.current.level}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="hard-skills-list">
            <div className="list-container">
              {hardSkillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.skill}</div>
                  <div className="skill-details">
                    <div className="required">
                      <span className="label">Required:</span>
                      <span className="value">{skill.required.value} ({skill.required.level})</span>
                    </div>
                    <div className="current">
                      <span className="label">Current:</span>
                      <span className={`value ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                        {skill.current.value} ({skill.current.level})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>

      {/* Hard Skills Visualization Section */}
      <div className="hard-skills-visualization-section">
        <div className="section-header">
          <h3>Hard Skills Visualization</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>
        
        <div className="radar-chart-container">
          <div className="radar-chart">
            <div className="chart-title">Hard Skills Radar Chart</div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color blue"></div>
                <span>Required Skills</span>
              </div>
              <div className="legend-item">
                <div className="legend-color orange"></div>
                <span>Current Skills</span>
              </div>
            </div>
            <div className="chart-placeholder">
              <div className="chart-note">
                Hard Skills Radar Chart
                <br />
                Scale: 0-4 (increments of 0.5)
                <br />
                Skills: Technology Knowledge, Architecture Definition, Developer Expectations, 
                Client Needs, Code Reviews, Architecture Reviews, Design Reviews, Specification Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="soft-skills-section">
        <div className="section-header">
          <h3>Soft Skills</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="soft-skills-table">
            <table className="soft-skills-table-content">
              <thead>
                <tr>
                  <th></th>
                  <th colSpan="2">Required Skills (exemple)</th>
                  <th colSpan="2">My current Skills</th>
                </tr>
                <tr>
                  <th>Soft Skills</th>
                  <th>Value</th>
                  <th>Level</th>
                  <th>Value</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {softSkillsData.map((skill, index) => (
                  <tr key={index}>
                    <td className="skill-name">{skill.skill}</td>
                    <td className="required-value">{skill.required.value}</td>
                    <td className="required-level">{skill.required.level}</td>
                    <td className={`current-value ${skill.current.value < skill.required.value ? 'red-text' : ''}`}>
                      {skill.current.value}
                    </td>
                    <td className={`current-level red-text`}>
                      {skill.current.level}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="soft-skills-list">
            <div className="list-container">
              {softSkillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill.skill}</div>
                  <div className="skill-details">
                    <div className="required">
                      <span className="label">Required:</span>
                      <span className="value">{skill.required.value} ({skill.required.level})</span>
                    </div>
                    <div className="current">
                      <span className="label">Current:</span>
                      <span className={`value red-text`}>
                        {skill.current.value} ({skill.current.level})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chart Visualization Section */}
      <div className="chart-visualization-section">
        <div className="section-header">
          <h3>Skills Visualization</h3>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'graph' ? 'active' : ''}`}
              onClick={() => setViewMode('graph')}
            >
              ⭐ Graph
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              📋 List
            </button>
          </div>
        </div>
        
        <div className="radar-chart-container">
          <div className="radar-chart">
            <div className="chart-title">Skills Radar Chart</div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color blue"></div>
                <span>Ing Dev HGW-Confirmé</span>
              </div>
              <div className="legend-item">
                <div className="legend-color orange"></div>
                <span>INGS</span>
              </div>
            </div>
            <div className="chart-placeholder">
              <div className="chart-note">
                Radar chart visualization would be implemented here
                <br />
                Scale: 0-4 (increments of 0.5)
                <br />
                Skills: Dev Embarqué, Linux Embarqué & Tools, NET/TVN. Gen, 
                Techno SAH, Wifi, Dev Ops, COM, MNG
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PersonalSkillsPage;
