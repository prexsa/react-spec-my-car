import React, { Component } from 'react';
import Chart from 'chart.js';

class HorizontalBarChart extends Component {
  componentDidMount() {
    let chartCanvas = this.refs.chart;

    let myChart = new Chart(chartCanvas, {
      type: 'horizontalBar',
      data: this.props.data,
      options: {
        scales: {
        xAxes: [{
          type : 'linear',
          ticks: {
            min: 0,
            max: 80
            },
          }],
        }
      }
    });

    this.setState({chart: myChart});
  }
  componentDidUpdate() {
    let chart = this.state.chart;
    let data = this.props.data;
  // console.log('state chart: ', chart);  
  // console.log('data: ', data);
    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    // console.log('chart: ', chart);
    chart.update();
  }
  render() {

    return(
      <div>
        <canvas ref={'chart'} height={'200'} width={'400'}></canvas>
      </div>
    );
  }
}

export default HorizontalBarChart;