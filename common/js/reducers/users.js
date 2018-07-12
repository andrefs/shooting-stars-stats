import {
  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.users,
        isFetching: false,
        isFetched: true,
        fetchFailed: false
      };

    case FETCH_USERS_FAILURE:
      return {
        isFetching: false,
        isFetched: false,
        fetchFailed: true,
        error: action.error
      };

    default:
      return state;
  }
};

export default users;
