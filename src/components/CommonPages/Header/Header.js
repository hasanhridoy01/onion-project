// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  }
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img className='logo' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            </Nav>
            <Nav>
              {
                user ?
              <Nav.Link eventKey={2} href="#">
                <button onClick={logout} className='btn btn-danger round'>Sing Out</button>
              </Nav.Link>
               : 
               <Nav.Link href="/login">
                <button className='btn btn-danger round'>Login</button>
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;