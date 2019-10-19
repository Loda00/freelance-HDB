import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { Grid, Form, Button, Icon, Header, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { list as getUsers } from 'actions/user/list'


class SearchUser extends Component {
  state = {
    users: null,
  }

  componentDidMount() {
    const { getListUsers } = this.props
    getListUsers()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!isEmpty(nextProps.listUsers) && nextProps.listUsers !== prevState.listUsers) {
      return {
        users: nextProps.listUsers,
      }
    }

    return null
  }

  render() {
    const { users } = this.state
    const { loadingListUser } = this.props

    const columns = [
      {
        title: 'DNI',
        dataIndex: 'dni',
        render: text => <span>{text}</span>,
      },
      {
        title: 'Nombres',
        dataIndex: 'nombres',
      },
      {
        title: 'Apellidos',
        dataIndex: 'apellidos',
      },
    ];

    let data = []

    if (!isEmpty(users)) {
      data = users.map(user => ({
        dni: user.Dni,
        nombres: user.nombres,
        apellidos: `${user.apellidoPaterno} ${user.apellidoMaterno}`,
      }))
    }

    console.log('users', users)

    return (
      <div className="main-content">
        <Header as="h2">Buscar trabajador</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Form size="small">
                <Form.Group inline>
                  <Form.Input
                    loading
                    placeholder="Search..."
                    size="mini"
                  />
                  <Button
                    color="facebook"
                    size="mini"
                    loading
                  >
                    <Icon name="search" />
                    Buscar
                  </Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <Segment
          basic
        >
          <Dimmer active={loadingListUser} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              defaultPageSize: 5,
            }}
          />
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getListUsers: () => dispatch(getUsers()),
})

const mapStateToProps = state => ({
  listUsers: state.user.list.data,
  loadingListUser: state.user.list.loading,
})

const Main = connect(mapStateToProps, mapDispatchToProps)(SearchUser)

export default Main
