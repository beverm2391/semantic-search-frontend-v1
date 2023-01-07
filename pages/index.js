import Container from '../components/Container'
import React from 'react'
import { Button, Text } from '@geist-ui/core'

export default function Index() {
  return (
    <Container>
      <div>
        <Text h1>
          Hello world!
        </Text>
        <Button>Submit</Button>
      </div>
    </Container>
  )
}
