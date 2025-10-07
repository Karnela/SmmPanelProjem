import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Features from '../../components/Features';
import HowItWorks from '../../components/HowItWorks';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;