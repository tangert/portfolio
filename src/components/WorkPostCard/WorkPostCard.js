import React, { Component, PropTypes } from 'react'
import GatsbyLink from 'gatsby-link';
import './WorkPostCard.scss'

export default class WorkPostCard extends Component {
  render () {
    return (
      <div className = "work-post-card-container">
        <div className = "left">
          <div className = "top">
            <div className = "title">{this.props.title}</div>
            <div className = "description">{this.props.description}</div>
              <div className = "date">{this.props.date}</div>
          </div>
          <div className = "tags">
            {this.props.tags.map(tag => {
              return(
                  <GatsbyLink key = {tag} to={`/tags/${tag}`}>
                    {tag}
                  </GatsbyLink>
              )
            })}
          </div>
      </div>

        <div className = "right">
          <GatsbyLink to = {this.props.link}>
            <div className = "post-type"><span>Read the </span>{this.props.type}</div>
          </GatsbyLink>
        </div>
      </div>
    );
  }
}
