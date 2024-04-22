import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h3>Get in Touch</h3>
        <p>Download my resume below or contant me to my right!</p>
        <div className="resume-download">
          <a href="#">Resume</a>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <textarea rows="5" placeholder="Message" className="form-textarea"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;