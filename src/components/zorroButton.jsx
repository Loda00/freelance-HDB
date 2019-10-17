import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ZorroButton = ({ icon, children }) => (
  <div className="zorro-button">
    <Button
      color="facebook"
      size="mini"
    >
      <Icon name={icon} />
      {children}
    </Button>
  </div>
)

export default ZorroButton
