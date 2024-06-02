import React from "react";
import "./Achievements.css";

function Achievements() {
  return (
    <div className="achievements-container">
      <a
        href="https://fullyhacks-test.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="achievement"
        style={{ backgroundImage: 'url(static/images/wikiguess.png)' }}
      >
        <div className="achievement-content">
          <h2>FullyHacks 2023 Winner</h2>
          <h3>AI/ML Winner</h3>
          <p>Won first place in FullyHacks for developing WikiGuess.</p>
          <p>(Link is slow)</p>
          <div className="achievement-details">
            <h3>April 2023</h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Achievements;
