import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Container} from 'reactstrap';
import {fetchPairs} from 'actions/pairs';
import Pairs from '../components/Pairs';

class PairsContainer extends Component {

  componentDidMount() {
    const {pairs} = this.props;

    if (!pairs || !pairs.isFetched) {
      this.props.fetchPairs();
    }
  }



  render() {
    const {pairs} = this.props;

    // pairs are loading
    if(!pairs || pairs.isFetching){
      return <Container />;
    }

    if(!pairs.isFetched){
      return <Container />;
    }

    return (
      <Pairs pairs={pairs}/>
    );
  }
}


const mapStateToProps = state => {
  return {
    pairs: state.pairs
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchPairs
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PairsContainer);
