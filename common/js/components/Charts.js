import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import {Doughnut, Scatter, Bar} from 'react-chartjs-2';
import TitleBar from './TitleBar';
import FlashContainer from '../containers/FlashContainer';
import css from './Charts.scss';
import classnames from 'classnames';

class Charts extends Component {

  render(){
    const {stats} = this.props;

    const data1 = {
      labels: ['Scatter'],
      datasets: [
        {
          label: 'Players',
          backgroundColor: '#4F81BD',
          yAxisID: 'y-axis-0',
          fill: false,

          data: stats.cumulativeGames.map(x => ({x: x.numGames, y: x.totalPlayers}))
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
            labelString: 'Games played'
          }
        }]
      }
    };

    // const data2 = {
    //   datasets: [{
    //     label: 'Pairs',
    //     data: [
    //       {x: 1, y:100},
    //       {x: 2, y:70},
    //       {x: 3, y:50},
    //       {x: 4, y:35},
    //       {x: 5, y:25},
    //       {x: 6, y:18},
    //       {x: 7, y:14},
    //       {x: 8, y:11},
    //       {x: 9, y:9},
    //       {x:10, y:8},
    //       {x:11, y:7},
    //       {x:12, y:6},
    //       {x:13, y:6},
    //     ],
    //     backgroundColor: '#4F81BD',
    //     yAxisID: 'y-axis-0',
    //     fill: false
    //   }]
    // };

    // const options2 = {
    //   scales: {
    //     yAxes: [{
    //       position: 'left',
    //       'id': 'y-axis-0',
    //       ticks: {
    //         beginAtZero:true
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Pairs'
    //       }
    //     }],
    //     xAxes: [{
    //       'id': 'x-axis-0',
    //       ticks: {
    //         beginAtZero:true
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Times played'
    //       }
    //     }]
    //   }
    // };

    const data3 = {
      datasets: [{
        label: 'Registered players',
        data: stats.newUsersByMonth.map(x => ({
          x: new Date(x.year+'-'+x.month), y: x.total
        })),
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

    const data4 = {
      datasets: [{
        label: 'Games played',
        data: stats.gamesByMonth.map(x => ({
          x: new Date(x.year+'-'+x.month), y: x.total
        })),
        backgroundColor: '#4F81BD',
        yAxisID: 'y-axis-0',
        fill: false
      }]
    };

    const options4 = {
      scales: {
        yAxes: [{
          position: 'left',
          'id': 'y-axis-0',
          ticks: {
            beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Games played'
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


    const labels = [];
    const values = [];

    stats.playersByGender.forEach(x => {
      labels.push(x.gender);
      values.push(x.totalPlayers);
    });
    const data5 = {
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

    const options5 = {};

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <TitleBar title="Charts" />
        <FlashContainer />

        <Row>
          <Col lg="6">
              <h4 className="text-center">Total players by number of games played</h4>
              <div className="chart players-gamesPlayed">
                  <Scatter data={data1} options={options1} />
              </div>
          </Col>
          {/*<Col lg="6">
              <h4 className="text-center">Cumulative pairs by number of times played</h4>
              <div className="chart pairs-timesPlayed">
                  <Scatter data={data2} options={options2} />
              </div>
          </Col>
          */}
          <Col lg="6">
              <h4 className="text-center">Registered players over time</h4>
              <div className="chart registeredPlayers-time">
                  <Bar data={data3} options={options3} />
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Games played over time</h4>
              <div className="chart registeredPlayers-time">
                  <Bar data={data4} options={options4} />
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Players gender</h4>
              <div className="chart player-gender">
                  <Doughnut data={data5} options={options5} />
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Charts;
