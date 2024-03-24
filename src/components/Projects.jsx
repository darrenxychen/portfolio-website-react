import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <a href="https://www.project1.com" target="_blank" rel="noopener noreferrer" className="project">
        <h3>Project 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="project-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </a>

      <a href="https://www.project2.com" target="_blank" rel="noopener noreferrer" className="project">
        <h3>Project 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="project-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </a>

      <a href="https://www.project3.com" target="_blank" rel="noopener noreferrer" className="project">
        <h3>Project 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="project-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </a>
    </div>
  );
}

export default Projects;