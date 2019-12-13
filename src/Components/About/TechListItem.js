import React from 'react';

export default function TechListItem(props) {
  return (
    <div className='tech-list-item'>
      <p>{props.stack}</p>
    </div>
  );
}