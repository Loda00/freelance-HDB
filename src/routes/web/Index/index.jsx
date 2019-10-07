import React, { Component } from 'react'
import { test1, test2 } from 'action/test/index'

class Lugar extends Component {
  componentDidMount() {
    test1()
    test2()
    console.log('Webbb')
  }

  render() {
    return (
      <div
        className="content-index"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <pre>
          <h1 className="test">BIENVENIDOS</h1>
          <div>SISTEMA DE REGISTRO</div>
          <div>DE DATOS BIOGRÁFICOS DE LIMA</div>
        </pre>
      </div>
    )
  }
}

export default Lugar
