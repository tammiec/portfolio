import React from 'react';

import profilePicture from './bio-image.png';
import TechList from './TechList';

import './About.scss';

export default function About(props) {
  return (
    <>
      <h2>About Me</h2>
      <img id='profile-picture' src={profilePicture} alt='Tammie Chung' />
      <p>Magna reprehenderit excepteur quis culpa. Ullamco cillum aute pariatur in sit laborum adipisicing sint cillum cillum dolore sint ipsum. Ea ea velit sint deserunt. Est sit enim laboris tempor tempor exercitation qui. Dolor id consequat labore consequat aliqua tempor dolore ea dolore sunt. Esse occaecat cupidatat dolore sit ipsum occaecat consequat commodo.</p>
      <h2>Technical Skills</h2>
      <TechList 
        skillType='languages'
        skillTitle='Languages'
        skills={['HTML', 'CSS', 'JavaScript', 'Ruby', 'SQL']}
      />
      <TechList 
        skillType='frameworks'
        skillTitle='Frameworks, Libraries &amp; Environments'
        skills={['NodeJS', 'Express', 'EJS', 'jQuery', 'Ajax', 'React', 'Rails', 'Sass', 'Bootstrap', 'Material UI', 'ActiveRecord', 'WebSockets']}
      />
      <TechList 
        skillType='databases'
        skillTitle='Databases, Systems &amp; CMS'
        skills={['PostgreSQL', 'Git', 'CircleCI']}
      />
      <TechList 
        skillType='learning'
        skillTitle='Currently Learning'
        skills={['Redux', 'React Native']}
      />
    </>
  );
}