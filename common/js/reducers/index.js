import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import stats from './stats';
import users from './users';
import pairs from './pairs';

const rootReducer = combineReducers({
  routing: routerReducer,
  stats,
  pairs,
  users
});

export default rootReducer;
