
import React, { useEffect } from 'react';
import WhoWeAre from './components/WhoWeAre';
import HowWeInnovate from './components/HowWeInnovate';
import OurApproach from './components/OurApproach';
import OurValues from './components/OurValues';
import OurPolicies from './components/OurPolicies';
import TheFounder from './components/TheFounder';
import DctGuild from './components/DctGuild';
import Footer from './components/Footer';
import './assets/styles.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight >= windowHeight / 2) {
          currentSection = section;
        }
      });

      if (currentSection) {
        document.body.style.backgroundColor = currentSection.dataset.bgcolor;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <section id="who-we-are">
        <WhoWeAre />
      </section>
      <HowWeInnovate />
      <OurApproach />
      <section id="our-values">
        <OurValues />
      </section>
      <section id="our-policies">
        <OurPolicies />
      </section>
      <TheFounder />
      <section id="dct-guild">
        <DctGuild />
      </section>
      <Footer />
    </div>
  );
};

export default App;
