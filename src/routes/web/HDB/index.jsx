import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import Home from './Home'
import SearchUser from './SearchUser'
import CreateUser from './CreateUser'
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
          // user plus - users - paperclip - university
        >
          { state1
          && (
            <div
              className="sidebar-sub-menu"
            >
              <NavLink
                to="/HDB/buscar-usuario"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="search" size="small" />
                  Buscar usuario
                </div>
              </NavLink>
              <NavLink
                to="/HDB/nuevo-usuario"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="user plus" size="small" />
                  Nuevo usuario
                </div>
              </NavLink>
              <NavLink
                to="/HDB/datos-personales"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="user" size="small" />
                  Datos personales
                </div>
              </NavLink>
              <NavLink
                to="/HDB/nacimiento"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="bell" size="small" />
                  Fecha de nacimiento
                </div>
              </NavLink>
              <NavLink
                to="/HDB/caracteristicas-fisicas"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="child" size="small" />
                  Caracteristicas físicas
                </div>
              </NavLink>
              <NavLink
                to="/HDB/domicilio"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="home" size="small" />
                  Domicilio
                </div>
              </NavLink>
              <NavLink
                to="/HDB/educacion"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="university" size="small" />
                  Educación
                </div>
              </NavLink>
              <NavLink
                to="/HDB/cursos"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="book" size="small" />
                  Otros cursos
                </div>
              </NavLink>
              <NavLink
                to="/HDB/viajes"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="plane" size="small" />
                  Viajes
                </div>
              </NavLink>
              <NavLink
                to="/HDB/idiomas"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="language" size="small" />
                  Idiomas
                </div>
              </NavLink>
              <NavLink
                to="/HDB/empleos-militares"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="briefcase" size="small" />
                  Empleos militares
                </div>
              </NavLink>
              <NavLink
                to="/HDB/empleos-civiles"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="briefcase" size="small" />
                  Empleos civiles
                </div>
              </NavLink>
              <NavLink
                to="/HDB/armamento-poseido"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="crosshairs" size="small" />
                  Armamento poseido
                </div>
              </NavLink>
              <NavLink
                to="/HDB/armamento-conocido"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="crosshairs" size="small" />
                  Armamento conocido
                </div>
              </NavLink>
              <NavLink
                to="/HDB/conocidos-penales"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="qrcode" size="small" />
                  Conocidos en penales
                </div>
              </NavLink>
              <NavLink
                to="/HDB/amistades-publicas"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="users" size="small" />
                  Amistades públicas
                </div>
              </NavLink>
              <NavLink
                to="/HDB/antecedentes-policiales"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="folder outline" size="small" />
                  Antecedentes policiales
                </div>
              </NavLink>
              <NavLink
                to="/HDB/antecedentes-militares"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="folder outline" size="small" />
                  Antecedentes militares
                </div>
              </NavLink>
              <NavLink
                to="/HDB/antecedentes-políticos"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="folder outline" size="small" />
                  Antecedentes políticos
                </div>
              </NavLink>
              <NavLink
                to="/HDB/datos-familiares"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="address book" size="small" />
                  Datos familiares
                </div>
              </NavLink>
              <NavLink
                to="/HDB/datos-laborales"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="window restore" size="small" />
                  Datos laborales
                </div>
              </NavLink>
              <NavLink
                to="/HDB/referencias-generales"
                className="sidebar-sub-menu-item"
              >
                <div className="sidebar-sub-menu-title">
                  <Icon className="sub-menu-icon" name="info" size="small" />
                  Referencias generales
                </div>
              </NavLink>
            </div>
          )}
        </div>
        <Switch>
          <Route
            exact
            path="/HDB"
            render={() => (
              <Redirect
                to={{
                  pathname: '/HDB/buscar-usuario',
                }}
              />
            )}
          />
          <Route path="/HDB/buscar-usuario" component={SearchUser} />
          <Route path="/HDB/datos-personales" component={Home} />
          <Route path="/HDB/nuevo-usuario" component={CreateUser} />
          <Route path="/HDB/nacimiento" component={Home} />
          <Route path="/HDB/caracteristicas-fisicas" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(Main)
