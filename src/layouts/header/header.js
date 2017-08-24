import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link';
import github from './../../static/github.png'
import linkedin from './../../static/linkedin.png'
import dribbble from './../../static/dribbble.png'
import ta_logo from './../../static/ta_logo.png'
import './header.scss'

export default class Header extends Component {
  render () {
    return(
      <div className = {this.props.isVisible ? "header" : "header hidden"}>
        <div className = "header-top">
          <Link to = "/"><img src ={ta_logo} className = "header-img"/></Link>
          <div className = "header-social-icons">
            <a href = "https://github.com/tangert" target="_blank"><img src ={github} className = "header-img"/></a>
            <a href ="https://dribbble.com/tangert" target="_blank"><img src ={dribbble} className = "header-img"/></a>
            <a href ="https://www.linkedin.com/in/tangert/" target="_blank"><img src ={linkedin} className = "header-img"/></a>
          </div>
        </div>

        <div className = "header-bottom">
          <div className = "header-title">Tyler Angert</div>
          <div className = "description-tags">
            <div className = "tag researcher">Researcher</div>
            <div className = "tag engineer">Engineer</div>
            <div className = "tag designer">Designer</div>
          </div>
          <div className = "header-description">I blend media and technology into tomorrow's household innovations.</div>
        </div>
      </div>
    )
  }
}
