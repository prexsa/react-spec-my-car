import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Nav extends Component {

  render() {
    return (
      <div>
        <Header as='h1' color='orange'>
          Specs
        </Header>
      </div>
    );
  }
}

export default Nav;