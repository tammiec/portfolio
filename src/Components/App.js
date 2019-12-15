import React, { useRef, useState, useEffect } from 'react';

import Home from './Home/Home';
import NavBar from './NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact'
import Footer from './Footer';

import './App.scss';

export default function App() {

  // refs for DOM elements to scroll to
  const homeRef = useRef(null)
  const navRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // fix nav-bar to top when scrolled to the bottom of Home
  const [sticky, setSticky] = useState(false)
   
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > navRef.current.offsetTop) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  
  return (
    <div className="App">
      <div id='home' ref={homeRef}>
        <Home aboutRef={aboutRef} />
      </div>
      <div id='nav-bar' className={sticky ? 'sticky' : ''} ref={navRef}>
        {sticky && <NavBar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />}
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