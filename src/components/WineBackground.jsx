import React, { useEffect, useRef } from 'react';
import '../styles/animations.css';

const WineBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createBubble = () => {
      if (!containerRef.current) return;
      
      const bubble = document.createElement('div');
      bubble.className = 'wine-bubble';
      
      // Random size between 5px and 20px
      const size = Math.random() * 15 + 5;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position along the width
      const left = Math.random() * 100;
      bubble.style.left = `${left}%`;
      
      // Random delay
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      
      containerRef.current.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 8000);
    };

    // Create bubbles periodically
    const interval = setInterval(createBubble, 500);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="wine-background" />;
};

export default WineBackground;