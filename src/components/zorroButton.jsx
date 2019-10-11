import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

class ZorroButton extends Component {
  componentDidMount() {
    console.log('BODDYYY')
  }

  render() {
    const { children, icon } = this.props
    return (
      <div className="zorro-button">
        <Button
          color="facebook"
          size="mini"
        // style={{
        //   marginLeft: '0px',
        // }}
        // loading
        >
          <Icon name={icon} />
          {children}
        </Button>
      </div>
    )
  }
}

export default ZorroButton
