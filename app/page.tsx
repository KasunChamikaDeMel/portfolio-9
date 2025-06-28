'use client';

import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Achievements } from '../components/Achievements';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans">
      <NavBar />
      <Hero />
      <About />
      <Achievements />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}