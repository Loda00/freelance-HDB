import React from 'react'
import { withRouter } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react'

const SidebarMenu = ({ children }) => (
  <div className="body">
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
