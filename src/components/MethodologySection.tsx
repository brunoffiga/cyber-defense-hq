
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico Inicial",
    description: "Analisamos profundamente sua arquitetura, código e processos para identificar riscos potenciais antes que se tornem problemas reais.",
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    description: "Desenvolvemos um plano de testes sob medida para seu produto, priorizando áreas críticas e otimizando recursos.",
  },
  {
    number: "03",
    title: "Automação Inteligente",
    description: "Criamos pipelines de teste sustentáveis que crescem com seu produto, reduzindo a necessidade de intervenção manual.",
  },
  {
    number: "04",
    title: "Monitoramento Contínuo",
    description: "Nossos sistemas mantêm vigilância constante, alertando sobre problemas emergentes antes que afetem seus usuários.",
  },
  {
    number: "05",
    title: "Evolução Contínua",
    description: "Refinamos continuamente nossa abordagem com base em dados e métricas de qualidade para garantir melhorias constantes.",
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 scanlines"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyber-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyber-secondary/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-sm uppercase tracking-wider text-cyber-secondary mb-4">NOSSA METODOLOGIA</h2>
          <h3 className="text-4xl font-bold mb-6 neon-text-primary">Nossos algoritmos veem vulnerabilidades que humanos não conseguem</h3>
          <p className="text-white/70 text-lg">
            Combinamos experiência humana com tecnologia avançada para oferecer uma solução de QA inigualável no mercado.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="cyber-panel p-8 relative h-full flex flex-col"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black border border-cyber-secondary flex items-center justify-center font-mono">
                <span className="text-cyber-secondary text-xl">{step.number}</span>
              </div>
              <div className="pt-6">
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && index % 3 !== 2 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-cyber-secondary" />
              )}
            </div>
          ))}
        </div>
        
        {/* Metrics */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="cyber-panel p-8 text-center flex flex-col items-center justify-center aspect-square md:aspect-auto">
              <div className="text-5xl md:text-6xl font-bold text-cyber-secondary mb-4">99.97%</div>
              <p className="text-white/70">Taxa de detecção de bugs</p>
            </div>
            <div className="cyber-panel p-8 text-center flex flex-col items-center justify-center aspect-square md:aspect-auto">
              <div className="text-5xl md:text-6xl font-bold text-cyber-secondary mb-4">48h</div>
              <p className="text-white/70">Tempo médio de correção</p>
            </div>
            <div className="cyber-panel p-8 text-center flex flex-col items-center justify-center aspect-square md:aspect-auto">
              <div className="text-5xl md:text-6xl font-bold text-cyber-secondary mb-4">87%</div>
              <p className="text-white/70">Redução de tempo de QA</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/50 to-transparent"></div>
    </section>
  );
};

export default MethodologySection;
