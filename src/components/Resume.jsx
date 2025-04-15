import React, { useEffect } from 'react';
import './Resume.css';

function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-actions">
        <a href="/Darren_Chen_Resume.pdf" download className="download-btn">
          Download PDF
        </a>
      </div>
      <div className="resume-container">
        <object
          data="/Darren_Chen_Resume.pdf"
          type="application/pdf"
          aria-label="Darren Chen's Resume"
          className="resume-pdf"
        >
          <p>
            It appears your browser doesn't support embedded PDFs.
            <a href="/Darren_Chen_Resume.pdf" download>Click here to download the resume</a>.
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume; 