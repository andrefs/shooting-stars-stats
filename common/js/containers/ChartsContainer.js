import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Charts from '../components/Charts';

class ChartsContainer extends Component {
  render() {
    return (
      <Charts />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
