import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { Header, Segment, Dimmer, Loader, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { list as listDistrito, reset as resetDistrito } from 'actions/distrito/list'
import { ZorroButton } from 'components/index'


class CreateUser extends Component {
  state = {
    listDistrito: null,
  }

  componentDidMount() {
    const { getDistrito } = this.props

    getDistrito()
  }

  componentWillUnmount() {
    const { reset } = this.props

    reset()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!isEmpty(nextProps.listDistrito) && nextProps.listDistrito !== prevState.listDistrito) {
      return {
        listDistrito: nextProps.listDistrito,
      }
    }
    return null
  }

  render() {
    const { listDistrito } = this.state
    console.log('listDistrito', listDistrito, this.props)
    return (
      <div className="main-content">
        {/* <Segment
          basic
        > */}
        {/* <Dimmer active={false} inverted>
          <Loader>Loading</Loader>
        </Dimmer> */}
        <div className="grid-create-user">
          <div>
            <Header as="h2">Nuevo trabajador</Header>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Nombres :"
                loading
                placeholder="Nombres"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Apellido paterno :"
                loading
                placeholder="Apellido paterno"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Apellido materno :"
                loading
                placeholder="Apellido materno"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="DNI :"
                loading
                placeholder="DNI"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Nacimiento :"
                loading
                placeholder="Nacimiento"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Cargo :"
                loading
                placeholder="Cargo"
                // size="mini"
              />
            </Form.Group>
          </div>
          {/* <div>
            <Form.Group>
              <Form.Input
                fluid
                label="DNI :"
                loading
                placeholder="DNI"
                // size="mini"
              />
            </Form.Group>
          </div> */}
          {/* <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Nacimiento :"
                loading
                placeholder="Fecha Nacimiento"
                // size="mini"
              />
            </Form.Group>
          </div> */}
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Estado Civil :"
                loading
                placeholder="Estado Civil"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Género :"
                loading
                placeholder="Género"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Apodo :"
                loading
                placeholder="Apodo"
                // size="mini"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Distrito :"
                loading
                placeholder="Distrito"
                // size="mini"
              />
            </Form.Group>
          </div>
          {/* <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Distrito :"
                loading
                placeholder="Distrito"
                // size="mini"
              />
            </Form.Group>
          </div> */}
          <div>
            <Form.Group>
              <Form.Input
                fluid
                label="Académico :"
                loading
                placeholder="Académico"
                // size="mini"
              />
            </Form.Group>
          </div>
        </div>
        {/* </Segment> */}
        <ZorroButton
          icon="plus"
        >
          Agregar
        </ZorroButton>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getDistrito: () => dispatch(listDistrito()),
  reset: () => {
    dispatch(resetDistrito())
  },
})

const mapStateToProps = state => ({
  listDistrito: state.distrito.list.data,
  loadingListDistrito: state.distrito.list.loading,
})

const Main = connect(mapStateToProps, mapDispatchToProps)(CreateUser)
export default Main
