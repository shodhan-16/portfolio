import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CursorGlow from '@/components/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import CloudJourney from '@/sections/CloudJourney';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import WhatIBuild from '@/sections/WhatIBuild';
import Philosophy from '@/sections/Philosophy';
import Contact from '@/sections/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  // Lock scroll while the loading screen is visible
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loaded]);

  return (
    <div className="noise scanlines relative min-h-screen">
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <SideNav />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <CloudJourney />
        <Projects />
        <Certifications />
        <WhatIBuild />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
