import React, { useState, useEffect } from 'react';

import IntroText from './IntroText';

import './Home.scss';

export default function Component(props) {

  const [textLoaded, setTextLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {

  }

  useEffect(() => {
    if (textLoaded) {
      setFadeIn(true)
    }
  
  }, [textLoaded])

  return (
    <div id='home'>
      <IntroText setTextLoaded={setTextLoaded} />
      <button className={`about-me-button ${fadeIn && 'fade-in'}`} onClick={handleClick}>About Me<span>&#8594;</span></button>
    </div>
  );
}