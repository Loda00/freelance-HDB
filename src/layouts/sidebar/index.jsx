import React from 'react'
import { withRouter } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'

const SidebarMenu = ({ children }) => (
  <div className="body">
    {/* <div
      className="sidebar-menu"
      style={{
        // display: location.pathname === '/index' ? 'none' : 'block',
        transform: location.pathname !== '/HDB' ? 'translateX(-200px)' : 'translateX(0px)',
        display: 'none',
      }}
    >
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
    </div> */}
    <div
      className="sidebar-view"
    >
      <div className="sidebar-view-content">
        {children}
      </div>
    </div>
  </div>
)

export default withRouter(SidebarMenu)
