import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history'; // eslint-disable-line
// import { syncHistoryWithStore } from 'react-router-redux';
// import configureStore from '../store/store';

import Login from './login';
import Web from './web/index';

// const store = configureStore();

// const history = syncHistoryWithStore(createBrowserHistory(), store);

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Web} />
    </Switch>
  </Router>
);

export default Routes;
