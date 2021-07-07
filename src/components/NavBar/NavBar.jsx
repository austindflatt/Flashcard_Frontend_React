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
          <Menu.Item header>
          🧠 Tech Flashcard App
          </Menu.Item>
          <Menu.Item href='/'>Home</Menu.Item>
          <Menu.Item href='/card-collections'>Collections</Menu.Item>
          <Menu.Item href='/cards'>Cards</Menu.Item>
        </Container>
      </Menu>
    </div>
  )
  
  export default FixedMenuLayout