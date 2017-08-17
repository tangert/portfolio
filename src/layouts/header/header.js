import React, { Component, PropTypes } from 'react'
import Link from 'gatsby-link';
import './header.scss'

export default class Header extends Component {
  render () {
    return(
      <div className = "header">
        <div className = "header-top">
          <Link to = "/">TA</Link>
          <div className = "header-social-icons">
            <Link to = "/">Github</Link>
            <Link to = "/">Dribbble</Link>
            <Link to = "/">LinkedIn</Link>
          </div>
        </div>

        <div className = "header-bottom">
          <div className = "header-title">Tyler Angert</div>
          <div className = "description-tags">
            <div>Researcher</div>
            <div>Engineer</div>
            <div>Designer</div>
          </div>
          <div className = "header-description">I blend media and tech into tomorrow's household innovations.</div>
        </div>
      </div>
    )
  }
}
