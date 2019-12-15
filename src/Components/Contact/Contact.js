import React from 'react';

import email from './at.png';
import github from './github.png';
import linkedin from './linkedin.png';

import './Contact.scss';

export default function Contact(props) {
  return (
    <>
      <h2>Contact Me</h2>
      <table id='contact-table'>
        <tbody>
          <tr>
            <td><img src={email} alt='email logo'/></td>
            <td><a href='mailto:tammie.chung11@gmail.com'>tammie.chung11@gmail.com</a></td>
          </tr>
          <tr>
            <td><img src={linkedin} alt='linked logo'/></td>
            <td><a href='https://www.linkedin.com/in/tammiechung/' rel='noopener noreferrer' target='_blank'>/in/tammiechung</a></td>
          </tr>
          <tr>
            <td><img src={github} alt='github logo'/></td>
            <td><a href='https://github.com/tammiec' rel='noopener noreferrer' target='_blank'>/tammiec</a></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}