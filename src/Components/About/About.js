import React from 'react';
import profilePicture from './bio-image.png';

import './About.scss';

export default function About(props) {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <img id='profile-picture' src={profilePicture} alt='Tammie Chung' />
      <p>Magna reprehenderit excepteur quis culpa. Ullamco cillum aute pariatur in sit laborum adipisicing sint cillum cillum dolore sint ipsum. Ea ea velit sint deserunt. Est sit enim laboris tempor tempor exercitation qui. Dolor id consequat labore consequat aliqua tempor dolore ea dolore sunt. Esse occaecat cupidatat dolore sit ipsum occaecat consequat commodo.</p>
    </div>
  );
}