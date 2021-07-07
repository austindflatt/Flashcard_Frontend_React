import React from 'react';
import { Container, Button, Message, Card, Segment, Grid, Label } from 'semantic-ui-react'

function Main() {

    return (
        <div>
            <Container>
            <Message info>
    <Message.Header>Start studying different technologies today</Message.Header>
  </Message>
    <Button color='green' size='huge' href='/card-collections'>Start Studying</Button>
  </Container>
          </div>
    )
}

export default Main