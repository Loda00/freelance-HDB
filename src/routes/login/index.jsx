import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { Grid, Header, Form, Segment, Button, Message, Card } from 'semantic-ui-react'
// import logo from '../../image/logo.jpg'

class Login extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    user: null,
    // eslint-disable-next-line react/no-unused-state
    password: null,
  }

  componentDidMount() {
    console.log('Login')
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  handleLogin = () => {
    const { password, user } = this.state
    console.log('Ingreso  => ', user, password)
  }

  render() {
    const { test } = this.props
    console.log('testtest', test)
    return (
      <div
        className="img-fondo"
        style={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: '150px',
        }}
      >
        <div className="login-content">
          <div className="login-item section-1">
            <h3>
              Ingreso al Sistema
            </h3>
            <br />
            <p>
              Bienvenidos al Sistema de Registro de Datos Biográficos en linea.
              Ingrese usuario y contraseña para acceder al sistema.
            </p>
          </div>
          <div className="login-item section-2">
            <div className="login-content block-2">
              <Form.Input
                fluid
                icon="user"
                name="user"
                className="input-general"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                name="password"
                className="input-general"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              <a href="www.google.com.pe">
                ¿Olvidó su contraseña?
              </a>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              paddingBottom: '50px',
              width: '30%',
            }}
          >
            <div className="button-content">
              <Button primary onClick={this.handleLogin}>
                Ingresar
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test: state,
})

const Main = connect(mapStateToProps)(Login)

export default Main
