import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import {Bar} from 'react-chartjs-2';
import TitleBar from './TitleBar';

import FlashContainer from '../containers/FlashContainer';
import ScatterChart from './ScatterChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

import css from './Charts.scss';
import classnames from 'classnames';

class Charts extends Component {

  render(){
    const {stats} = this.props;

    const values1 =  stats.cumulativeGames.map(x => ({x: x.numGames, y: x.totalPlayers}));

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

    const values3 = stats.newUsersByMonth.map(x => ({
      x: new Date(x.year+'-'+x.month), y: x.total
    }));

    const values4 = stats.gamesByMonth.map(x => ({
      x: new Date(x.year+'-'+x.month), y: x.total
    }));


console.log('XXXXXXXXXXXXXXX values1', values1);
console.log('XXXXXXXXXXXXXXX values3', values3);

    const labels = [];
    const values = [];
    stats.playersByGender.forEach(x => {
      labels.push(x.gender);
      values.push(x.totalPlayers);
    });

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <TitleBar title="Charts" />
        <FlashContainer />

        <Row>
          <ScatterChart
            values={values1}
            chartClass="players-gamesPlayed"
            ylabel="Players"
            xlabel="Games played"
            title="Total players by number of games played"
          />
          {/*<Col lg="6">
              <h4 className="text-center">Cumulative pairs by number of times played</h4>
              <div className="chart pairs-timesPlayed">
                  <Scatter data={data2} options={options2} />
              </div>
          </Col>
          */}
          <BarChart
            values={values3}
            chartClass="registeredPlayers-time"
            ylabel="Registered players"
            title="Registered players over time"
          />
          <BarChart
            values={values4}
            chartClass="registeredPlayers-time"
            ylabel="Games played"
            title="Games played over time"
          />
          <DoughnutChart
            values={values}
            labels={labels}
            chartClass="player-gender"
            xlabel="Players gender"
            title="Players gender"
          />
        </Row>
      </Container>
    );
  }
}

export default Charts;
