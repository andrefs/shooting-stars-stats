import {
  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
} from '../constants';
import {getUsers} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchUsersRequest = generateActionCreator(FETCH_USERS_REQUEST);
export const fetchUsersSuccess = generateActionCreator(FETCH_USERS_SUCCESS, 'users');
export const fetchUsersFailure = generateActionCreator(FETCH_USERS_FAILURE, 'error');

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await getUsers();
      const users = await response.json();

      dispatch(fetchUsersSuccess(users));
    } catch (e) {
      dispatch(fetchUsersFailure(e));
    }
  };
};

