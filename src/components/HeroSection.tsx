import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 scanlines"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyber-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-cyber-secondary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyber-secondary/50 bg-black/40 text-sm mb-8">
            <span className="inline-block w-2 h-2 bg-cyber-accent rounded-full mr-2 animate-pulse"></span>
            <span className="text-cyber-accent">99.97% taxa de detecção de bugs • 48h tempo médio de correção</span>
          </div>
          
          {/* Main Headline with Glitch Effect */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 glitch-stack">
            <span></span>
            <span>Depuramos a realidade antes que ela derrube seu negócio</span>
            <span>Depuramos a realidade antes que ela derrube seu negócio</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl">
            QA empresarial que pensa 10 passos à frente dos seus usuários
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto justify-center">
            <Button className="bg-cyber-primary hover:bg-cyber-primary/80 text-white px-6 py-6 text-lg font-bold flex items-center gap-2 cyber-border w-full sm:w-auto">
              Escaneie seu app gratuitamente
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-cyber-secondary hover:bg-cyber-secondary/10 text-white px-6 py-6 text-lg font-bold w-full sm:w-auto">Conheça histórias de nossos clientes</Button>
          </div>
          
          {/* Trusted By Section */}
          <div className="w-full mt-4">
            <p className="text-sm text-white/60 mb-6">EMPRESAS QUE CONFIAM EM NÓS:</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Company logos would go here - using placeholders */}
              {[1, 2, 3, 4, 5].map((_, index) => <div key={index} className="h-8 w-32 bg-white/5 rounded-md backdrop-blur-sm"></div>)}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/50 to-transparent"></div>
    </section>;
};
export default HeroSection;