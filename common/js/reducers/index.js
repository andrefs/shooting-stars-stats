import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import stats from './stats';

const rootReducer = combineReducers({
  routing: routerReducer,
  stats
});

export default rootReducer;
