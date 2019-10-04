import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HeaderMain } from '../../layouts/index'
import Main from './Main'
import Lugar from './Lugar'
import Tipo from './Tipo'
import Index from './Index'

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
            <Route path="/index" component={Index} />
            <Route path="/personales" component={Main} />
            <Route path="/lugar" component={Lugar} />
            <Route path="/tipo" component={Tipo} />
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
