import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="static/images/professionalpic.jpg" alt="Darren Chen" />
      </div>
      <div className="about-content">
        <h1 className="intro-headline">Hi, my name is Darren!</h1>
        <TypeAnimation
          sequence={[
            'I enjoy coding and algorithms',
            2500,
            'Check out some projects below!',
            2500,
          ]}
          wrapper="span"
          speed={50}
          style={{ 
            fontSize: '2em', 
            display: 'block', 
            fontWeight: 'bolder',
            textDecoration: 'none !important',
            color: 'var(--primary-color)'
          }}
          repeat={Infinity}
        />
        <p>
          I am a senior majoring Computer Science at California State University of Fullerton with an interest in web development and algorithms.
        </p>
        <p>I enjoy using ReactJS, ReactNative, Python, and C++!</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/darren-xy-chen/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
          <a href="https://github.com/darrenxychen" target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
          <Link to="/resume" className="resume-link">Resume</Link>
        </div>
      </div>
    </div>
  );
}

export default About;