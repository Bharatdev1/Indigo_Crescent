import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const ProductCard = ({ productKey, value, index }) => {
  // console.log(productKey + " final");
  
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
        <img
          // src={`https://source.unsplash.com/400x300/?wine,${productKey}`}
          src={`/images/${productKey}.jpg`}
          alt={value}
          className="img-fluid rounded mb-3"
        />
        <h3 className="h4 text-white text-center">{value}</h3>
      </motion.div>
    </Col>
  );
};

export default ProductCard;