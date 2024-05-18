import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("#");

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <nav>
      <a href="#" className={active === "#" ? "active" : ""}>
        <div className="logo">DC</div>
      </a>

      <div className="nav-links">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Education
        </Link>

        <Link
          activeClass="active"
          to="achievements"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Achievements
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Contact
        </Link>
      </div>

      <a href="./Darren_Chen_Resume.pdf" className="resume-btn" download>Resume</a>
    </nav>
  );
}

export default Header;
