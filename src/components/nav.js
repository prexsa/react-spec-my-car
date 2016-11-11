import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="w3-navbar w3-light-grey w3-border">
          <li><h2>Spec My Car</h2></li>
          <li className="w3-right"><a href="#" className="w3-padding-24">Link 1</a></li>
          <li className="w3-right"><a href="#" className="w3-padding-24">Link 2</a></li>
          <li className="w3-right"><a href="#" className="w3-padding-24">Link 3</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;