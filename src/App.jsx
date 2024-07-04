import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import MobileHeader from './components/MobileHeader';

import React, { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="App">
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="container">
        <section id="about">
          <About />
        </section>

        

        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>

        <section id="education">
          <h2>Education</h2>
          <Education />
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <Achievements />
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <Contact />
        </section>

        <hr />

        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default App;
