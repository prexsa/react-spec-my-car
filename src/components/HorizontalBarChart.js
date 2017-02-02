import React, { Component } from 'react';
import Chart from 'chart.js';

class HorizontalBarChart extends Component {
  componentDidMount() {
    let chartCanvas = this.refs.chart;

    let myChart = new Chart(chartCanvas, {
      type: 'horizontalBar',
      data: this.props.data
    });

    this.setState({chart: myChart});
  }
  componentDidUpdate() {
    let chart = this.state.chart;
    let data = this.props.data;

console.log('data: ', data);

    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    chart.update();
    console.log('charts update: ', chart);
  }
  render() {

    return(
      <div>
        <canvas ref={'chart'} height={'400'} width={'600'}></canvas>
      </div>
    );
  }
}

export default HorizontalBarChart;