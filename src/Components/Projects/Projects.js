import React from 'react';
import ProjectList from './ProjectList';

import './Projects.scss';

export default function Projects(props) {
  return (
    <>
      <h2>Projects</h2>
      <p>Additional projects are available to view on my <a href='https://github.com/tammiec'>Github</a> profile.</p>
      <ProjectList />
    </>
  );
}