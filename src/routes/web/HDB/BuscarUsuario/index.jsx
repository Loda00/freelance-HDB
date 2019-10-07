import React, { Component } from 'react'
import { Grid, Form, Button, Icon } from 'semantic-ui-react'


class Main extends Component {
  componentDidMount() {
    console.log('BODDYYY')
  }

  render() {
    return (
      <div className="main-content">
        <h1>Buscar trabajador</h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <Form className="margin-top-bot main-form" size="small">
                <Form.Group inline>
                  <Form.Input
                    loading
                    placeholder="Search..."
                  />
                  <Button color="facebook">
                    <Icon name="search" />
                    Buscar
                  </Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export default Main
