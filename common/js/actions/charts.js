import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE,
  POST_PICK_REQUEST, POST_PICK_SUCCESS, POST_PICK_FAILURE,
  CREATE_GAME_REQUEST, CREATE_GAME_SUCCESS, CREATE_GAME_FAILURE,
  START_GAME, END_GAME
} from '../constants';
import {getGameInstance, postPlayerPick, createNewGame} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';
import {clearBestScores} from './bestScores';

export const createGameRequest = generateActionCreator(CREATE_GAME_REQUEST);
export const createGameSuccess = generateActionCreator(CREATE_GAME_SUCCESS, 'game');
export const createGameFailure = generateActionCreator(CREATE_GAME_FAILURE, 'error');

export const fetchGameRequest = generateActionCreator(FETCH_GAME_REQUEST);
export const fetchGameSuccess = generateActionCreator(FETCH_GAME_SUCCESS, 'game');
export const fetchGameFailure = generateActionCreator(FETCH_GAME_FAILURE, 'error');

export const postPickRequest = generateActionCreator(POST_PICK_REQUEST, 'pick');
export const postPickSuccess = generateActionCreator(POST_PICK_SUCCESS, 'game');
export const postPickFailure = generateActionCreator(POST_PICK_FAILURE, 'error');

export const startGame = generateActionCreator(START_GAME);

export const createGame = () => {
  return async (dispatch) => {
    dispatch(createGameRequest());
    try {
      const response = await createNewGame();
      const game = await response.json();

      if (response.status < 200 || response.status >= 300) {
        throw game;
      }

      dispatch(createGameSuccess(game));
      dispatch(clearBestScores());
    } catch (e) {
      dispatch(createGameFailure(e));
    }
  };
};

export const fetchGame = () => {
  return async (dispatch) => {
    dispatch(fetchGameRequest());
    try {
      const response = await getGameInstance();
      const game = await response.json();

      dispatch(fetchGameSuccess(game));
    } catch (e) {
      dispatch(fetchGameFailure(e));
    }
  };
};

export const postPick = pick => {
  return async (dispatch) => {

    dispatch(postPickRequest(pick));
    try {
      const response = await postPlayerPick(pick);
      const game = await response.json();

      if(response.status < 200 || response.status >= 300){
        throw game;
      }

      dispatch(postPickSuccess(game));
    } catch (e) {
      dispatch(postPickFailure(e));
    }
  };
};
