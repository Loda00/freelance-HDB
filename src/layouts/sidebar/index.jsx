import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'

const SidebarMenu = ({ children }) => (
  <div className="main-view">
    <div
      className="sidebar-menu"
    // style={{
    //   display: location.pathname === '/index' ? 'none' : 'block',
    // }}
    >
      {/* <Menu.Item> */}
      {/* <Menu.Header className="nav-item">Products</Menu.Header> */}
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/personales"
          className="item nav-item"
        >
          <p>Main</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/lugar"
          className="item nav-item"
        >
          <p>Lugar</p>
        </NavLink>
      </div>
      {/* </Menu.Item> */}

      {/* <Menu.Item> */}
      {/* <Menu.Header className="nav-item">CMS Solutions</Menu.Header> */}
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/tipo"
          className="item nav-item"
        >
          <p>Tipo</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      {/* </Menu.Item>

    <Menu.Item> */}
      {/* <Menu.Header className="nav-item">Hosting</Menu.Header> */}
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      {/* </Menu.Item>

    <Menu.Item> */}
      {/* <Menu.Header className="nav-item">Support</Menu.Header> */}
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
      <div
        className="sidebar-menu-item"
      >
        <NavLink
          to="/hours"
          className="item nav-item"
        >
          <p>Hours</p>
        </NavLink>
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
      // className="container-view"
    >
      {children}
    </div>
  </div>
)

export default withRouter(SidebarMenu)
