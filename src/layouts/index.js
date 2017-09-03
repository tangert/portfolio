import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from './header/header';
import Navigation from './navigation/navigation';
import '../css/typography.css';
import '../css/index.scss';

export default class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header_visible: true,
      last_scroll_value: 0,
      inflection_value: 0,
      has_inflected: false
    };

    this.onChildrenScroll = this.onChildrenScroll.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);

  }

  onHomeClick = () => {
    console.log("PATH: ", this.props.location.pathname);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onPageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onPageScroll);
  }

  onPageScroll(e){
    if(!this.state.header_visible) {
      this.setState({
        header_visible:true
      });
    }
  }

  onChildrenScroll(e){
    const elm = document.querySelector('.children-container');
    const scroll_value = elm.scrollTop;

    if(scroll_value > this.state.last_scroll_value && scroll_value > 200) {
      console.log('hiding top');
      this.setState({
        header_visible: false
      });
    } else {
      if(!this.state.has_inflected && scroll_value != 0) {
        this.setState({
          inflection_value: scroll_value,
          has_inflected: true
        });
      }

      if((this.state.inflection_value - scroll_value) > (this.state.inflection_value*0.5)) {
        this.setState({
          header_visible: true,
          has_inflected:false,
        });
      }
    }

    this.setState({
      last_scroll_value: scroll_value
    });
  }

  render() {
    const { location, children } = this.props;
    const isRoot = location.pathname === '/';
    return (

      <div className = "app-container">
        <Helmet title="Tyler Angert" meta={[ { name: 'description', content: 'Portfolio' }, ]}/>
        <Header isVisible = {this.state.header_visible} pathname = {location.pathname}/>
        <Navigation pathname = {location.pathname} />
          <div ref = "children-container" onScroll = {this.onChildrenScroll} className = "children-container">
             {this.props.children()}
          </div>
        </div>
    );
  }
}
