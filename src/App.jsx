import React from 'react'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import Routes from './routes/index'

import './App.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
