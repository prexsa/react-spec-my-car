import React, { Component } from 'react';

import Nav from './nav';
import DropDownList from './DropDownList';
import SideNav from './SideNav';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ul className="w3-list">
          <li>Get everything to work with one car, E46 M3</li>
          <li>Side Nav, Specs, Gallery, Gear Ratio Graph</li>
        </ul>
        <SideNav />
        <Content />
      </div>
    );
  }
}