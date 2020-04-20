import React, { useState } from 'react';

import IntroText from './IntroText';
import scrollToRef from '../../Helpers/scrollToRef';

import './Home.scss';

export default function Component(props) {

  const [textLoaded, setTextLoaded] = useState(false);

  const handleClick = () => {
    scrollToRef(props.contentRef)
  }

  return (
    <>
      <IntroText setTextLoaded={setTextLoaded} />
      <button className={`about-me-button ${textLoaded && 'fade-in'} ${textLoaded && 'button-hover'}`} onClick={handleClick}>About Me<span>&#8595;</span></button>
    </>
  );
}