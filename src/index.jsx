import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store'

const store = configureStore()

console.log('11111111', store)

ReactDOM.render(
  React.createElement(App, {
    store,
  }),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
