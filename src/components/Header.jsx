import React from 'react'
import './Header.css'
import { Router, NavLink } from 'react-router-dom'


import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'

function Header() {
  return (
    <nav>
        <div className='nav-container'>
            <div className='logo'>
                {/* <img src={logo} alt="logo" /> */}
            </div>
            <div className='nav-items'>
                {/* <NavLink to="#about">About</NavLink> */}
            </div>
        </div>
    </nav>
  )
}

export default Header