import React from 'react'
import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react'
  
  const FixedMenuLayout = () => (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
            Flashcard App
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>Collections</Menu.Item>
          <Menu.Item as='a'>Account</Menu.Item>
        </Container>
      </Menu>
    </div>
  )
  
  export default FixedMenuLayout