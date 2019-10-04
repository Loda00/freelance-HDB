import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../header'
import Sidebar from '../sidebar'

const HeaderMain = ({ children }) => (
  <div>
    <Header />
    <Sidebar>{children}</Sidebar>
  </div>
)

export default withRouter(HeaderMain)
