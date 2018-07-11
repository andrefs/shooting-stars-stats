import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Container} from 'reactstrap';
import {fetchStats} from 'actions/stats';
import Charts from '../components/Charts';

class ChartsContainer extends Component {

  componentDidMount() {
    const {stats} = this.props;

    if (!stats || !stats.isFetched) {
      this.props.fetchStats();
    }
  }



  render() {
    const {stats} = this.props;

    // stats are loading
    if(!stats || stats.isFetching){
      return <Container />;
    }

    if(!stats.isFetched){
      return <Container />;
    }

    return (
      <Charts stats={stats}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchStats
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
