import React, { Component } from 'react'
import Link from 'gatsby-link';
import './navigation.scss'

export default class Navigation extends Component {
  constructor(props){
    super(props);
    console.log("PATH: ", props.pathname);

    this.state = {
      currently_selected: this.convertPathToString(props.pathname),
    };

    this.renderSection = this.renderSection.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    this.convertPathToString = this.convertPathToString.bind(this);
  }

  onNavClick(path, e) {
    let selected;

    switch(path) {
      case "BLOG": selected = "BLOG"
        break;
      case "WORK": selected = "WORK"
        break;
      case "CONTACT": selected = "CONTACT"
        break;
      default:
        selected = "/work"
    }

    this.setState({
      currently_selected: selected
    });
  }

  //Turns something like "/blog" into "BLOG"
  convertPathToString(path){
    return path.substr(1).toUpperCase();
  }

  renderSection(section){
    console.log(this.state.currently_selected);
    return this.state.currently_selected === section ? "nav-btn selected" : "nav-btn";
  }

  render () {
    return(
      <div className = "nav-bar">
        <Link to = "/blog" className = {this.renderSection("BLOG")} onClick = {() => this.onNavClick("BLOG")}>Blog</Link>
        <Link to = "/work" className = {this.renderSection("WORK")} onClick = {() => this.onNavClick("WORK")}>Work</Link>
        <Link to = "/contact" className = {this.renderSection("CONTACT")} onClick = {() => this.onNavClick("CONTACT")}>Contact</Link>
      </div>
    )
  }
}
