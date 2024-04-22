import { useState } from "react";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("#");

  const handleClick = (section) => {
    setActive(section);
  };

  return (
    <nav>
      <div className="logo">DC</div>
      <div className="nav-links">
        <a
          href="#about"
          className={active === "#about" ? "active" : ""}
          onClick={() => handleClick("#about")}
        >
          About
        </a>
        <a
          href="#skills"
          className={active === "#skills" ? "active" : ""}
          onClick={() => handleClick("#skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={active === "#projects" ? "active" : ""}
          onClick={() => handleClick("#projects")}
        >
          Projects
        </a>
        <a
          href="#education"
          className={active === "#education" ? "active" : ""}
          onClick={() => handleClick("#education")}
        >
          Education
        </a>
        <a
          href="#contact"
          className={active === "#contact" ? "active" : ""}
          onClick={() => handleClick("#contact")}
        >
          Contact
        </a>
      </div>
      <a href="#" className="resume-btn" download>
        Resume
      </a>
    </nav>
  );
}

export default Header;