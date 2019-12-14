import React from 'react';

import './NavBar.scss';

export default function NavBar(props) {
  return (
    <nav id='nav-center'>
      <p className='nav-item'>About Me</p>
      <p className='nav-item'>Projects</p>
      <p className='nav-item'>Contact</p>
    </nav>
  );
}