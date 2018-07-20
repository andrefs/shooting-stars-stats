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

    let values1, values2, values3, values4;
    if(stats.cumulativeGames){
      values1 =  stats.cumulativeGames.map(x => ({x: x.numGames, y: x.totalPlayers}));
    }

    if(stats.newUsersByMonth){
      values3 = stats.newUsersByMonth.map(x => ({
        x: x.year+'-'+x.month, y: x.total
      }));
    }

    if(stats.gamesByMonth){
      values4 = stats.gamesByMonth.map(x => ({
        x: x.year+'-'+x.month, y: x.gamesPerActiveUser
      }));
    }

    let labels = [];
    let values = [];
    if(stats.playersByGender){
      labels = [];
      values = [];
      stats.playersByGender.forEach(x => {
        labels.push(x.gender);
        values.push(x.totalPlayers);
      });
    }

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <TitleBar title="Charts" />
        <FlashContainer />

        <Row>
          {values1 ?
            <ScatterChart
              values={values1}
              chartClass="players-gamesPlayed"
              ylabel="Players"
              xlabel="Games played"
              title="Total players by number of games played"
            />
            : null
          }
          {/*<Col lg="6">
              <h4 className="text-center">Cumulative pairs by number of times played</h4>
              <div className="chart pairs-timesPlayed">
                  <Scatter data={data2} options={options2} />
              </div>
          </Col>
          */}
          {values3 ?
            <BarChart
              values={values3}
              chartClass="registeredPlayers-time"
              ylabel="Registered players"
              title="Registered players over time"
            />
            : null
          }
          {values4 ?
            <BarChart
              values={values4}
              chartClass="gamesPlayed-time"
              ylabel="Average games played"
              title="Average games played over time"
            />
            : null
          }
          {values ?
            <DoughnutChart
              values={values}
              labels={labels}
              chartClass="player-gender"
              xlabel="Players gender"
              title="Players gender"
            />
            : null
          }
        </Row>
      </Container>
    );
  }
}

export default Charts;
