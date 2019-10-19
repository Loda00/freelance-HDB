import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HeaderMain } from 'layouts/index'
import HDB from './HDB'
import Index from './Index'
import NotFound from './404'

import 'react-toastify/dist/ReactToastify.css'

class Web extends Component {
  componentDidMount() {
    console.log('Webbb')
  }

  render() {
    return (
      <div>
        <HeaderMain>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect
                  to={{
                    pathname: '/index',
                  }}
                />
              )}
            />
            <Route path="/index" component={Index} />
            <Route path="/HDB" component={HDB} />
            <Route component={NotFound} />
          </Switch>
        </HeaderMain>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          draggable={false}
          toastClassName="custom-toast-container"
          bodyClassName="custom-toast-body"
        />
      </div>
    )
  }
}

export default Web
