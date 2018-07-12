'use strict';

import Charts  from 'containers/ChartsContainer';
import Users  from 'containers/UsersContainer';

export default [
  {
    path: '/charts',
    exact: true,
    component: Charts
  },
  {
    path: '/users',
    exact: true,
    component: Users
  }
];
