import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae fuga facere itaque, dolorem corporis dolores. Assumenda natus similique impedit beatae sunt voluptatem minus a nemo repellendus dolores, laborum non quae.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tempore, aliquam delectus similique, voluptatibus itaque tenetur incidunt molestias possimus repellendus perspiciatis! Cum quae doloremque voluptatem provident placeat incidunt adipisci animi!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum quis officia cum unde aperiam itaque? Quos tempore consectetur aspernatur quisquam, vero ut vel laudantium dolores commodi tempora reiciendis? Delectus.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
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