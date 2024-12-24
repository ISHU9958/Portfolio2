import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='fixed-nav'>
            <ScrollLink className='name' to="home" smooth={true} duration={1000} style={{ color: '#ea580c', fontSize: '35px', fontFamily: 'cursive' }}>
                Ishu
            </ScrollLink>

            <button className='hamburger' onClick={toggleMenu}>
                ☰
            </button>

            <div className={`navigation-link-container ${menuOpen ? 'open' : ''}`}>
                <div id="about-div" className="nav-item">
                    <ScrollLink to="about" smooth={true} duration={1000} onClick={toggleMenu}>About</ScrollLink>
                </div>
                <div id="education-div" className="nav-item">
                    <ScrollLink to="education" smooth={true} duration={1000} onClick={toggleMenu}>Education</ScrollLink>
                </div>
                <div id="skills-div" className="nav-item">
                    <ScrollLink to="skills" smooth={true} duration={1000} onClick={toggleMenu}>Skills</ScrollLink>
                </div>
                <div id="projects-div" className="nav-item">
                    <ScrollLink to="projects" smooth={true} duration={1000} onClick={toggleMenu}>Projects</ScrollLink>
                </div>
                <div id="contact-div" className="nav-item">
                    <ScrollLink to="contact" smooth={true} duration={1000} onClick={toggleMenu}>Contact</ScrollLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
