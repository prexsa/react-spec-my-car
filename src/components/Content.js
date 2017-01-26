import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Layout from './Layout';


class Content extends Component {
  constructor(props) {
    super(props);

    this.state = { carData: [] };
    const ROOT_URL = 'https://api.edmunds.com/api/vehicle/v2/styles/100481925?view=full&fmt=json&api_key=g5zmftujebdv66cbendfjygd';
    axios.get(ROOT_URL)
      .then(res => {
        const posts = res.data;
        //console.log("Posts: ", posts);
        this.setState({ carData: posts });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='main-container'>
        <Header as='h2'>E46 M3 Specs</Header>
        <ul className="w3-list">
          <li>Get everything to work with one car, E46 M3</li>
          <li>Side Nav, Specs, Gallery, Gear Ratio Graph</li>
        </ul>
        <div>
          Number One Programmer in the west coast, son!
          <Layout data={this.state.carData}/>
        </div>
      </div>
    );
  }
}


export default Content;