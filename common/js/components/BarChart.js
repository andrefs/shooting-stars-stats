import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Col} from 'reactstrap';
import {Bar} from 'react-chartjs-2';
import css from './Charts.scss';
import classnames from 'classnames';

class BarChart extends Component {

  render(){
    const {values, xlabel, ylabel, chartClass, title} = this.props;


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
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: ylabel
          }
        }],
        xAxes: [{
          offset: true,
          type: 'time',
          time: {
            unit: 'month'
          },
          ticks: {
            source: 'data'
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
