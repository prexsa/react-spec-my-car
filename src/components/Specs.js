import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Layout from './Layout';
//import D3HorizontalBar from './D3HorizontalBarChart';
//import D3Bar from './D3BarChart';
import EbaySearch from './EbayAPISearch';

class Specs extends Component {
  constructor(props) {
    super(props);

    this.state = { carData: [] };
    const ROOT_URL = 'https://api.edmunds.com/api/vehicle/v2/styles/100481925?view=full&fmt=json&api_key=g5zmftujebdv66cbendfjygd';
    axios.get(ROOT_URL)
      .then(res => {
        const posts = res.data;
        this.setState({ carData: posts });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    if(Array.isArray(this.state.carData)) {
      return <div>Loading...</div>
    }
// http://plnkr.co/edit/XNsDCqZsUUajBH6Y1sNY?p=preview
    return (
      <div>
      <EbaySearch />
        <Header as='h2' >E46 M3 Specs</Header>
        Gear Ratio Graph
        <Layout data={this.state.carData} />
      </div>
    );
  }
}

export default Specs;