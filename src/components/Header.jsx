import { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("#");

  const handleSetActive = (to) => {
    setActive(to);
  };

  const scrollSettings = {
    spy: true,
    smooth: "easeInOutQuart",
    offset: -80,
    duration: 500,
    onSetActive: handleSetActive,
    ignoreCancelEvents: true
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
          {...scrollSettings}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="projects"
          {...scrollSettings}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="education"
          {...scrollSettings}
        >
          Education
        </Link>

        <Link
          activeClass="active"
          to="achievements"
          {...scrollSettings}
        >
          Achievements
        </Link>

        <Link
          activeClass="active"
          to="contact"
          {...scrollSettings}
        >
          Contact
        </Link>
      </div>
      <a href="./Darren_Chen_Resume.pdf" className="resume-btn" download>Resume</a>
    </nav>
  );
}

export default Header;
