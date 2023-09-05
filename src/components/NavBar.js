import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Vinilo | Studio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hip Hop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Jazz</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Funk & Soul</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Blues</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">R&B</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Rock</NavDropdown.Item>              
              </NavDropdown>
              <Nav.Link href="#cart">
                <CartWidget />
              </Nav.Link>         
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default NavBar;