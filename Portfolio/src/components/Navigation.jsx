import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Navigation.css';

const Navigation = () => {
    return (
        <nav className='fixed-nav'>
         
            <ScrollLink className='name' to="home" smooth={true} duration={1000} style={{ 'color': '#ea580c', fontSize: '35px', fontFamily: 'cursive' }}>Ishu</ScrollLink>

            <div className="navigation-link-container">
                <div id="about-div" className="nav-item">
                    <ScrollLink to="about" smooth={true} duration={1000}>About</ScrollLink>
                </div>
                <div id="education-div" className="nav-item">
                    <ScrollLink to="education" smooth={true} duration={1000}>Education</ScrollLink>
                </div>
                <div id="skills-div" className="nav-item">
                    <ScrollLink to="skills" smooth={true} duration={1000}>Skills</ScrollLink>
                </div>
                <div id="projects-div" className="nav-item">
                    <ScrollLink to="projects" smooth={true} duration={1000}>Projects</ScrollLink>
                </div>
                <div id="contact-div" className="nav-item">
                    <ScrollLink to="contact" smooth={true} duration={1000}>Contact</ScrollLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
