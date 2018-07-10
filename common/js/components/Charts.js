import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import css from './Charts.scss';
import classnames from 'classnames';

class Charts extends Component {

  render(){

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <Row>
          <Col lg="6">
              <h4 className="text-center">Cumulative games played by number of players</h4>
              <div className="chart players-gamesPlayed">
                  <canvas></canvas>
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Cumulative pairs by number of times played</h4>
              <div className="chart pairs-timesPlayed">
                  <canvas></canvas>
              </div>
          </Col>
          <Col lg="6">
              <h4 className="text-center">Registered players over time</h4>
              <div className="chart registeredPlayers-time">
                  <canvas></canvas>
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Charts;
