import React, { Component } from 'react'

class Lugar extends Component {
  componentDidMount() {
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
