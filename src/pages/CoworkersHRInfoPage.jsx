import React from 'react';

const CoworkersHRInfoPage = () => {
  const employeeName = "John Doe";
  
  const employeeData = {
    title: "Mr.",
    lastName: "Doe",
    firstName: "John",
    dateOfBirth: "Jan 15, 1985",
    maritalStatus: "Married",
    email: "john.doe@company.com",
    phone: "555-0123",
    photo: "JDO.JPG"
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
        <table className="hr-info-table">
          <tbody>
            <tr>
              <td className="table-label">Title</td>
              <td className="table-value">{employeeData.title}</td>
            </tr>
            <tr>
              <td className="table-label">Last Name</td>
              <td className="table-value">{employeeData.lastName}</td>
            </tr>
            <tr>
              <td className="table-label">First Name</td>
              <td className="table-value">{employeeData.firstName}</td>
            </tr>
            <tr>
              <td className="table-label">Date of birth</td>
              <td className="table-value">{employeeData.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="table-label">Marital Status</td>
              <td className="table-value">{employeeData.maritalStatus}</td>
            </tr>
            <tr>
              <td className="table-label">Personal email</td>
              <td className="table-value email-link">{employeeData.email}</td>
            </tr>
            <tr>
              <td className="table-label">Personal phone number</td>
              <td className="table-value">{employeeData.phone}</td>
            </tr>
            <tr>
              <td className="table-label">Photo</td>
              <td className="table-value">{employeeData.photo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoworkersHRInfoPage;
