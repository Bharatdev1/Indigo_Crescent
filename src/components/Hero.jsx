import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-section bg-dark text-white py-5 mt-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Premium White Label Wine Solutions</h1>
            <p className="lead">
              Crafting excellence in every bottle. From sparkling to still, alcoholic to non-alcoholic wines.
            </p>
            <button className="btn btn-light btn-lg">Explore Our Products</button>
          </Col>
          <Col md={6}>
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Wine bottles" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;