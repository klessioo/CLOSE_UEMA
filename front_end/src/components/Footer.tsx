import React from "react";
import { GraduationCap, Instagram, Mail, Globe } from "lucide-react";

type Page = 'home' | 'courses' | 'about';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                CLOSE
              </span>
            </div>
            <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
              Plataforma Educacional para o letramento LGBTQIAPN+ da Universidade Estadual do Maranhão (UEMA). Construindo uma universidade mais inclusiva.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center hover:bg-purple-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center hover:bg-orange-100 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-600 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-600 transition-colors"
                >
                  Cursos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-purple-600 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li><a href="https://uema.br" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Portal UEMA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-600">
              <li>São Luís - MA</li>
              <li>Campus Paulo VI</li>
              <li>contato@close.uema.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Projeto CLOSE - UEMA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com</span>
            <span className="text-red-500">❤️</span>
            <span>e respeito à diversidade.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
