
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';
import CaseStudySection from '@/components/CaseStudySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MethodologySection />
        <CaseStudySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
