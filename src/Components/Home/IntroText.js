import React, { useState, useEffect } from 'react';

export default function IntroText(props) {

  const [text, setText] = useState();

  const intro = "Hi, my name is Tammie, and I'm a full-stack web developer."

  // useEffect(() => {
  //   for (let i = 0; i < intro.length; i++) {
  //     setTimeout(() => {
  //       setText(prev => prev += intro[i])
  //     }, 50 * (i + 1));
  //   }

  //   return () => clearTimeout()
  
  // }, [text])

  return (
    <div className='typewriter'>
      <h1>{intro}</h1>
    </div>
  );
}