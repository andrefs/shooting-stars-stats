import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Col} from 'reactstrap';
import {Doughnut} from 'react-chartjs-2';
import css from './Charts.scss';
import classnames from 'classnames';

class DoughnutChart extends Component {

  render(){
    const {values, labels, xlabel, ylabel, chartClass, title} = this.props;

    const data = {
      datasets: [{
        data: values,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }],
      labels
    };

    const options = {};

    return (
      <Col lg="6">
        <h4 className="text-center">{xlabel}</h4>
        <div className={'chart', chartClass} >
          <Doughnut data={data} options={options} />
        </div>
      </Col>
    );
  }
}

export default DoughnutChart;
