import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix-by-baha</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">movies</Nav.Link>
      <Nav.Link href="#features">serice</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default navbar
