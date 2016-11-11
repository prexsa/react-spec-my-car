import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    return (
      <nav className="w3-sidenav w3-white w3-border" style={{width: "25%"}}>
        <a href="#">Specs</a>
        <a href="#">Gear Ratio Graph</a>
      </nav>
    );
  }
}

export default SideNav;