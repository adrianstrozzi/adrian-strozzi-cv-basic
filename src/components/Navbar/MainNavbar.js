// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'

import { Navbar, Nav, Container } from 'react-bootstrap'

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Adrian Strozzi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/study">Study</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar;