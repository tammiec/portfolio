import React, { useState, useEffect } from 'react';

import IntroText from './IntroText';
import scrollToRef from '../../Helpers/scrollToRef';

import './Home.scss';

export default function Component(props) {

  const [textLoaded, setTextLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    scrollToRef(props.aboutRef)
  }

  useEffect(() => {
    if (textLoaded) {
      setFadeIn(true)
    }
  
  }, [textLoaded])

  return (
    <>
      <IntroText setTextLoaded={setTextLoaded} />
      <button className={`about-me-button ${fadeIn && 'fade-in'}`} onClick={handleClick}>About Me<span>&#8594;</span></button>
    </>
  );
}