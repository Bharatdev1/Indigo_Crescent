import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './products/ProductCard';
import { websiteData } from '../data/websiteData';
import '../styles/sections.css';

const Products = () => {
  const { ourProducts } = websiteData;

  return (
    <section id="products" className="products-section">
      <Container className="section-content">
        <h2 className="section-title">Our Premium Products</h2>
        <Row>
          {Object.entries(ourProducts).map(([key, value], index) => (
            <ProductCard
              key={key}
              productKey={key}
              value={value}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;