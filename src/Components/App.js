import React from 'react';

import Home from './Home/Home';
import NavBar from './NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Footer from './Footer';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}