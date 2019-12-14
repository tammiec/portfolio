import React from 'react';

import profilePicture from './bio-image.png';
import TechList from './TechList';

import './About.scss';

export default function About(props) {
  return (
    <>
      <div id='bio-container'>
        <div id='bio-photo'>
          <h2>About Me</h2>
          <img id='profile-picture' src={profilePicture} alt='Tammie Chung' />
        </div>
        <p>
          I'm a web developer based in Toronto with a background in law, event management, and customer service. I'm passionate about learning new skills, and love exercising my creativity, which is what led me to pursue a career in web development. When I'm not busy coding, you can find me trying out the best cheap eats in the city, playing piano and violin, or just curled up on the couch with my cat and a good book.
        </p>
      </div>
      
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