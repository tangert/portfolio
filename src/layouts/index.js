import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from './header/header';
import Navigation from './navigation/navigation';
import '../css/typography.css';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  onHomeClick = () => {
    console.log("PATH: ", this.props.location.pathname);
  }

  render() {
    const { location, children } = this.props;
    const isRoot = location.pathname === '/';
    return (

      <div className = "app-container">
        <Helmet title="Tyler Angert" meta={[ { name: 'description', content: 'Portfolio' }, ]}/>
        <Header/>
        <Navigation pathname = {location.pathname} />
        <div className = "children-container"> {this.props.children()}</div>
      </div>
    );
  }
}
