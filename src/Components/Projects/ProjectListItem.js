import React from 'react';

export default function ProjectListItem(props) {
  return (
    <li>
      <h3>{props.name}</h3>
      {props.description}
      <img src={props.image} alt={`Screenshot of ${props.name}`} />
    </li>
  );
}