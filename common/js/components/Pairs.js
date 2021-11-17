import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Table} from 'reactstrap';
import TitleBar from './TitleBar';
import FlashContainer from '../containers/FlashContainer';
import process from 'process';

class Pairs extends Component {

  render(){
    const {pairs} = this.props;

    return (
      <Container>
        <Helmet>
          <title>Sorted pairs</title>
        </Helmet>

        <TitleBar title="Sorted pairs" />
        <FlashContainer />

        <Table striped>
          <thead>
            <tr>
              <th>Order</th>
              <th>Pair ID</th>
              <th>Item A</th>
              <th>Item B</th>
            </tr>
          </thead>
          <tbody>
            {pairs.data.map((p, i) => {
              return (
                <tr key={i}>
                  <td>{p.order}</td>
                  <td>{p.seqNum}</td>
                  <td>{p.itemA.name}</td>
                  <td>{p.itemB.name}</td>
                </tr>
              );})}
          </tbody>
        </Table>


      </Container>
    );
  }
}

export default Pairs;
