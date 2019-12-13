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
      <NavBar ref={navRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}