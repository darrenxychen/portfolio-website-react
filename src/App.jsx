import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="container">
      <Header />
      <section id="about">
        <About />
      </section>

      

      <section id="projects">
        <h2>Projects</h2>
        <Projects />
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <Skills />
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
    </div>
  );
}

export default App;
