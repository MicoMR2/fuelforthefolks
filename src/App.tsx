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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
          
          const target = document.querySelector(this.getAttribute('href') || '');
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
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