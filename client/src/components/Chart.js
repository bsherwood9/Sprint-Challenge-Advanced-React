import React, { Component, useState } from "react";
import Chart from "chart.js";

class Charty extends Component {
  constructor(props) {
    super(props);
  }
  chartRef = React.createRef();

  componentDidUpdate() {
    console.log("props", this.props.names);
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: this.props.names,
        datasets: [
          {
            label: "Searches",
            data: this.props.searches,
            borderColor: "#922893",
            backgroundColor: "#9228934c"
          }
        ]
      },
      options: {}
    });
  }
  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default Charty;
