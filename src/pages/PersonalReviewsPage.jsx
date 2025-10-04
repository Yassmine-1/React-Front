import React, { useState } from 'react';

const PersonalReviewsPage = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedYear, setSelectedYear] = useState('');

  const reviews = [
    { year: '2022', status: 'Done', canLaunch: false },
    { year: '2023', status: 'Done', canLaunch: false },
    { year: '2024', status: 'Done', canLaunch: false },
    { year: '2025', status: 'IDLE', canLaunch: true }
  ];

  const handleReviewClick = (year, status) => {
    if (status === 'Done') {
      setSelectedYear(year);
      setSelectedReview(year);
    }
  };

  const handleLaunchReview = (year) => {
    setSelectedYear(year);
    setSelectedReview(year);
  };

  const getReviewDetails = () => {
    if (!selectedReview) return null;
    
    const review = reviews.find(r => r.year === selectedYear);
    
    if (review && review.status === 'Done') {
      return `Détails de la review ${selectedYear} - Status: ${review.status}`;
    }
    
    if (review && review.status === 'IDLE') {
      return `Lancement de la review ${selectedYear} - Status: ${review.status}`;
    }
    
    return "Aucune review sélectionnée";
  };

  return (
    <div className="personal-reviews-page">
      {/* Header Section */}
      <div className="reviews-header">
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
      <div className="reviews-content">
        <div className="reviews-layout">
          {/* My Review Section */}
          <div className="my-review-section">
            <h2>My Review</h2>
            
            <div className="reviews-table-container">
              <table className="reviews-table">
                <thead>
                  <tr>
                    <th>Année</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={index}>
                      <td className="year-cell">{review.year}</td>
                      <td className="status-cell">
                        <span className={`status-badge ${review.status.toLowerCase()}`}>
                          {review.status}
                        </span>
                      </td>
                      <td className="action-cell">
                        {review.canLaunch ? (
                          <button 
                            className="launch-btn"
                            onClick={() => handleLaunchReview(review.year)}
                          >
                            (+) lancer la review
                          </button>
                        ) : (
                          <button 
                            className="expand-btn"
                            onClick={() => handleReviewClick(review.year, review.status)}
                          >
                            &gt;
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Status Legend */}
            <div className="status-legend">
              <span className="legend-text">(IDLE/OPEN/Waiting for Validation/Done)</span>
            </div>
          </div>
        </div>

        {/* Review Detail Area */}
        <div className="review-detail-area">
          {selectedReview ? (
            <div className="review-details">
              <h4>Détails de la Review - {selectedYear}</h4>
              <p>{getReviewDetails()}</p>
            </div>
          ) : (
            <div className="no-selection">
              <p>Sélectionnez une review pour voir les détails</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalReviewsPage;
