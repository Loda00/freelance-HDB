import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class Web extends Component {
  componentDidMount() {
    console.log('Webbb')
  }

  render() {
    return (
      <div className="header-main">
        <div className="header-wrap">
          <div className="header-content">
            <div>
                ZORRO WEB
            </div>
            <div>
              <Icon name="home" />
            </div>
          </div>
          <div>
            User
          </div>
        </div>
        <div className="header-menu">Menu</div>
      </div>
      // <h1>HEADER</h1>
    )
  }
}

export default Web
