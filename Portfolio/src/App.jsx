import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticlesComponent from './components/ParticleComponent';


const App = () => {
  return (
    <Router>

      <Navigation />

      <ParticlesComponent id='particle'></ParticlesComponent>
      <section id="home">
        <Home></Home>
      </section>

      <section id="about">
        <About></About>
      </section>

      <section id='education'>
        <Education></Education>
      </section>

      <section id="skills">
        <Skills></Skills>
      </section>

      <section id="projects">
        <Projects></Projects>
      </section>
      
      <section id="contact">
        <Contact></Contact>
      </section>

      <Footer></Footer>
    </Router>
  );
};

export default App;
