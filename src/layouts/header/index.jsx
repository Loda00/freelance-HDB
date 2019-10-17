import React, { Component, Fragment } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Icon, Image, Card, Feed } from 'semantic-ui-react'

import Logo from '../../image/logo.png'
import Perfil from '../../image/perfil.png'

class Web extends Component {
  state = {
    showOptionsUser: false,
  }

  componentDidMount() {
    console.log('Webbb')
    document.addEventListener('click', this.handleClickOutOptionsUser)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutOptionsUser)
  }

  handleClickRedirectHome = () => {
    const { history } = this.props
    history.push('/index')
  }

  handleOpenOptionsUser = () => {
    const { showOptionsUser } = this.state

    this.setState({
      showOptionsUser: !showOptionsUser,
    })
  }

  handleCloseOptionsUser = () => {
    this.setState({
      showOptionsUser: false,
    })
  }

  handleFocus = (e) => {
    this.closeOptionsUser = e
    this.count = 0
  }

  handleClickOutOptionsUser = (e) => {
    if (this.closeOptionsUser !== e.target && this.count !== 0) {
      this.setState({
        showOptionsUser: false,
      })
    }
    this.count = 1
  }

  render() {
    const { showOptionsUser } = this.state
    console.log('this.count', this.count)
    return (
      <Fragment>
        <div className="header-main">
          <div className="header-wrap">
            <div className="header-content">
              <div
                className="header-content-item-1"
                onClick={this.handleClickRedirectHome}
              >
                <Image
                  src={Logo}
                  size="tiny"
                  style={{
                    width: '350px',
                    height: '80px',
                    padding: '13px 10px',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div className="header-content-item-2">
                <Icon size="large" name="home" />
                <Icon size="large" name="facebook messenger" />
                <Icon size="large" name="bell outline" />
                <Icon size="large" name="setting" />
                <Icon size="large" name="question" />
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
              <p className="name-user">Jhon Alex Neira</p>
              <div className="icon-option-user" onClick={this.handleOpenOptionsUser}>
                <Icon name="caret down" />
              </div>
              {
                showOptionsUser && (
                  <div className="combo-options-user" ref={this.handleFocus}>
                    <Card className="card-main-content">
                      <Card.Content
                        className="card-content"
                      >
                        <Feed>
                          <Feed.Event onClick={this.handleCloseOptionsUser}>
                            <Feed.Content className="feed-content">
                              <span onClick={this.handleCloseOptionsUser}>
                                <Feed.Summary>
                                  You added
                                </Feed.Summary>
                              </span>
                            </Feed.Content>
                          </Feed.Event>

                          <Feed.Event>
                            <Feed.Content className="feed-content">
                              <Feed.Summary>
                                You added
                              </Feed.Summary>
                            </Feed.Content>
                          </Feed.Event>

                          <Feed.Event>
                            <Feed.Content className="feed-content">
                              <Feed.Summary>
                                Exit
                              </Feed.Summary>
                            </Feed.Content>
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="header-menu">
          <NavLink
            to="/HDB"
            className="header-menu-item"
          >
            HDB
          </NavLink>
          <div className="header-menu-item">
            <NavLink
              to="/HDB"
              className="header-menu-item"
            >
              Legajo de Personal
            </NavLink>
          </div>
          <div className="header-menu-item">
            <NavLink
              to="/HDB"
              className="header-menu-item"
            >
              Búsqueda Rápida
            </NavLink>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Web)
