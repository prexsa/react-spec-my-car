import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  state = {activeItem: 'specs'};

  handleMenuSelect = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state;

    return(
      <Menu pointing>
        <Menu.Item
          name='specs'
          active={activeItem === 'specs'}
          onClick={this.handleMenuSelect}
          as={Link}
          to='specs'
        >
          Specs
        </Menu.Item>
        <Menu.Item
          name='parts'
          active={activeItem === 'parts'}
          onClick={this.handleMenuSelect}
          as={Link}
          to='parts'
        >
          Parts
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navigation; 