import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';
// import '../styles/sections.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container className="section-content">
        <h2 className="section-title">Contact Us</h2>
        <Row>
          <Col lg={6}>
            <ContactInfo />
          </Col>
          <Col lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// TODO
// 1 background image
// 

export default Contact;