import React from 'react';

import ProjectListItem from './ProjectListItem';

import { projects } from './project-details';

export default function ProjectList(props) {

  const projectsList = projects.map((project, index) => (
    <ProjectListItem 
      key={index} 
      name={project.name} 
      description={project.description}
      image={project.image}
      url={project.url}
    />
  ))

  return (
    <div id='project-list'>
      {projectsList}
    </div>
  );
}