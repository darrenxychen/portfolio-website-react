import React from 'react';
import './Achievements.css';

function Achievements() {
  return (
    <div className="achievements-container">
      <a href="https://fullyhacks-test.onrender.com/" target="_blank" rel="noopener noreferrer" className="achievement">
        <div>
          <h2>FullyHacks 2023 Winner</h2>
          <h3>AI/ML Winner</h3>
          <p>Won first place in FullyHacks for developing WikiGuess.</p>
          <p>(Link is slow)</p>
          <div className="achievement-details">
            <h4>April 2023</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Achievements;