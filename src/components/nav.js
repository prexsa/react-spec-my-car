import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';

class Nav extends Component {

  render() {
    return (
      <div>
        <Header as='h1'>
          Specs
        </Header>
        <Image className='poster-img' src='./../../assets/ferrari_488_cluster.jpg' />
      </div>
    );
  }
}

export default Nav;