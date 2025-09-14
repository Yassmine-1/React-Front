import React from 'react';

const PersonalHRInfoPage = () => {
  const employeeName = "Aymen Jerbi";
  
  const employeeData = {
    title: "Mr.",
    lastName: "Jerbi",
    firstName: "Aymen",
    dateOfBirth: "Nov 13, 1980",
    maritalStatus: "Single",
    email: "jerbi.aymen@gmail.com",
    phone: "55261861",
    photo: "AJE.JPG"
  };

  return (
    <div className="hr-info-page">
      <div className="profile-header">
        <div className="image-placeholder">
          <div className="avatar-placeholder">
            {employeeData.firstName[0]}{employeeData.lastName[0]}
          </div>
        </div>
        <div className="employee-name">{employeeName}</div>
      </div>
      
      <div className="hr-file-section">
        <div className="section-title">HR file</div>
        <div className="form-grid">
          <div className="form-row">
            <div className="form-label">Title</div>
            <div className="form-value">{employeeData.title}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Last Name</div>
            <div className="form-value">{employeeData.lastName}</div>
          </div>
          <div className="form-row">
            <div className="form-label">First Name</div>
            <div className="form-value">{employeeData.firstName}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Date of birth</div>
            <div className="form-value">{employeeData.dateOfBirth}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Marital Status</div>
            <div className="form-value">{employeeData.maritalStatus}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Personal email</div>
            <div className="form-value email-link">{employeeData.email}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Personal phone number</div>
            <div className="form-value">{employeeData.phone}</div>
          </div>
          <div className="form-row">
            <div className="form-label">Photo</div>
            <div className="form-value">{employeeData.photo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHRInfoPage;
