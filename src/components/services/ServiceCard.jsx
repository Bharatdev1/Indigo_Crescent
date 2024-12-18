import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceCard = ({ serviceKey, value, index }) => {
  console.log(serviceKey);
  
  return (
    <Col className='mb-3' md={6} lg={3}>
      <motion.div
        className="glass-card h-100"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="text-center mb-4">
          <img
           style={{ width: '50px', height: '50px' }}
            src={`./images/${serviceKey}.svg` }
            alt={value}
            className="img-fluid rounded mb-3"
          />
          <h3 className="h4 text-white">{value}</h3>
        </div>
      </motion.div>
    </Col>
  );
};

export default ServiceCard;