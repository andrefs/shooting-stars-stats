import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import charts from './charts';

const rootReducer = combineReducers({
  routing: routerReducer,
  charts
});

export default rootReducer;
