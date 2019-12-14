import React from 'react';

import scrollToRef from '../Helpers/scrollToRef';

import './NavBar.scss';

export default function NavBar(props) {

  const handleClick = item => {
    scrollToRef(item)
  }
  return (
    <nav id='nav-center'>
      <p className='nav-item' onClick={() => handleClick(props.aboutRef)}>About Me</p>
      <p className='nav-item' onClick={() => handleClick(props.projectsRef)}>Projects</p>
      <p className='nav-item' onClick={() => handleClick(props.contactRef)}>Contact</p>
    </nav>
  );
}