// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'

import { Navbar, Nav, Container } from 'react-bootstrap'
// import logo from '../assets/react.png'
import logo from '../../assets/react.png'

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="react-logo"
          />{' '}Adrian Strozzi
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/study">Study</Nav.Link>
            <Nav.Link href="/other">Other</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar;