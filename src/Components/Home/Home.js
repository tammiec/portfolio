import React from 'react';

import IntroText from './IntroText';
import Button from './Button';

import './Home.scss';

export default function Component(props) {
  return (
    <div id='home'>
      <IntroText />
      <Button />
    </div>
  );
}