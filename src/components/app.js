import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Navigation from './Navigation';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Image className='poster-img' src='./../../assets/ferrari_488_cluster.jpg' />
        <div className="main-container">
          <Navigation />
          {this.props.children}
          Testing
        </div>
      </div>
    );
  }
}