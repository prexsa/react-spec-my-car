import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Image className='poster-img' src='img/ferrari_488_cluster.jpg' />
        <div className="main-container">
          <Navigation />
          {this.props.children}
        </div>
      </div>
    );
  }
}