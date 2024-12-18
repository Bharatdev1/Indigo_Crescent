import React from 'react';
import { Card } from 'react-bootstrap';

const Branding = () => {
  return (
    <Card className="service-card h-100">
      <Card.Img 
        variant="top" 
        src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Wine Branding Service"
        className="service-image"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="text-center">
        <i className="fas fa-tags fa-2x mb-3 text-primary"></i>
        <Card.Title>Branding</Card.Title>
        <Card.Text>
          Build your unique wine brand identity with our expertise.
        </Card.Text>
        <ul className="list-unstyled mt-3">
          <li>✓ Brand strategy development</li>
          <li>✓ Visual identity creation</li>
          <li>✓ Marketing materials</li>
          <li>✓ Brand guidelines</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Branding;