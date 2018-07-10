import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE,
  POST_PICK_REQUEST, POST_PICK_SUCCESS, POST_PICK_FAILURE,
  CREATE_GAME_REQUEST, CREATE_GAME_SUCCESS, CREATE_GAME_FAILURE,
  START_GAME, END_GAME
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  hasStarted: false,
  error: null
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GAME_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        ...action.game,
        isFetching: false,
        isFetched: true,
        fetchFailed: false,
        hasStarted: true
      };

    case FETCH_GAME_FAILURE:
      return {
        isFetching: false,
        isFetched: false,
        fetchFailed: true,
        error: action.error
      };

    case POST_PICK_SUCCESS:
      return {
        ...state,
        ...action.game,
        isFetching: false,
        isFetched: true,
        fetchFailed: false,
      };

    case CREATE_GAME_SUCCESS:
      return {
        ...state,
        ...action.game,
        isFetching: false,
        isFetched: true,
        fetchFailed: false,
        hasStarted: false,
        hasFinished: false
      };

    case CREATE_GAME_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        createFailed: true,
        error: action.error
      };


    case START_GAME:
      return {
        ...state,
        hasStarted: true,
        hasEnded: false
      };

    case END_GAME:
      return {
        ...state,
        hasEnded: true,
        hasStarted: false
      };

    default:
      return state;
  }
};

export default game;
