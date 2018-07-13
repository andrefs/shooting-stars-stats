import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {Scatter} from 'react-chartjs-2';
import classnames from 'classnames';

class ScatterChart extends Component {

  render(){
    const {values, xlabel, ylabel, chartClass, title} = this.props;

    const data = {
      labels: ['Scatter'],
      datasets: [
        {
          label: ylabel,
          backgroundColor: '#4F81BD',
          yAxisID: 'y-axis-0',
          fill: false,
          data: values
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          scaleLabel: {
            display: true,
            labelString: ylabel
          },
          ticks: {
            beginAtZero:true
          },
        }],
        xAxes: [{
          'id': 'x-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: xlabel
          }
        }]
      }
    };

    return (
      <Col lg="6">
          <h4 className="text-center">{title}</h4>
          <div className={'chart', chartClass} >
              <Scatter data={data} options={options} />
          </div>
      </Col>
    );
  }
}

export default ScatterChart;
