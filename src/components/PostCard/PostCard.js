import React, { Component, PropTypes } from 'react'
import GatsbyLink from 'gatsby-link';
import './PostCard.scss'

let linkStyle = {};

function stringToColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return hexToRGBA(color, 0.85);
}


function hexToRGBA(hex,opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
    }
    throw new Error('Bad Hex');
}

export default class PostCard extends Component {
  constructor(props){
    super(props);

    this.state= {
      hover: false
    };

  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  handleCardHover = () => {

  }

  render () {
    let containerStyle;
    let typeStyle;
    let color = stringToColor(this.props.type);

     if (this.state.hover) {
       typeStyle = { backgroundColor: color,
                     borderColor: color,
                     color: "white"
                     }
     } else {
       typeStyle = { borderColor: color,
                      color: color }
     }

    return (
      <GatsbyLink to = {this.props.link}>

      <div className = "post-card-container"
        onMouseOver = {this.handleCardHover}>

        <div className = "left">
          <div className = "top">
            <div className = "title" >{this.props.title}</div>
            <div style = {{color: color}}className = "description">{this.props.description}</div>
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
            <div className = "post-type"
              style = {typeStyle}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              <span>Explore the </span>{this.props.type}
            </div>
          </GatsbyLink>
        </div>
      </div>
    </GatsbyLink>
    );
  }
}
