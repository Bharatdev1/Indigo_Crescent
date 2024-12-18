import React from 'react';
import { Card } from 'react-bootstrap';

const Labeling = () => {
  return (
    <Card className="service-card h-100">
      <Card.Img 
        variant="top" 
        src="https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="Wine Labeling Service"
        className="service-image"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="text-center">
        <i className="fas fa-layer-group fa-2x mb-3 text-primary"></i>
        <Card.Title>Labeling</Card.Title>
        <Card.Text>
          Professional label design and production services.
        </Card.Text>
        <ul className="list-unstyled mt-3">
          <li>✓ Custom label design</li>
          <li>✓ Premium printing</li>
          <li>✓ Material selection</li>
          <li>✓ Compliance checking</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Labeling;