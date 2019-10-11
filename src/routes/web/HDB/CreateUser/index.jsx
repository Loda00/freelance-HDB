import React, { Component } from 'react'
import { Header, Segment, Dimmer, Loader, Grid, Form } from 'semantic-ui-react'
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
        <Header as="h2">Nuevo trabajador</Header>
        <Segment
          basic
        >
          <Dimmer active={false} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <Form className="margin-top-bot main-form" size="small">
                  <Form.Group inline>
                    <Form.Input
                      label="Nombres :"
                      loading
                      placeholder="Nombres"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Apellido paterno :"
                      loading
                      placeholder="Apellido paterno "
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Apellido materno :"
                      loading
                      placeholder="Apellido materno"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="DNI :"
                      loading
                      placeholder="DNI"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Nacimiento :"
                      loading
                      placeholder="Nacimiento"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Cargo :"
                      loading
                      placeholder="Cargo"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="DNI :"
                      loading
                      placeholder="DNI"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Fecha Nacimiento :"
                      loading
                      placeholder="Fecha Nacimiento"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Select
                      label="Estado Civil :"
                      loading
                      placeholder="Estado Civil"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Select
                      label="Género :"
                      loading
                      placeholder="Género"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input
                      label="Apodo :"
                      loading
                      placeholder="Apodo"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Select
                      label="Distrito :"
                      loading
                      placeholder="Distrito"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Select
                      label="Distrito :"
                      loading
                      placeholder="Distrito"
                      size="mini"
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Select
                      label="Académico :"
                      loading
                      placeholder="Académico"
                      size="mini"
                    />
                  </Form.Group>

                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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
})

const Main = connect(mapStateToProps, mapDispatchToProps)(CreateUser)
export default Main
