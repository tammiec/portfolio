import React from 'react';

import profilePicture from './bio-image.png';
import TechList from './TechList';

import './About.scss';

export default function About(props) {
  return (
    <>
      <div id='bio-container'>
        <h2>About Me</h2>
        <div id='bio-info'>
          <img id='profile-picture' src={profilePicture} alt='Tammie Chung' />
          <p>I'm a web developer based in Toronto with a background in law, event management, and customer service. I'm passionate about learning new skills, and love exercising my creativity, which is what led me to pursue a career in web development. When I'm not busy coding, you can find me trying out the best cheap eats in the city, playing piano and violin, or just curled up on the couch with my cat and a good book.</p>
        </div>
      </div>
      <div id='tech-list-container'>
        <h2>Technical Skills</h2>
        <table id='tech-table'>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </>
  );
}