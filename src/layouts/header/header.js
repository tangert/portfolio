import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link';
import github from './../../static/github.png'
import linkedin from './../../static/linkedin.png'
import dribbble from './../../static/dribbble.png'
import ta_logo from './../../static/ta_logo.png'
import './header.scss'

export default class Header extends Component {
  render () {
    let header;
    let enter_button;
    let top_nav_bar;
    let style;

    if(this.props.pathname === "/") {
      enter_button = (
        <Link to = "/about">
          <button className = "enter-button">
              Come explore
          </button>
        </Link>
      );
    } else {
      top_nav_bar = (
        <div className = "header-top">
          <Link to = "/"><img src ={ta_logo} className = "header-img"/></Link>
          <div className = "header-social-icons">
            <a href = "https://github.com/tangert" target="_blank"><img src ={github} className = "header-img"/></a>
            <a href ="https://dribbble.com/tangert" target="_blank"><img src ={dribbble} className = "header-img"/></a>
            <a href ="https://www.linkedin.com/in/tangert/" target="_blank"><img src ={linkedin} className = "header-img"/></a>
          </div>
        </div>
      );
    }

    // if(this.props.pathname.includes("/work/")) {
    //   style = {
    //     transform: "translateY(-100%)"
    //   }
    // }

    if(this.props.isVisible) {
      header = (
        <div className = {this.props.pathname === "/" ? "header site-not-entered" : "header"}>

          <div>{top_nav_bar}</div>

          <div className = "header-bottom">
            <div className = "header-title">Tyler Angert</div>
            <div className = "description-tags">
              <div className = "tag researcher">Researcher</div>
              <div className = "tag engineer">Engineer</div>
              <div className = "tag designer">Designer</div>
            </div>
            <div className = "header-description">I blend media and technology into tomorrow's household innovations.</div>
          </div>

          <div>{enter_button}</div>

      </div>
      );
    } else {

      header = (
        <div className = "header">
          <div className = "header-top">
            <Link to = "/"><img src ={ta_logo} className = "header-img"/></Link>
            <div className = "header-social-icons">
              <a href = "https://github.com/tangert" target="_blank"><img src ={github} className = "header-img"/></a>
              <a href ="https://dribbble.com/tangert" target="_blank"><img src ={dribbble} className = "header-img"/></a>
              <a href ="https://www.linkedin.com/in/tangert/" target="_blank"><img src ={linkedin} className = "header-img"/></a>
            </div>
          </div>
        </div>
      );
    }

    return(
      <div>{header}</div>
    )
  }
}
