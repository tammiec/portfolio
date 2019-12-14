import React, { useState, useEffect } from 'react';

export default function IntroText(props) {

  const [text, setText] = useState('');

  const intro = "Hi, my name is Tammie, and I'm a full-stack web developer."

  useEffect(() => {
    if (text !== intro) {
      setTimeout(() => {
        setText(prev => intro.substring(0, prev.length + 1));
      }, 70);
    }

  }, [text])

  return (
    <div className='typewriter'>
      <h1>
        <span>{text}</span>
        <span id="cursor"/>
      </h1>
    </div>
  );
}