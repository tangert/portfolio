import React from 'react';
import '../css/pages/contact-page.scss';

export default () =>
  <div className = "contact-page">
    <div className = "title">Say hi. I don't bite.</div>
    <div className = "contact-form">
      <input className = "name" placeholder = "Your name, please"></input>
      <input className = "subject" placeholder = "Le subject"></input>
      <input className = "email" placeholder = "Le email"></input>
      <input className = "message" placeholder = "Le message"></input>
    </div>
  </div>;
