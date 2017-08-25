import React, { Component, PropTypes } from 'react'
import GatsbyLink from 'gatsby-link';
import './../../css/PostCard.scss'

export default class BlogPostCard extends Component {
  render () {
    return (
      <div className = "post-card-container">
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
          <div className = "post-type">Read the post</div>
          </GatsbyLink>
        </div>
      </div>
    );
  }
}
