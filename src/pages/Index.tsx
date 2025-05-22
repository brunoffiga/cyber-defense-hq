
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
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
