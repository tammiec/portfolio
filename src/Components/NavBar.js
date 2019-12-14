import React from 'react';

import './NavBar.scss';

export default function NavBar(props) {
  return (
    <header id='nav-center'>
      <p className='nav-item'>About</p>
      <p className='nav-item'>Projects</p>
      <p className='nav-item'>Contact</p>
    </header>
  );
}