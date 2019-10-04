import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { ToastContainer } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import { Toast } from '../../../components'
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  state = {
    user: '',
    errorUser: false,
    password: '',
    errorPassword: false,
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
    const { history } = this.props

    this.setState({
      errorPassword: false,
      errorUser: false,
    })

    let isValid = true

    if (user === '') {
      isValid = false
      this.setState({
        errorUser: true,
      })
    }

    if (password === '') {
      isValid = false
      this.setState({
        errorPassword: true,
      })
    }

    if (!isValid) {
      Toast.error('Contraseña o usuario incorrecto')
      return
    }

    const obj = {
      user,
      password,
    }

    history.push('/index')
    // if (obj) {
    //   Toast.success('Contraseña o usuario incorrecto')
    // }
    console.log('Ingreso  => ', obj)
  }

  render() {
    const { errorPassword, errorUser } = this.state

    return (
      <Fragment>
        <div
          className="img-fondo"
          style={{
            display: 'flex',
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
                <Form>
                  <Form.Input
                    fluid
                    icon="user"
                    name="user"
                    className="input-general"
                    iconPosition="left"
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                    error={errorUser}
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
                    error={errorPassword}
                  />
                </Form>
                <div>
                  <a href="www.google.com.pe">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
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
          <ToastContainer
            position="bottom-right"
            hideProgressBar
            draggable={false}
            toastClassName="custom-toast-container"
            bodyClassName="custom-toast-body"
          />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  test: state,
})

const Main = connect(mapStateToProps)(Login)

export default withRouter(Main)
