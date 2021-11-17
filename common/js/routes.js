'use strict';

import Charts  from 'containers/ChartsContainer';
import Users  from 'containers/UsersContainer';
import Pairs from 'containers/PairsContainer';

export default [
  {
    path: '/charts',
    exact: true,
    component: Charts
  },
  {
    path: '/pairs',
    exact: true,
    component: Pairs
  },
  {
    path: '/users',
    exact: true,
    component: Users
  }
];
