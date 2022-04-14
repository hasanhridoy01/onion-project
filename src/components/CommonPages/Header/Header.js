// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button className='btn btn-light round'>Login</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className='btn btn-danger round'>Sing up</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;