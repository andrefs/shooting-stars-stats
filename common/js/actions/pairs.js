import {
  FETCH_PAIRS_REQUEST, FETCH_PAIRS_SUCCESS, FETCH_PAIRS_FAILURE,
} from '../constants';
import {getOrderedPairs} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchPairsRequest = generateActionCreator(FETCH_PAIRS_REQUEST);
export const fetchPairsSuccess = generateActionCreator(FETCH_PAIRS_SUCCESS, 'pairs');
export const fetchPairsFailure = generateActionCreator(FETCH_PAIRS_FAILURE, 'error');

export const fetchPairs = () => {
  return async (dispatch) => {
    dispatch(fetchPairsRequest());
    try {
      const response = await getOrderedPairs();
      const json = await response.json();
      const pairs = json.docs;

      dispatch(fetchPairsSuccess(pairs));
    } catch (e) {
      dispatch(fetchPairsFailure(e));
    }
  };
};

