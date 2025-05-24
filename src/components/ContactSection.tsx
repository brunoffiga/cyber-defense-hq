import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This would be replaced with actual form submission
    console.log('Form submitted:', formState);
    toast({
      title: "Formulário recebido",
      description: "Entraremos em contato em breve.",
      variant: "default"
    });

    // Reset form
    setFormState({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };
  return <section id="contato" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 scanlines"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-sm uppercase tracking-wider text-cyber-secondary mb-4">CONTATO</h2>
              <h3 className="text-4xl font-bold mb-6 neon-text-primary">Deploy seu sistema de defesa digital agora</h3>
              <p className="text-white/70 text-lg mb-8">
                Entre em contato para uma avaliação personalizada de qualidade e comece a proteger seu produto contra bugs críticos.
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold mb-3 text-lg">Nossos diferenciais:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyber-primary"></span>
                    <span className="text-white/80">Testes iniciais gratuitos para novos clientes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyber-secondary"></span>
                    <span className="text-white/80">Equipe disponível 24/7 para suporte emergencial</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyber-accent"></span>
                    <span className="text-white/80">Integração rápida com seu pipeline de CI/CD</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-neon-pink"></span>
                    <span className="text-white/80">Reembolso garantido se não encontrarmos bugs críticos</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border border-cyber-secondary/50 rounded-md bg-black/70 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Telefone</p>
                    <p className="text-white">(11) 4042-6000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border border-cyber-secondary/50 rounded-md bg-black/70 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="text-white">contato@qa4u.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="cyber-panel p-6">
              <h4 className="text-xl font-bold mb-6">Solicite uma análise grátis</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-white/70">Nome completo</label>
                    <Input id="name" name="name" value={formState.name} onChange={handleChange} className="bg-black/50 border-cyber-secondary/30 focus:border-cyber-secondary focus-visible:ring-cyber-secondary/20 text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-white/70">Email corporativo</label>
                    <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} className="bg-black/50 border-cyber-secondary/30 focus:border-cyber-secondary focus-visible:ring-cyber-secondary/20 text-white" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm text-white/70">Empresa</label>
                  <Input id="company" name="company" value={formState.company} onChange={handleChange} className="bg-black/50 border-cyber-secondary/30 focus:border-cyber-secondary focus-visible:ring-cyber-secondary/20 text-white" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm text-white/70">Descreva seu projeto</label>
                  <Textarea id="message" name="message" value={formState.message} onChange={handleChange} className="bg-black/50 border-cyber-secondary/30 focus:border-cyber-secondary focus-visible:ring-cyber-secondary/20 text-white min-h-[120px]" required />
                </div>
                
                <Button type="submit" className="w-full bg-cyber-primary hover:bg-cyber-primary/80 text-white py-6 font-bold">
                  Enviar solicitação
                </Button>
                
                <p className="text-xs text-white/50 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/50 to-transparent"></div>
    </section>;
};
export default ContactSection;