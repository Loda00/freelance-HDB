import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import Home from './Home'
import BuscarUsuario from './BuscarUsuario'
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
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/buscar-usuario"
                >
                  <Icon name="search" size="small" />
                  Buscar usuario
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/nuevo-usuario"
                >
                  <Icon name="user plus" size="small" />
                  Nuevo usuario
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/datos-personales"
                >
                  <Icon name="user" size="small" />
                  Datos personales
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/nacimiento"
                >
                  <Icon name="bell" size="small" />
                  Fecha de nacimiento
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/caracteristicas-fisicas"
                >
                  <Icon name="child" size="small" />
                  Caracteristicas físicas
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/domicilio"
                >
                  <Icon name="home" size="small" />
                  Domicilio
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/educacion"
                >
                  <Icon name="university" size="small" />
                  Educación
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/cursos"
                >
                  <Icon name="book" size="small" />
                  Otros cursos
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/viajes"
                >
                  <Icon name="plane" size="small" />
                  Viajes
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/idiomas"
                >
                  <Icon name="language" size="small" />
                  Idiomas
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/empleos-militares"
                >
                  <Icon name="briefcase" size="small" />
                  Empleos militares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/empleos-civiles"
                >
                  <Icon name="briefcase" size="small" />
                  Empleos civiles
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/posesiones"
                >
                  <Icon name="clipboard list" size="small" />
                  Posesiones
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/posesiones-poseido"
                >
                  <Icon name="crosshairs" size="small" />
                  Armamento poseido
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/posesiones-conocido"
                >
                  <Icon name="crosshairs" size="small" />
                  Armamento conocido
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/posesiones-conocido"
                >
                  <Icon name="crosshairs" size="small" />
                  Armamento conocido
                </NavLink>
              </div>

              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/ensembles"
                >
                  <Icon name="folder" size="small" />
                  Antecedentes militares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  <Icon name="users" size="small" />
                  Datos familiares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Datos laborales
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Datos familiares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Datos familiares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Datos familiares
                </NavLink>
              </div>
              <div className="sidebar-menu-item">
                <NavLink
                  to="/HDB/services"
                >
                  Datos familiares
                </NavLink>
              </div>
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
                  pathname: '/HDB/products',
                }}
              />
            )}
          />
          <Route path="/HDB/buscar-usuario" component={BuscarUsuario} />
          <Route path="/HDB/datos-personales" component={Home} />
          <Route path="/HDB/nuevo-usuario" component={Home} />
          <Route path="/HDB/nacimiento" component={Home} />
          <Route path="/HDB/caracteristicas-fisicas" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(Main)
