import React, { Component } from 'react'

import { HeaderMain } from '../../layouts/index'

class Web extends Component {
  componentDidMount() {
    console.log('Webbb')
  }

  render() {
    return (
      <div>
        <HeaderMain />
        <h1>BODY</h1>
      </div>
    )
  }
}

export default Web
