import React from 'react';
import ProjectList from './ProjectList';

import './Projects.scss';

export default function Projects(props) {
  return (
    <div id='projects-container'>
      <h2>Projects</h2>
      <ProjectList />
      <p>Additional projects are available to view on my <a href='https://github.com/tammiec' rel='noopener noreferrer' target='_blank'>Github</a> profile.</p>
    </div>
  );
}