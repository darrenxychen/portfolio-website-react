import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w4twz0l', 'template_bg94mz9', formRef.current, {
        publicKey: 'rgQ3hwJSVEQSAuJwA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message did not send.');
        },
      );
  };


  return (
    <section className="contact-section">
      <div className="contact-content">
        <h3>Get in Touch</h3>
        <p>Download my resume below or contact me to my right!</p>
      </div>
      <div className="contact-form">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" className="form-input" name='name'/>
          <input type="email" placeholder="Email" className="form-input" name='email'/>
          <textarea rows="8" placeholder="Message" className="form-textarea" name='message'></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;