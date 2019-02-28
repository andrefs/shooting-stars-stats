import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col, Badge, Table} from 'reactstrap';
import TitleBar from './TitleBar';
import FlashContainer from '../containers/FlashContainer';
import css from './Users.scss';
import classnames from 'classnames';

class Users extends Component {

  render(){
    const {users} = this.props;

    return (
      <Container>
        <Helmet>
          <title>Charts</title>
        </Helmet>

        <TitleBar title="Users" />
        <FlashContainer />

        <Table striped>
          <thead>
            <tr>
              <th>Username</th>
              <th>Score</th>
              <th>Played games</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((u, i) => {
            return (
              <tr key={i}>
                <td>{u.username}</td>
                <td>{u.totalScore}</td>
                <td>{u.totalGamesPlayed || 0}</td>
              </tr>
            );})}
          </tbody>
        </Table>


      </Container>
    );
  }
}

export default Users;
