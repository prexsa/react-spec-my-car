import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Layout from './Layout';
import D3HorizontalBar from './D3HorizontalBarChart';



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
    var data = {
        labels: [1,2,3,4,5,6].reverse(),
         datasets: [{
            label: 'E46 M3 Gear Ratio',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return (
      <div>
        <D3HorizontalBar />
        <Header as='h2' >E46 M3 Specs</Header>
        Gear Ratio Graph
        <Layout data={this.state.carData}/>
      </div>
    );
  }
}

export default Specs;