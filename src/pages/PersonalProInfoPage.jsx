import React from 'react';

const PersonalProInfoPage = () => {
  const employeeName = "Aymen Jerbi";
  
  const professionalData = {
    registrationNumber: "xxxx",
    jobTitle: "Ingénieur Junior / Ingénieur Confirmé / Team Leader / Project Manager / ....",
    positionGrade: "F1, F2, F3, F4, M1, M2, M3, M4, M5, M6, L1, L2, CTO, CEO",
    manager: "Prénom & Nom du Manager",
    activityDepartment: "Média&Energie / Space / BE Electronique / Monétique / SI / Télécom / RH / Qualité / Admin / ...",
    workplace: "Tunis - Tunisie / Sfax - Tunisie / Paris - France / Toulouse - France / Oman / Russie / ...",
    businessPhone: "98758799",
    businessEmail: "aymen.jerbi@groupe-telnet.net",
    technicalKnowledge: "Web / Mobile / Q",
    technicalExperience: "4 ans",
    previousExperience: "06/09/2004",
    previousExperienceDuration: "17,2 ans",
    telnetIntegrationDate: "18/08/2008",
    currentProjectIntegrationDate: "01/10/2018",
    currentProjectDuration: "7,1 ans",
    projectRole: "ING DEV / ING INTEG / ING DEVOPS / QA-Manual / Automation / PM / TECH LEAD / ..."
  };

  return (
    <div className="pro-info-page">
      <div className="profile-header">
        <div className="image-placeholder">
          <div className="avatar-placeholder">
            {employeeName.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="employee-name">{employeeName}</div>
      </div>
      
      <div className="professional-info-section">
        <div className="section-title">Professional info</div>
        <table className="professional-table">
          <tbody>
            <tr>
              <td className="table-label">Registration number</td>
              <td className="table-value">{professionalData.registrationNumber}</td>
            </tr>
            <tr>
              <td className="table-label">Job Title</td>
              <td className="table-value red-text">{professionalData.jobTitle}</td>
            </tr>
            <tr>
              <td className="table-label">Position Grade</td>
              <td className="table-value red-text">{professionalData.positionGrade}</td>
            </tr>
            <tr>
              <td className="table-label">Manager</td>
              <td className="table-value red-text">{professionalData.manager}</td>
            </tr>
            <tr>
              <td className="table-label">Activité / Département</td>
              <td className="table-value red-text">{professionalData.activityDepartment}</td>
            </tr>
            <tr>
              <td className="table-label">Workplace</td>
              <td className="table-value red-text">{professionalData.workplace}</td>
            </tr>
            <tr>
              <td className="table-label">Business phone number</td>
              <td className="table-value">{professionalData.businessPhone}</td>
            </tr>
            <tr>
              <td className="table-label">Business email</td>
              <td className="table-value email-link">{professionalData.businessEmail}</td>
            </tr>
            <tr>
              <td className="table-label">Technical Knowledge Area</td>
              <td className="table-value">{professionalData.technicalKnowledge}</td>
              <td className="table-value">{professionalData.technicalExperience}</td>
            </tr>
            <tr>
              <td className="table-label">Expériences Prof. Précédentes</td>
              <td className="table-value">{professionalData.previousExperience}</td>
              <td className="table-value">{professionalData.previousExperienceDuration}</td>
            </tr>
            <tr>
              <td className="table-label">Date d'intégration TELNET</td>
              <td className="table-value">{professionalData.telnetIntegrationDate}</td>
            </tr>
            <tr>
              <td className="table-label">Projet en cours</td>
              <td className="table-value"></td>
            </tr>
            <tr className="project-header-row">
              <td className="table-label"></td>
              <td className="table-value green-text">Client</td>
              <td className="table-value green-text">Project</td>
              <td className="table-value green-text">Job</td>
              <td className="table-value green-text">Job Level</td>
            </tr>
            <tr>
              <td className="table-label">Date d'intégration Projet "en cours"</td>
              <td className="table-value">{professionalData.currentProjectIntegrationDate}</td>
              <td className="table-value">{professionalData.currentProjectDuration}</td>
            </tr>
            <tr>
              <td className="table-label">Rôle Projet - client</td>
              <td className="table-value">{professionalData.projectRole}</td>
              <td className="table-value icon-cell">⚡</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalProInfoPage;
