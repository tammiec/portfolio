import React, { useRef } from 'react';

import Home from './Home/Home';
import NavBar from './NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Footer from './Footer';

import './App.scss';

export default function App() {

  // refs for DOM elements to scroll to
  const navRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="App">
      <Home aboutRef={aboutRef} />
      <div id='nav-bar' ref={navRef}>
        <NavBar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      </div>
      <div id='about' ref={aboutRef}>
        <About />
      </div>
      <div id='projects' ref={projectsRef}>
        <Projects />
      </div>
      <div id='contact' ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}