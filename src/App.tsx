import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Donate from './components/Donate';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Fuel for the Folks | Driving Change. Fueling Hope.";
    
    // Smooth scroll for anchor links
    const smoothScrollListener = (event: Event) => {
      const anchorElement = event.currentTarget as HTMLAnchorElement;
      const href = anchorElement.getAttribute('href');
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', smoothScrollListener);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollListener);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <Testimonials />
      <Donate />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;