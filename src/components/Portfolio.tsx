import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Preloader from './Preloader';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize GSAP context for the main app
    const ctx = gsap.context(() => {
      // Set initial state for main content
      gsap.set('.main-content', { opacity: 0, scale: 1.1 });
    });

    return () => ctx.revert();
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    
    // Animate main content in
    gsap.to('.main-content', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2
    });
  };

  return (
    <div className="relative">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div className="main-content">
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;