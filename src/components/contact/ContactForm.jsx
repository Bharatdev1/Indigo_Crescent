import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.css'
const ContactForm = () => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" className="bg-transparent text-white custom-placeholder" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your Email" className="bg-transparent text-white custom-placeholder" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Your Message" className="bg-transparent text-white custom-placeholder" />
        </Form.Group>
        <Button variant="outline-light" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </motion.div>
  );
};

export default ContactForm;