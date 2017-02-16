import React, { Component } from 'react';
import dataSet from './GearRatioCalculator';

class D3HorizontalBar extends Component {
  // http://bl.ocks.org/wpoely86/e285b8e4c7b84710e463
  // http://embed.plnkr.co/j8NR3l/preview
  // http://www.pshrmn.com/tutorials/d3/bar-charts/
  // http://plnkr.co/edit/XNsDCqZsUUajBH6Y1sNY?p=preview
  componentDidMount() {
    var names = ['John', 'Tim', 'Sam', 'Greg', 'Charles'],
      hotdogs = [8, 4, 9, 12, 11],
      chart,
      width = 400,
      bar_height = 20,
      gap = 2,
      height = bar_height * names.length;

    var xScale = d3.scale.linear().domain([0, d3.max(hotdogs)]).range([0, width]);
    var yScale = d3.scale.ordinal().domain(d3.range(hotdogs.length)).rangeBands([0, height]);
    var left_width = 100;
    var yRangeBand = bar_height + 2 * gap;
    yScale = function(i) { return yRangeBand * i; };

    chart = d3.select('#chart')
      .append('svg')
      .attr('class', 'chart')
      .attr('width', left_width + width + 40)
      .attr('height', (bar_height + gap * 2) * names.length + 30)
      .append('g')
      .attr('transform', 'translate(10,20)');

    chart.selectAll('line')
      .data(xScale.ticks(d3.max(hotdogs)))
      .enter().append('line')
      .attr("x1", function(d) { return xScale(d) + left_width; })
      .attr("x2", function(d) { return xScale(d) + left_width; })
      .attr("y1", 0)
      .attr("y2", (bar_height + gap * 2) * names.length);

    chart.selectAll(".rule")
      .data(xScale.ticks(d3.max(hotdogs)))
      .enter().append("text")
      .attr("class", "rule")
      .attr("x", function(d) { return xScale(d) + left_width; })
      .attr("y", 0)
      .attr("dy", -6)
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .text(String);

    chart.selectAll("rect")
      .data(hotdogs)
      .enter().append("rect")
      // set the start of the rectangle bar
      .attr("x", function(d, i) { console.log('d: ', d, 'i: ', i); return left_width;})
      .attr("y", function(d, i) { return yScale(i) + gap; })
      // to set the bar length for the horizontal bars
      .attr("width", xScale)
      .attr("height", bar_height);
 /*
    chart.selectAll("text.score")
      .data(hotdogs)
      .enter().append("text")
      .attr("x", function(d) { return xScale(d) + left_width; })
      .attr("y", function(d, i){ return yScale(i) + bar_height/2; } )
      .attr("dx", -5)
      .attr("dy", ".36em")
      .attr("text-anchor", "end")
      .attr('class', 'score')
      .text(String);
  */
    chart.selectAll("text.name")
      .data(names)
      .enter().append("text")
      .attr("x", left_width / 2)
      .attr("y", function(d, i){ return yScale(i) + yRangeBand/2; } )
      .attr("dy", ".36em")
      .attr("text-anchor", "middle")
      .attr('class', 'name')
      .text(String);

  }

  render() {
    return (
      <div id={'chart'}></div>
    )
  }
}

export default D3HorizontalBar;