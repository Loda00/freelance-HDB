import React, { Component } from 'react'
import { Icon, Image } from 'semantic-ui-react'

import Logo from '../../image/logo.png'
import Perfil from '../../image/perfil.png'

class Web extends Component {
  componentDidMount() {
    console.log('Webbb')
  }

  render() {
    return (
      <div className="header-main">
        <div className="header-wrap">
          <div className="header-content">
            <div
              className="header-content-item-1"
            >
              <Image
                src={Logo}
                size="tiny"
                style={{
                  width: '50%',
                  padding: '9px 10px',
                }}
              />
            </div>
            <div className="header-content-item-2">
              <Icon name="home" />
              <Icon name="facebook messenger" />
              <Icon name="bell outline" />
              <Icon name="setting" />
              <Icon name="question" />
            </div>
          </div>
          <div
            className="header-content-2"
          >
            <Image
              src={Perfil}
              style={{
                width: '17%',
                borderRadius: '50%',
              }}
            />
            <p>Usuario</p>
          </div>
        </div>
        <div className="header-menu">Menu</div>
      </div>
    )
  }
}

export default Web
