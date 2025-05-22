
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 scanlines"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-md bg-cyber-primary cyber-border"></div>
              <div className="font-rajdhani font-bold text-xl neon-text-primary">QAaaS</div>
            </div>
            <p className="text-white/70 text-sm">
              Na paisagem digital repleta de bugs, somos a última linha de defesa.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4 text-cyber-secondary">Links Rápidos</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Serviços</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Cases</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Metodologia</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Contato</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="font-bold mb-4 text-cyber-secondary">Serviços</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Testes Automatizados</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Engenharia de Performance</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Auditoria de Segurança</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Consultoria de QA</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-secondary transition-colors">Automação de Testes</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h5 className="font-bold mb-4 text-cyber-secondary">Siga-nos</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-cyber-secondary/50 rounded-md flex items-center justify-center hover:border-cyber-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-cyber-secondary/50 rounded-md flex items-center justify-center hover:border-cyber-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-cyber-secondary/50 rounded-md flex items-center justify-center hover:border-cyber-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-cyber-secondary/50 rounded-md flex items-center justify-center hover:border-cyber-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-secondary">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} QAaaS Brasil. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-cyber-secondary text-sm transition-colors">Termos de Serviço</a>
            <a href="#" className="text-white/50 hover:text-cyber-secondary text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/50 hover:text-cyber-secondary text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
