import React from 'react';

import ProjectListItem from './ProjectListItem';
import placeholder from './Diagram.png';

export default function ProjectList(props) {

  const projects = [
    {
      name: 'the Drawing Board',
      description: "A collaborative meeting app that allows users to schedule and host meetings remotely, whiteboard over documents in real-time, and take personal notes. Audio streaming and text chats are enabled in the meeting room for communication, and when the meeting ends, marked up documents and notes are saved to users' dashboards for future reference.",
      image: placeholder
    },
    {
      name: 'Toodleedoo',
      description: 'Toodleedoo is a smart to-do list application that helps you organize and sort your tasks. Upon categorization, Toodleedoo will suggest three resources for the user to check out. The user has the ability to edit the name of their task, add a description, add additional resources, mark it as complete, mark it as important, and send the task to another local user.',
      image: placeholder
    },
    {
      name: 'Tweeter',
      description: 'A single-page Twitter clone project powered by Ajax.',
      image: placeholder
    }
  ]

  const projectsList = projects.map((project, index) => (
    <ProjectListItem 
      key={index} 
      name={project.name} 
      description={project.description}
      image={project.image}
    />
  ))

  return (
    <ul>
      {projectsList}
    </ul>
  );
}