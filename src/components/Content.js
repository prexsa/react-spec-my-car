import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Navigation from './Navigation';
import Layout from './Layout';


class Content extends Component {
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
    return (
      <div className='main-container'>
      </div>
    );
  }
}


export default Content;