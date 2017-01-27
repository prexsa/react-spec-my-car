import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Nav from './Nav';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Nav />
        <Image className='poster-img' src='./../../assets/ferrari_488_cluster.jpg' />
        <Content />
      </div>
    );
  }
}