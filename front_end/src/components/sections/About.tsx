import React, { useState } from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";
import { motion } from "motion/react";
import { Info, Target, Users, BookHeart, CheckCircle2, GraduationCap, Code2, Users2, ShieldCheck } from "lucide-react";

export const About = () => {
  const [openItem, setOpenItem] = useState<string | null>("project");

  const toggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden min-h-screen">
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />
       
       <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Conheça o CLOSE</h2>
          <p className="text-xl text-gray-600">
            Uma iniciativa da Universidade Estadual do Maranhão para a promoção da diversidade e inclusão.
          </p>
        </motion.div>

        <Accordion className="space-y-4">
          <AccordionItem 
            title="O Projeto e Seus Objetivos" 
            isOpen={openItem === "project"} 
            onToggle={() => toggle("project")}
            className="border-purple-100"
          >
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-lg text-purple-800 mb-2">
                  <Info className="w-5 h-5" /> Título do Projeto
                </h4>
                <p className="text-gray-700 bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <strong>CLOSE:</strong> Plataforma Digital sobre Letramento das Questões LGBTQIAPN+.
                </p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 font-bold text-lg text-purple-800 mb-2">
                  <Target className="w-5 h-5" /> Objetivo Geral
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Elaborar uma plataforma digital para ofertar embasamento teórico sobre questões LGBTQIAPN+, auxiliando no processo de construção de uma realidade social mais equitativa, com foco no Estado do Maranhão.
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Nossa Missão e Pilares" 
            isOpen={openItem === "mission"} 
            onToggle={() => toggle("mission")}
            className="border-pink-100"
          >
            <div className="space-y-6">
              <div>
                 <h4 className="flex items-center gap-2 font-bold text-lg text-pink-700 mb-2">
                  <BookHeart className="w-5 h-5" /> Nossa Missão
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Oferecer capacitações à população em torno de temáticas fundamentais para a diversidade, priorizando eixos como gênero, questões raciais e empoderamento. Esta plataforma funciona como um Ambiente Virtual de Aprendizagem (AVA), visando a socialização do conhecimento e o manuseio de ferramentas pedagógicas modernas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Os cursos são livres e estruturados em módulos específicos, utilizando a luz do conhecimento das ciências humanas e campos interdisciplinares.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { title: "Capacitação", desc: "Formação de agentes de enfrentamento contra o preconceito, promovendo conhecimento crítico." },
                  { title: "Interdisciplinaridade", desc: "Conhecimentos das ciências humanas integrados para uma visão ampla sobre diversidade." },
                  { title: "Acessibilidade", desc: "Cursos livres e abertos para toda a população, democratizando o acesso." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                    <h5 className="font-bold text-pink-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> {item.title}
                    </h5>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Estrutura da Equipe" 
            isOpen={openItem === "team"} 
            onToggle={() => toggle("team")}
            className="border-orange-100"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 shadow-sm">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Coordenação</h4>
                  <p className="text-orange-700 font-semibold">Prof. Jakson dos Santos Ribeiro</p>
                  <p className="text-sm text-gray-500">Orientador Responsável</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { 
                    role: "Pesquisadores", 
                    area: "Bolsistas", 
                    icon: <Target className="w-5 h-5" />,
                    color: "bg-blue-50 text-blue-700 border-blue-100" 
                  },
                  { 
                    role: "Grupo de Estudos", 
                    area: "Alunos UEMA", 
                    icon: <Users2 className="w-5 h-5" />,
                    color: "bg-emerald-50 text-emerald-700 border-emerald-100" 
                  },
                  { 
                    role: "Apoio", 
                    area: "Grupos de Estudo", 
                    icon: <ShieldCheck className="w-5 h-5" />,
                    color: "bg-purple-50 text-purple-700 border-purple-100" 
                  },
                  { 
                    role: "Colaboradores", 
                    area: "Desenv. de Ciência da Computação - IFMA", 
                    icon: <Code2 className="w-5 h-5" />,
                    color: "bg-orange-50 text-orange-700 border-orange-100" 
                  },
                ].map((member, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-all hover:shadow-md flex items-center gap-4 ${member.color}`}>
                    <div className="opacity-80">{member.icon}</div>
                    <div>
                      <h5 className="font-bold leading-tight">{member.role}</h5>
                      <p className="opacity-90 text-xs font-medium mt-0.5">{member.area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};