import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>Hi my name is Darren.</h2>
        <p>
          I am a junior majoring Computer Science at California State University of Fullerton with an interest in web development and algorithms.
        </p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/darren-xy-chen/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/darrenxychen" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="about-image">
        <img src="" alt="Picture Filler" />
      </div>
    </div>
  );
}

export default About;