import React, { useState } from 'react';

const PersonalGoalsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('');

  const goalPeriods = {
    yearly: [
      { id: '2025', name: '2025', goals: 0 }
    ],
    halfYearly: [
      { id: 'S1-2025', name: 'S1-2025', goals: 0 },
      { id: 'S2-2025', name: 'S2-2025', goals: 0 }
    ],
    quarterly: [
      { id: 'Q1-2025', name: 'Q1-2025', goals: 0 },
      { id: 'Q2-2025', name: 'Q2-2025', goals: 0 },
      { id: 'Q3-2025', name: 'Q3-2025', goals: 0 },
      { id: 'Q4-2025', name: 'Q4-2025', goals: 0 }
    ]
  };

  const handleGoalClick = (periodId, periodName) => {
    setSelectedPeriod(periodName);
    setSelectedGoal(periodId);
  };

  const getGoalDetails = () => {
    if (!selectedGoal) return null;
    
    // Find the period in all categories
    const allPeriods = [...goalPeriods.yearly, ...goalPeriods.halfYearly, ...goalPeriods.quarterly];
    const period = allPeriods.find(p => p.id === selectedGoal);
    
    if (period && period.goals === 0) {
      return "pas de goal defini pour cette periode";
    }
    
    return `Détails du goal pour ${selectedPeriod}`;
  };

  return (
    <div className="personal-goals-page">
      {/* Header Section */}
      <div className="goals-header">
        <div className="profile-section">
          <div className="image-placeholder">
            <span>Image</span>
          </div>
          <div className="employee-name">Prenom Nom</div>
        </div>
        <div className="export-section">
          <button className="export-btn">Export Goals [.xlsx]</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="goals-content">
        <div className="goals-layout">
          {/* Left Column - My Goals */}
          <div className="my-goals-column">
            <div className="column-header">My Goals</div>
          </div>

          {/* Right Side - Goal Categories */}
          <div className="goals-categories">
            {/* Yearly Goals */}
            <div className="goal-category">
              <h3>Yearly Goals</h3>
              <div className="goal-periods">
                {goalPeriods.yearly.map((period) => (
                  <div key={period.id} className="goal-period-box">
                    <div className="period-content">
                      <span className="period-name">{period.name}</span>
                      <button 
                        className="expand-btn"
                        onClick={() => handleGoalClick(period.id, period.name)}
                      >
                        &gt;
                      </button>
                    </div>
                    <div className="period-details">
                      <span>-</span>
                      <span className="goals-count">{period.goals} goals</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Half-Yearly Goals */}
            <div className="goal-category">
              <h3>Half-Yearly Goals</h3>
              <div className="goal-periods">
                {goalPeriods.halfYearly.map((period) => (
                  <div key={period.id} className="goal-period-box">
                    <div className="period-content">
                      <span className="period-name">{period.name}</span>
                      <button 
                        className="expand-btn"
                        onClick={() => handleGoalClick(period.id, period.name)}
                      >
                        &gt;
                      </button>
                    </div>
                    <div className="period-details">
                      <span>-</span>
                      <span className="goals-count">{period.goals} goals</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quarterly Goals */}
            <div className="goal-category">
              <h3>Quaterly Goals</h3>
              <div className="goal-periods">
                {goalPeriods.quarterly.map((period) => (
                  <div key={period.id} className="goal-period-box">
                    <div className="period-content">
                      <span className="period-name">{period.name}</span>
                      <button 
                        className="expand-btn"
                        onClick={() => handleGoalClick(period.id, period.name)}
                      >
                        &gt;
                      </button>
                    </div>
                    <div className="period-details">
                      <span>-</span>
                      <span className="goals-count">{period.goals} goals</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Goal Detail Area */}
        <div className="goal-detail-area">
          {selectedGoal ? (
            <div className="goal-details">
              <h4>Détails du Goal - {selectedPeriod}</h4>
              <p>{getGoalDetails()}</p>
            </div>
          ) : (
            <div className="no-selection">
              <p>Sélectionnez un goal pour voir les détails</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalGoalsPage;
