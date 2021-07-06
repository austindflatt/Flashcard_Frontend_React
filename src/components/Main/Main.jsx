import React from 'react';
import { Container, Button, Card, Segment, Grid, Label } from 'semantic-ui-react'

function Main() {

    return (
        <div>
            <Container>
            <Segment>
            <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>React.js</Card.Header>
        <Card.Meta>Front-End JavaScript library</Card.Meta>
        <Card.Description>
          Start studying React.js today!
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='Python'
        meta='Programming language'
        description='Start studying Python today!'
      />
    </Card>

    <Card
      header='HTML'
      meta='Friend'
      description='Learn the basics of HTML'
    />
  </Card.Group>
  </Segment>
  
          <Button color='green' size='huge'>Start Studying</Button>
          </Container>
          </div>
    )
}

export default Main