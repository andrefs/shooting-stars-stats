import {
  FETCH_STATS_REQUEST, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE,
} from '../constants';
import {getStats} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchStatsRequest = generateActionCreator(FETCH_STATS_REQUEST);
export const fetchStatsSuccess = generateActionCreator(FETCH_STATS_SUCCESS, 'stats');
export const fetchStatsFailure = generateActionCreator(FETCH_STATS_FAILURE, 'error');

export const fetchStats = () => {
  return async (dispatch) => {
    dispatch(fetchStatsRequest());
    try {
      const response = await getStats();
      const stats = await response.json();

      dispatch(fetchStatsSuccess(stats));
    } catch (e) {
      dispatch(fetchStatsFailure(e));
    }
  };
};

