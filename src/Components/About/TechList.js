import React from 'react';
import TechListItem from './TechListItem';

export default function TechList(props) {

  const techStack = props.skills.map((stack, index) => <TechListItem key={index} stack={stack} />)

  return (
    <tr>
      <td>
        <h4>{props.skillTitle}</h4>
      </td>
      <td>
        <ul className={`tech-list ${props.skillType}`}>
          {techStack}
        </ul>
      </td>
    </tr>
  );
}