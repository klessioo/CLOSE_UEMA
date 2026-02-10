import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type Page = 'home' | 'courses' | 'about';

interface HeroProps {
  onRegister: () => void;
  onNavigate: (page: Page) => void;
}

export const Hero = ({ onRegister, onNavigate }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200 rounded-full blur-[100px] opacity-30 translate-y-1/4 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
            <span className="text-sm font-medium text-purple-800">Plataforma Educacional Inclusiva</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Educação para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              Diversidade
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Promovendo o letramento sobre questões LGBTQIAPN+ através de cursos, materiais didáticos e acolhimento acadêmico na UEMA.
          </p>
          
          <div className="flex gap-4">
            <Button onClick={() => onNavigate('courses')} className="h-14 px-8 text-lg">
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" className="h-14 px-8 text-lg" onClick={() => onNavigate('about')}>
              Saiba Mais
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1648254798202-b8de4680dff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjZWxlYnJhdGluZyUyMGxnYnQlMjBwcmlkZSUyMHVuaXZlcnNpdHklMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwMjMyNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Estudantes diversos" 
              className="w-full h-[600px] object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-bold text-lg">Projeto CLOSE</p>
              <p className="text-white/80">Universidade Estadual do Maranhão</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
