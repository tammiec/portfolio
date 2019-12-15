import React, { useRef, useState, useEffect } from 'react';

import Home from './Home/Home';
import NavBar from './NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Footer from './Footer';

import './App.scss';

export default function App() {

  // refs for DOM elements to scroll to
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // fix nav-bar to top when scrolled to the bottom of Home
  const [displayNav, setDisplayNav] = useState(false)

  const handleScroll = (event) => {
    const bottom = homeRef.current.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      setDisplayNav(true);
    }
  }
  
  return (
    <div className="App" onScroll={handleScroll}>
      <div id='home' ref={homeRef}>
        <Home aboutRef={aboutRef} />
      </div>
      {displayNav && <NavBar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />}
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