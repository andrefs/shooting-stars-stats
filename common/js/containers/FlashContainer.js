import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showFlash} from '../actions/flash';
import Flash from '../components/Flash';

class FlashContainer extends Component {
  render() {
    const {flash} = this.props;

    return (
      <Flash items={flash && flash.items} />
    );
  }
}

const mapStateToProps = state => {
  return {
    flash: state.flash
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showFlash,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer);
