import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Home from './home'
import NotFound from '../404'

class Main extends Component {
  state= {
    state1: true,
  }

  componentDidMount() {
    console.log('SIBDERR')
  }

  render() {
    const { state1 } = this.state

    return (
      <React.Fragment>
        <div
          className="sidebar-menu"
          // style={{
          //   transform: 'translateX(-200px)',
          //   transform: setTimeout(() => {
          //     console.log('entreee 1seg')
          //     return 'translateX(0px)'
          //   }, 1000),
          // }}
        >
          { state1
          && (
            <div
              className="sidebar-sub-menu"
            >
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/products"
                >
                  Products
                </NavLink>
              </div>

              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/personales"
                >
                  Personal
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/ensembles"
                >
                  Emsembles
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Services
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <Switch>
          <Route
            exact
            path="/HDB/"
            render={() => (
              <Redirect
                to={{
                  pathname: '/HDB/products',
                }}
              />
            )}
          />
          <Route path="/HDB/services" component={Home} />
          <Route path="/HDB/ensembles" component={Home} />
          <Route path="/HDB/personales" component={Home} />
          <Route path="/HDB/products" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(Main)
