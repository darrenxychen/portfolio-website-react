import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <div className="education-item">
        <div className="education-header">
          <h2>Bachelor of Science in Computer Science</h2>
          <p>California State University of Fullerton</p>
        </div>
        <div className="education-details">
          <p>Graduation date: May 2025</p>
          
          <ul>
            <p style={{fontWeight: 'bold'}}>Relevant Coursework:</p>
            <li>Data Structures and Algorithms</li>
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Software Engineering</li>
          </ul>
        </div>
      </div>
      {/* <div className="education-item">
        <div className="education-header">
          <h2>High School Diploma</h2>
          <p>Los Gatos High School</p>
        </div>
        <div className="education-details">
          <p>Graduated: June 2021</p>
        </div>
      </div> */}
    </div>
  );
}

export default Education;