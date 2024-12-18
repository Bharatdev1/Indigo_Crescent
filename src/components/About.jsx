import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';
import '../styles/sections.css';

const About = () => {
  const { aboutUs } = websiteData;

  return (
    <section id="about" className="about-section">
      <Container className="section-content">
        <h2 className="section-title">About Us</h2>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white lead">{aboutUs.data}</p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="ratio ratio-16x9">
                <video
                  className="rounded"
                  controls
                  poster="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                >
                  <source src={aboutUs.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;