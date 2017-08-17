import React, { Component } from 'react'
import Link from 'gatsby-link';
import './navigation.scss'

export default class Navigation extends Component {
  constructor(props){
    super(props);
    console.log("PATH: ", props.pathname);

    this.state = {
      currently_selected: this.convertPathToString(props.pathname),

      selected_color: {
        borderRadius: 5,
        padding: "2.5% 12.5% 2.5% 12.5%",
        backgroundColor: "white",
        boxShadow: "0 1px 12px 1px rgba(0,0,0,0.20)",
        color: "lightgreen",
        transition: "0.25s linear",
        fontSize: "1.5em"
      }
    };

    this.renderStyle = this.renderStyle.bind(this);
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

  renderStyle(section){
    return this.state.currently_selected === section ? this.state.selected_color : {};
  }

  render () {
    return(
      <div className = "nav-bar">
        <Link to = "/blog" className = "nav-btn" onClick = {() => this.onNavClick("BLOG")} style = {this.renderStyle("BLOG")}>Blog</Link>
        <Link to = "/work" className = "nav-btn" onClick = {() => this.onNavClick("WORK")} style = {this.renderStyle("WORK")}>Work</Link>
        <Link to = "/contact" className = "nav-btn" onClick = {() => this.onNavClick("CONTACT")} style = {this.renderStyle("CONTACT")}>Contact</Link>
      </div>
    )
  }
}
