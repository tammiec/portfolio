import React from 'react';
import TechListItem from './TechListItem';

export default function TechList(props) {

  const techStack = props.skills.map((stack, index) => <TechListItem key={index} stack={stack} />)

  return (
    <>
      <h3>{props.skillTitle}</h3>
      <ul className={`tech-list ${props.skillType}`}>
        {techStack}
      </ul>
    </>
  );
}