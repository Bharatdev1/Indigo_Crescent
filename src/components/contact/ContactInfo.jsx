import React from 'react';
import { motion } from 'framer-motion';
import { websiteData } from '../../data/websiteData';

const ContactInfo = () => {
  const { contact } = websiteData;

  return (
    <motion.div
      className="glass-card mb-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="h4 text-white mb-4">Get in Touch</h3>
      <div className="text-white mb-3">
        <i className="fas fa-map-marker-alt me-2"></i>
        {contact.address}
      </div>
      <div className="text-white mb-3">
        <i className="fas fa-phone me-2"></i>
        <a href={`tel:${contact.callUs}`} className="text-white text-decoration-none">
          {contact.callUs}
        </a>
      </div>
      <div className="text-white mb-3">
        <i className="fas fa-envelope me-2"></i>
        <a href={`mailto:${contact.emailUs}`} className="text-white text-decoration-none">
          {contact.emailUs}
        </a>
      </div>
      <div className="text-white">
        <i className="fas fa-clock me-2"></i>
        {contact.openHours}
      </div>
    </motion.div>
  );
};

export default ContactInfo;