import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

  render(){
    const {values, ylabel, chartClass, title, stepSize, labels} = this.props;


    const data = {
      datasets: [{
        label: ylabel,
        data: values,
        backgroundColor: '#4F81BD',
        yAxisID: 'y-axis-0',
        fill: false
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          ticks: {
            beginAtZero:true,
            stepSize: stepSize,
          },
          scaleLabel: {
            display: true,
            labelString: ylabel
          }
        }],
        xAxes: [{
          offset: true,
          type: 'category',
          labels: labels,
          ticks: {
            source: 'data',
          }
        }]
      }
    };


    return (
      <Col lg="6">
        <h4 className="text-center">{title}</h4>
        <div className={'chart', chartClass} >
          <Bar data={data} options={options} />
        </div>
      </Col>
    );
  }
}

export default BarChart;
