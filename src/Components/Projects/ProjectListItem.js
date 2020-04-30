import React from 'react';

export default function ProjectListItem(props) {
  return (
    <div className='project-item'>
      <h3>{props.name}</h3>
      {props.description}
      <img className='project-image' src={props.image} alt={`Screenshot of ${props.name}`} />
    </div>
  );
}