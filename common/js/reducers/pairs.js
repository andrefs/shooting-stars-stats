import {
  FETCH_PAIRS_REQUEST, FETCH_PAIRS_SUCCESS, FETCH_PAIRS_FAILURE,
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null
};

const pairs = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PAIRS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_PAIRS_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.pairs,
        isFetching: false,
        isFetched: true,
        fetchFailed: false
      };

    case FETCH_PAIRS_FAILURE:
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

export default pairs;
