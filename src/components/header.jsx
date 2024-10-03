import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.svg';
import "./header.css";

function HeaderApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" >
      <Container  sticky="top" >
        <Navbar.Brand href="#"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto main-menu">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#core-values">Core Value</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/1sSpMR0Xq5UYZU61T_xdU-k7NcDbpCBOf2puhSlVXNVU/viewform?edit_requested=true">
  <Button>Join the Waitlist</Button>
</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderApp;