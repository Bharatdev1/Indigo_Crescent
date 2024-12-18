import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import VideoHero from './components/VideoHero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div style={{backgroundColor:"lightgrey"}}>
      <Navigation />
      <VideoHero />
      <Services />
      <Products />
      <About />
      <Contact />
    </div>
    </>
  );
}

export default App;