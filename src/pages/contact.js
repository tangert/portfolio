import React, { Component } from 'react';
import '../css/pages/contact-page.scss';

export default class ContactPage extends Component {
  render() {
    return(
      <div className = "contact-page">
        <div className = "title">Say hi. Let's make something together.</div>
          <form className = "contact-form" action="https://formspree.io/tyler@angert.com" method="POST">
            <div className = "basic-info">
              <input type = "text" name = "name" className = "name" placeholder = "Your name, please"></input>
              <input type = "text" name = "subject" className = "subject" placeholder = "Subject"></input>
              <input type = "email" name = "_replyto" className = "email" placeholder = "Email"></input>
              <input type = "text" name = "found_out_from" className = "find-out" placeholder = "How'd you find me?"></input>
            </div>
            <textarea className = "message" name = "message" placeholder = "What's up?"></textarea>
            <input className = "submit-btn" type = "submit" value = "Send away!"></input>
          </form>
    </div>
    );
  }
}
