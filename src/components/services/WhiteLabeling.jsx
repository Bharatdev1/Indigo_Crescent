import React from 'react';
import { Card } from 'react-bootstrap';

const WhiteLabeling = () => {
  return (
    <Card className="service-card h-100">
      <Card.Img 
        variant="top" 
        src="https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="White Labeling Service"
        className="service-image"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="text-center">
        <i className="fas fa-wine-bottle fa-2x mb-3 text-primary"></i>
        <Card.Title>White Labeling</Card.Title>
        <Card.Text>
          Transform our premium wines into your branded products.
        </Card.Text>
        <ul className="list-unstyled mt-3">
          <li>✓ Custom bottle designs</li>
          <li>✓ Flexible batch sizes</li>
          <li>✓ Quality assurance</li>
          <li>✓ Regulatory compliance</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default WhiteLabeling;