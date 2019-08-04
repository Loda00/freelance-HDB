import React from 'react'
import { Provider } from 'react-redux'
import Routes from './routes/index'

import './App.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default Root;
