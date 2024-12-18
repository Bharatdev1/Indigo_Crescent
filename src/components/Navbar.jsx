import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { websiteData } from '../data/websiteData';

const Navigation = () => {
  const { navbar } = websiteData;
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">INDIGO CRESCENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {Object.entries(navbar).map(([key, value]) => (
              <Nav.Link key={key} href={`#${key.toLowerCase()}`}>{value}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;