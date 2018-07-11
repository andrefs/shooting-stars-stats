import {
  FETCH_STATS_REQUEST, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE,
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null
};

const stats = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_STATS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_STATS_SUCCESS:
      return {
        ...state,
        ...action.stats,
        isFetching: false,
        isFetched: true,
        fetchFailed: false
      };

    case FETCH_STATS_FAILURE:
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

export default stats;
