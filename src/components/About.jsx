import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <TypeAnimation
          sequence={[
            'Hi, my name is Darren!',
            2500,
            'I enjoy coding and algorithms',
            2500,
            'Check out some projects below!',
            2500,
          ]}
          wrapper="h2"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bolder' }}
          repeat={Infinity}
        />
        <p>
          I am a junior majoring Computer Science at California State University of Fullerton with an interest in web development and algorithms.
        </p>
        <p>I enjoy using ReactJS, ReactNative, Python, and C++!</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/darren-xy-chen/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            LinkedIn
          </a>
          <a href="https://github.com/darrenxychen" target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
          <a href="public/Darren_Chen_Resume.pdf" download className="resume-link">Resume</a>
        </div>
      </div>
      <div className="about-image">
        <img src="public/professionalpic.jpg" alt="Picture Filler" />
      </div>
    </div>
  );
}

export default About;