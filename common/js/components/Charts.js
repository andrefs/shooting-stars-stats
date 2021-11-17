import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row} from 'reactstrap';
import TitleBar from './TitleBar';

import FlashContainer from '../containers/FlashContainer';
import ScatterChart from './ScatterChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';

class Charts extends Component {

  render(){
    const {stats} = this.props;

    let playersByGender, cumulativeGames, newUsersByMonth, gamesByMonth, distCertaintySupport;
    if(stats.cumulativeGames){
      cumulativeGames =  stats.cumulativeGames.map(x => ({x: x.numGames, y: x.totalPlayers}));
    }

    if(stats.newUsersByMonth){
      newUsersByMonth = stats.newUsersByMonth.map(x => ({
        x: x.year+'-'+('0'+x.month).slice(-2), y: x.total
      }));
    }

    if(stats.gamesByMonth){
      gamesByMonth = stats.gamesByMonth.map(x => ({
        x: x.year+'-'+x.month, y: x.gamesPerActiveUser
      }));
    }

    let labels = [];
    if(stats.playersByGender){
      labels = [];
      playersByGender = [];
      stats.playersByGender.forEach(x => {
        labels.push(x.gender);
        playersByGender.push(x.totalPlayers);
      });
    }

    if(stats.distCertaintySupport){
      distCertaintySupport = stats.distCertaintySupport.map(x => ({
        x: x.certainty, y: x.support, r: x.total
      }));
    }

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <TitleBar title="Charts" />
        <FlashContainer />

        <Row>
          {cumulativeGames ?
            <ScatterChart
              values={cumulativeGames}
              chartClass="players-gamesPlayed"
              ylabel="Players"
              xlabel="Games played"
              title="Total players by number of games played"
              stepSize="10"
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
          {newUsersByMonth ?
            <BarChart
              values={newUsersByMonth}
              labels={newUsersByMonth.map(x => x.x).sort()}
              chartClass="registeredPlayers-time"
              ylabel="Registered players"
              title="Registered players over time"
              stepSize="100"
            />
            : null
          }
          {gamesByMonth ?
            <BarChart
              values={gamesByMonth}
              chartClass="gamesPlayed-time"
              labels={gamesByMonth.map(x => x.x).sort()}
              ylabel="Average games played"
              title="Average games by player"
            />
            : null
          }
          {playersByGender ?
            <DoughnutChart
              values={playersByGender}
              labels={labels}
              chartClass="player-gender"
              xlabel="Players gender"
              title="Players gender"
            />
            : null
          }
          {distCertaintySupport ?
            <BubbleChart
              values={distCertaintySupport}
              chartClass="dist-certainty-support"
              xlabel="Certainty"
              ylabel="Support"
              title="Certainty and Support"
            />
            : null
          }
        </Row>
      </Container>
    );
  }
}

export default Charts;
