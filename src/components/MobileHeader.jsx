import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import './MobileHeader.css';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="mobile-header">
      <div className="hamburger-icon" onClick={toggleMenu} ref={hamburgerRef}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      {isOpen && (
        <nav className="sidebar" ref={sidebarRef}>
          <ul>
            <li>
              <Link to="about" smooth={true} offset={0} duration={500} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={25} duration={500} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} offset={25} duration={500} onClick={toggleMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="achievements" smooth={true} offset={25} duration={500} onClick={toggleMenu}>
                Achievements
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={25} duration={500} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a href="./Darren_Chen_Resume.pdf" className="resume-btn" download onClick={toggleMenu}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default MobileHeader;