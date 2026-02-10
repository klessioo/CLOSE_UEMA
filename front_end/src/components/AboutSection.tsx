import { useState } from 'react';
import { Target, Lightbulb, Users as UsersIcon, ChevronDown, ChevronRight, Building2, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

export function AboutSection() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Sobre Nós
        </motion.h2>

        <div className="space-y-4">
          {/* Sobre o Projeto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleSection('sobre-projeto')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900">Sobre o Projeto</h3>
              <motion.div
                animate={{ rotate: openSection === 'sobre-projeto' ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {openSection === 'sobre-projeto' ? (
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                )}
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'sobre-projeto' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Título do Projeto</h4>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-semibold">CLOSE:</span> Plataforma Digital sobre Letramento 
                          das Questões LGBTQIAPN+.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Objetivo Geral</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Elaborar uma plataforma digital para ofertar embasamento teórico sobre questões 
                          LGBTQIAPN+, auxiliando no processo de construção de uma realidade social mais 
                          equitativa, com foco no Estado do Maranhão.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-purple-600 mb-2">Nossa Missão</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Oferecer capacitações à população em torno de temáticas fundamentais para a 
                          diversidade, priorizando eixos como gênero, questões raciais e empoderamento.
                        </p>
                      </div>
                    </div>

                    {/* Imagens Ilustrativas */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <div className="rounded-xl overflow-hidden shadow-md h-48">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
                          alt="Diversidade e inclusão"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-md h-48">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                          alt="Educação e empoderamento"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Metodologia */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleSection('metodologia')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900">Nossa Metodologia</h3>
              <motion.div
                animate={{ rotate: openSection === 'metodologia' ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {openSection === 'metodologia' ? (
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                )}
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'metodologia' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Esta plataforma funciona como um <span className="font-semibold">Ambiente Virtual de 
                      Aprendizagem (AVA)</span>, visando a socialização do conhecimento e o manuseio de 
                      ferramentas pedagógicas modernas. Os cursos são livres e estruturados em módulos específicos, 
                      utilizando a luz do conhecimento das ciências humanas e campos interdisciplinares.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <Target className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Capacitação</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Formação de agentes de enfrentamento contra o preconceito, promovendo 
                          conhecimento crítico e reflexivo.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-pink-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Interdisciplinaridade</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Conhecimentos das ciências humanas integrados para uma visão 
                          ampla sobre diversidade.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                          <UsersIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Acessibilidade</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Cursos livres e abertos para toda a população, democratizando 
                          o acesso ao conhecimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Equipe e Instituição */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleSection('equipe')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900">Equipe e Instituição</h3>
              <motion.div
                animate={{ rotate: openSection === 'equipe' ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {openSection === 'equipe' ? (
                  <ChevronDown className="w-6 h-6 text-purple-600" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                )}
              </motion.div>
            </button>
            <AnimatePresence>
              {openSection === 'equipe' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Instituição</h4>
                        <p className="text-gray-600">Universidade Estadual do Maranhão (UEMA)</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Departamento de História e Geografia - Campus Caxias
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                        <p className="text-gray-600">Estado do Maranhão</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Foco em atender as necessidades da população maranhense
                        </p>
                      </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-8">
                      <h4 className="font-semibold text-gray-900 mb-4 text-center">Estrutura da Equipe</h4>
                      
                      {/* Coordenador */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg shadow-lg text-center w-64">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                            </svg>
                          </div>
                          <h5 className="font-bold text-sm mb-1">Coordenação</h5>
                          <p className="text-purple-100 mb-1 text-xs">Prof. Jakson dos Santos Ribeiro</p>
                          <p className="text-pink-200 text-xs">Orientador Responsável</p>
                        </div>
                      </div>

                      {/* Linha de Conexão */}
                      <div className="flex justify-center mb-4">
                        <div className="w-0.5 h-6 bg-purple-300"></div>
                      </div>

                      {/* Pesquisadores */}
                      <div className="flex justify-center gap-4 mb-4">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md text-center w-44">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                          </div>
                          <h5 className="text-xs font-bold mb-1">Pesquisadores</h5>
                          <p className="text-blue-100 text-xs">Conteúdo Pedagógico</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-center w-44">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                            </svg>
                          </div>
                          <h5 className="text-xs font-bold mb-1">Desenvolvedores</h5>
                          <p className="text-pink-100 text-xs">Tecnologia</p>
                        </div>
                      </div>

                      {/* Linhas de Conexão */}
                      <div className="flex justify-center gap-20 mb-4">
                        <div className="w-0.5 h-6 bg-blue-300"></div>
                        <div className="w-0.5 h-6 bg-blue-300"></div>
                      </div>

                      {/* Estagiários */}
                      <div className="flex justify-center gap-3">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-sm text-center flex-1 max-w-[160px]">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                            <UsersIcon className="w-3 h-3" />
                          </div>
                          <h5 className="text-xs font-bold mb-0.5">Grupos de Estudo</h5>
                          <p className="text-purple-100 text-xs">UEMA</p>
                        </div>
                        <div className="bg-gradient-to-br from-pink-400 to-purple-400 text-white px-4 py-2 rounded-lg shadow-sm text-center flex-1 max-w-[160px]">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-1">
                            <UsersIcon className="w-3 h-3" />
                          </div>
                          <h5 className="text-xs font-bold mb-0.5">Colaboradores</h5>
                          <p className="text-blue-100 text-xs">Desenvolvedores de ciências da computação - IFMA</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 text-center mt-6 pt-6 border-t">
                      O desenvolvimento da plataforma conta com o trabalho de estagiários acadêmicos 
                      do curso de Ciência da Computação, unindo conhecimentos tecnológicos aos 
                      parâmetros de gênero e sexualidade.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}