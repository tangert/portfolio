import React, { Component, PropTypes } from 'react'
import './WorkPostCard.scss'

export default class WorkPostCard extends Component {
  constructor(props){
    super(props);
    this.readTime = this.readTime.bind(this);
  }

  readTime = (text) => {
    console.log('hi');
  }

  render () {
    return (
      <div className = "work-post-card-container">
        <div className = "left">
          <div className = "top">
            <div className = "title">{this.props.title}</div>
            <div className = "description">{this.props.description}</div>
          </div>
          <div className = "tags">{this.props.tags}</div>
        </div>

        <div className = "right">
          <div className = "post-type"></div>
          <div>{this.readTime(this.props.text)}</div>
        </div>
      </div>
    );
  }
}
