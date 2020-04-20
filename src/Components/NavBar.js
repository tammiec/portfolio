import React from 'react';

import scrollToRef from '../Helpers/scrollToRef';

import './NavBar.scss';

export default function NavBar(props) {

  const handleClick = e => {
    console.log('e:', e)
    props.setMode(e.target.name);
    scrollToRef(props.contentRef);
  }

  return (
    <nav id='nav-center'>
      <button className='nav-item' name='ABOUT' onClick={handleClick}>About Me</button>
      <button className='nav-item' name='PROJECTS' onClick={handleClick}>Projects</button>
      <button className='nav-item' name='CONTACT' onClick={() => scrollToRef(props.contactRef)}>Contact</button>
    </nav>
  );
}