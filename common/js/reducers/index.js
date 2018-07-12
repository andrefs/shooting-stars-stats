import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import stats from './stats';
import users from './users';

const rootReducer = combineReducers({
  routing: routerReducer,
  stats,
  users
});

export default rootReducer;
