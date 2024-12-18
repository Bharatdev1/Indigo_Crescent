import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { websiteData } from '../data/websiteData';
import WineBackground from './WineBackground';
import '../styles/animations.css';

const VideoHero = () => {
  const { heroSection } = websiteData;

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#742f37",
      color: "#ffffff"
    },
    tap: { scale: 0.95 }
  };

  return (
    <div id='home' className="video-hero position-relative wine-section">
      <WineBackground />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-100 video-background"
      >
        <source
          src={heroSection.video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <Container>
          <motion.div 
            className="hero-content text-center text-white glass-effect"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title mb-4"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {heroSection.heading}
            </motion.h1>
            <motion.p 
              className="hero-subtitle mb-5"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {heroSection.para}
            </motion.p>
            <motion.button 
              className="hero-button"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {heroSection.button}
            </motion.button>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default VideoHero;