import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import {Scatter, Bar} from 'react-chartjs-2';
import css from './Charts.scss';
import classnames from 'classnames';

class Charts extends Component {

  render(){
    const data1 = {
      labels: ['Scatter'],
      datasets: [
        {
          label: 'Players',
          backgroundColor: '#4F81BD',
          yAxisID: 'y-axis-0',
          fill: false,

          data: [
            {x: 1, y: 20},
            {x: 2, y: 15},
            {x: 3, y: 12},
            {x: 4, y:  9},
            {x: 5, y:  7},
            {x: 6, y:  5},
            {x: 7, y:  3},
            {x: 8, y:  1}
          ]
        }
      ]
    };

    const options1 = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          scaleLabel: {
            display: true,
            labelString: 'Players'
          }
        }],
        xAxes: [{
          'id': 'x-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Games played'
          }
        }]
      }
    };

    const data2 = {
      datasets: [{
        label: 'Pairs',
        data: [
          {x: 1, y:100},
          {x: 2, y:70},
          {x: 3, y:50},
          {x: 4, y:35},
          {x: 5, y:25},
          {x: 6, y:18},
          {x: 7, y:14},
          {x: 8, y:11},
          {x: 9, y:9},
          {x:10, y:8},
          {x:11, y:7},
          {x:12, y:6},
          {x:13, y:6},
        ],
        backgroundColor: '#4F81BD',
        yAxisID: 'y-axis-0',
        fill: false
      }]
    };

    const options2 = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Pairs'
          }
        }],
        xAxes: [{
          'id': 'x-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Times played'
          }
        }]
      }
    };

    const data3 = {
      datasets: [{
        label: 'Registered players',
        data: [
          {x: new Date('2017-06-01'), y:7},
          {x: new Date('2017-07-01'), y:5},
          {x: new Date('2017-08-01'), y:9},
          {x: new Date('2017-09-01'), y:2},
        ],
        backgroundColor: '#4F81BD',
        yAxisID: 'y-axis-0',
        fill: false
      }]
    };

    const options3 = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Registered players'
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'month'
          },
        }]
      }
    };

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <Row>
          <Col lg="6">
              <h4 className="text-center">Cumulative games played by number of players</h4>
              <div className="chart players-gamesPlayed">
                  <Scatter data={data1} options={options1} />
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Cumulative pairs by number of times played</h4>
              <div className="chart pairs-timesPlayed">
                  <Scatter data={data2} options={options2} />
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Registered players over time</h4>
              <div className="chart registeredPlayers-time">
                  <Bar data={data3} options={options3} />
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Charts;
