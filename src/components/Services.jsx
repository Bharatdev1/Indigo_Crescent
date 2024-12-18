import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from './services/ServiceCard';
import { websiteData } from '../data/websiteData';
import '../styles/sections.css';

const Services = () => {
  const { ourServices } = websiteData;

  return (
    <section id="service" className="services-section">
      <Container className="section-content">
        <h2 className="section-title">Our Services</h2>
        <Row>
          {Object.entries(ourServices).map(([key, value], index) => (
            <ServiceCard
              key={key}
              serviceKey={key}
              value={value}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;