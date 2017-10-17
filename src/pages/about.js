import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Link from '../components/Link/Link';
import '../css/pages/about-page.scss';

class About extends Component {
  render () {
    return (
      <div style = {{margin: "25px", color: "darkgrey"}}>

         I'm a Computer Science student and self-taught designer.

         I pride myself in my diverse interests and skill sets that span general programming and software engineering, graphic design, marketing, UX design, and writing.

         My background is in art and architecture from High School, and I now spend most of my time doodling new software ideas and wasting time on YouTube.

         If you want t
         o do a project together, reach me through my contact page or send me a message on Facebook.

         Hope you enjoy my work.
      </div>
    );
  }
}

export default About;
