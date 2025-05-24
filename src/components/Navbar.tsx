import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyber-secondary/30">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/2641dc68-de2c-4c0e-813e-bef8cd74f1d7.png" 
            alt="QA4U Logo" 
            className="h-40 w-full"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-white/80 hover:text-cyber-secondary transition-colors">Serviços</a>
          <a href="#metodologia" className="text-white/80 hover:text-cyber-secondary transition-colors">Metodologia</a>
          <a href="#cases" className="text-white/80 hover:text-cyber-secondary transition-colors">Cases</a>
          <a href="#contato" className="text-white/80 hover:text-cyber-secondary transition-colors">Contato</a>
          <Button className="bg-cyber-primary hover:bg-cyber-primary/80 text-white font-rajdhani font-semibold cyber-border px-6">
            Scan Gratuito
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 border-b border-cyber-secondary/30 py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            <a 
              href="#servicos" 
              className="text-white/80 hover:text-cyber-secondary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#metodologia" 
              className="text-white/80 hover:text-cyber-secondary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Metodologia
            </a>
            <a 
              href="#cases" 
              className="text-white/80 hover:text-cyber-secondary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cases
            </a>
            <a 
              href="#contato" 
              className="text-white/80 hover:text-cyber-secondary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="bg-cyber-primary hover:bg-cyber-primary/80 text-white font-rajdhani font-semibold w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Scan Gratuito
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
