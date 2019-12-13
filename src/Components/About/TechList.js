import React from 'react';
import TechListItem from './TechListItem';

export default function TechList(props) {

  const techStackArray = ['HTML', 'JavaScript', 'CSS']
  const techStack = techStackArray.map((stack, index) => <TechListItem key={index} stack={stack} />)

  return (
    <>
      <h2>Tech Stack</h2>
      <ul>
        {techStack}
      </ul>
    </>
  );
}