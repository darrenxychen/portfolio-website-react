import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <a href="https://fullyhacks-test.onrender.com/" target="_blank" rel="noopener noreferrer" className="project">
        <h3>WikiGuess</h3>
        <p>A full stack web application game where players must guess which article is not written by AI!</p>
        <div className="project-links">
          <a href="https://github.com/ADHFMZ7/WikiGuess" target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </a>

      <a href="https://memorygame-d.vercel.app/" target="_blank" rel="noopener noreferrer" className="project">
        <h3>Memory Game</h3>
        <p>A full stack web game where the player must flip a full set of matching cards to win!</p>
        <div className="project-links">
          <a href="https://github.com/darrenxychen/memorygame" target="_blank" rel="noopener noreferrer">Code</a>
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