import React, { Component } from 'react';

import Nav from './Nav';
import DropDownList from './DropDownList';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Nav />
        <Content />
      </div>
    );
  }
}