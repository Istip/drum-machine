import React from "react"
import { Button } from "./styled/Button"
import { Container, Row } from "./styled/Grid"
const App = () => {
  return (
    <Container>
      <h1>Drum Machine</h1>
      <br />
      <Row>
        <Button />
        <Button />
        <Button />
      </Row>
      <Row>
        <Button />
        <Button />
        <Button />
      </Row>
      <Row>
        <Button />
        <Button />
        <Button />
      </Row>
    </Container>
  )
}

export default App
