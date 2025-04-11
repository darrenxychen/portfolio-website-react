import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
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
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <RouterLink to="/resume" className="resume-btn" onClick={toggleMenu}>
                Resume
              </RouterLink>
            </li>
          </ul>
        </nav>
      )}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default MobileHeader;