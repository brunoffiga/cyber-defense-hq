
import React from 'react';
import { Shield, Activity, Lock, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Testes Automatizados",
    description: "Pipeline de testes integrado que identifica bugs antes que seus clientes o façam.",
    features: ["Testes Unitários/Integrados/E2E", "Compatibilidade cross-browser", "Testes de apps mobile"],
  },
  {
    icon: Activity,
    title: "Engenharia de Performance",
    description: "Otimização para garantir que seus sistemas suportem cargas extremas sem falhar.",
    features: ["Testes de carga/stress", "Otimização de banco de dados", "Configuração de CDN"],
  },
  {
    icon: Lock,
    title: "Auditoria de Segurança",
    description: "Proteção contra vulnerabilidades críticas que podem comprometer dados sensíveis.",
    features: ["Testes de penetração", "Avaliação de vulnerabilidades", "Validação de conformidade"],
  },
  {
    icon: Zap,
    title: "Consultoria Estratégica de QA",
    description: "Transformamos qualidade em vantagem competitiva para seu negócio.",
    features: ["Otimização de processos", "Seleção de ferramentas", "Treinamento de equipes"],
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 scanlines"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-cyber-secondary mb-4">NOSSOS SERVIÇOS</h2>
          <h3 className="text-4xl font-bold mb-6 neon-text-primary">Caçamos bugs nas sombras digitais</h3>
          <p className="text-white/70 text-lg">
            Nossa equipe de elite usa tecnologia de ponta para encontrar e eliminar falhas que outros não conseguem ver.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="cyber-panel p-6 transition-all duration-300 hover:border-cyber-primary group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 border border-cyber-secondary/50 rounded-md bg-black/70 group-hover:border-cyber-primary/70 transition-colors">
                  <service.icon className="h-6 w-6 text-cyber-secondary group-hover:text-cyber-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-cyber-secondary rounded-full"></span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button className="bg-cyber-primary hover:bg-cyber-primary/80 text-white px-8 py-6 text-lg font-bold cyber-border">
            Solicite uma consultoria personalizada
          </Button>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/50 to-transparent"></div>
    </section>
  );
};

export default ServicesSection;
