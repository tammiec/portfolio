import React from 'react';
import TechListItem from './TechListItem';

export default function TechList(props) {

  const techStack = props.skills.map((stack, index) => <TechListItem key={index} stack={stack} />)

  return (
    <>
      <ul className={`tech-list ${props.skillType}`}>
      <h3>{props.skillTitle}</h3>
        {techStack}
      </ul>
    </>
  );
}