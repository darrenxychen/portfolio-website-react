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
import { motion } from 'framer-motion';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="App">
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="container">
        <motion.section 
          id="about"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <About />
        </motion.section>

        <motion.section 
          id="projects"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2>Projects</h2>
          <Projects />
        </motion.section>

        <motion.section 
          id="education"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2>Education</h2>
          <Education />
        </motion.section>

        <motion.section 
          id="achievements"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2>Achievements</h2>
          <Achievements />
        </motion.section>

        <motion.section 
          id="contact"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2>Contact</h2>
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
