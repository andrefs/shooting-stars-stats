import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Container} from 'reactstrap';
import {fetchUsers} from 'actions/users';
import Users from '../components/Users';

class UsersContainer extends Component {

  componentDidMount() {
    const {users} = this.props;

    if (!users || !users.isFetched) {
      this.props.fetchUsers();
    }
  }



  render() {
    const {users} = this.props;

    console.log('XXXXXXXXXXXXXXX container users', users);

    // users are loading
    if(!users || users.isFetching){
      return <Container />;
    }

    if(!users.isFetched){
      return <Container />;
    }


    console.log('XXXXXXXXXXXXXXX 5');
    return (
      <Users users={users}/>
    );
  }
}


const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUsers
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
