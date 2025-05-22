
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    industry: "Fintech",
    title: "Como eliminamos 99% dos bugs em um app de pagamentos antes do lançamento",
    metrics: ["Redução de 92% em crashes", "Aumento de 47% em conversão", "Zero bugs críticos em produção"],
    color: "from-cyber-primary/20 to-cyber-secondary/20"
  },
  {
    industry: "E-commerce",
    title: "Identificamos gargalos de performance que afetavam vendas na Black Friday",
    metrics: ["Capacidade 5x maior de usuários simultâneos", "Redução de 62% no tempo de carregamento", "Zero downtime durante picos de tráfego"],
    color: "from-neon-pink/20 to-cyber-primary/20"
  },
  {
    industry: "Saúde",
    title: "Certificação de compliance para aplicativo de dados médicos sensíveis",
    metrics: ["Conformidade LGPD e HIPAA", "Zero vulnerabilidades críticas", "Aprovação regulatória em 30 dias"],
    color: "from-cyber-accent/20 to-cyber-secondary/20"
  }
];

const CaseStudySection = () => {
  return (
    <section id="cases" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 scanlines"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-cyber-secondary mb-4">CASOS DE SUCESSO</h2>
          <h3 className="text-4xl font-bold mb-6 neon-text-primary">Histórias de guerra do front de QA</h3>
          <p className="text-white/70 text-lg">
            Veja como ajudamos empresas reais a superar desafios críticos de qualidade.
          </p>
        </div>
        
        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index} 
              className={`cyber-panel p-6 group hover:-translate-y-1 transition-transform cursor-pointer bg-gradient-to-br ${caseStudy.color}`}
            >
              <div className="mb-4">
                <span className="text-xs text-cyber-secondary border border-cyber-secondary/50 rounded-full px-3 py-1">
                  {caseStudy.industry}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-6 group-hover:text-cyber-secondary transition-colors">
                {caseStudy.title}
              </h4>
              <ul className="space-y-2 mb-6">
                {caseStudy.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1 w-1 bg-cyber-secondary rounded-full"></span>
                    <span className="text-sm text-white/80">{metric}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <ArrowUpRight className="text-cyber-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" className="border-cyber-secondary hover:bg-cyber-secondary/10 text-white px-8 py-6 font-bold">
            Ver todos os casos de sucesso
          </Button>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/50 to-transparent"></div>
    </section>
  );
};

export default CaseStudySection;
