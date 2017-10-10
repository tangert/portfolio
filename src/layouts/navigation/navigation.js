import React, { Component } from 'react'
import Link from 'gatsby-link';
import './navigation.scss'

export default class Navigation extends Component {
  //Turns something like "/blog" into "BLOG"
  convertPathToString = (path) => {
    return path.substr(1).toUpperCase();
  }

  checkSelected = (section) => {
    return this.convertPathToString(this.props.pathname).includes(section) && this.props.pathname !== "/" ? "nav-btn selected" : "nav-btn";
  }

  render () {

    return(
      <div className = "nav-bar">
        <Link to = "/about" className = {this.checkSelected("ABOUT")}>About</Link>
        <Link to = "/work" className = {this.checkSelected("WORK")}>Work</Link>
        <Link to = "/contact" className = {this.checkSelected("CONTACT")}>Contact</Link>
      </div>
    )
  }
}
