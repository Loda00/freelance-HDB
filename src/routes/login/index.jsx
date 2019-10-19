import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch } from 'react-router-dom';
import Login from './login'
// eslint-disable-next-line no-unused-vars
// import logo from '../../image/logo.jpg'

const Route = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
)

const mapStateToProps = state => ({
  test: state,
})

const Main = connect(mapStateToProps)(Login)

export default Main
