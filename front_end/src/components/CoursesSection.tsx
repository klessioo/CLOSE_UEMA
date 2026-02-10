import { useState } from 'react';
import { BookOpen, Award, Lock, ExternalLink } from 'lucide-react';
import { LoginModal } from './LoginModal';

interface CoursesSectionProps {
  isAuthenticated: boolean;
  onRequestLogin: () => void;
  onAuthChange: (authenticated: boolean) => void;
}

export function CoursesSection({ isAuthenticated, onRequestLogin, onAuthChange }: CoursesSectionProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCadastroClick = () => {
    // Redireciona para o fluxo de cadastro ou abre o modal se implementado no nível superior
    onRequestLogin(); 
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Container Principal de Acesso */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-10 md:p-16 items-center">
            {/* Lado Esquerdo - Informações */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Ambiente Virtual de Aprendizagem
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed">
                  O curso CLOSE é ministrado através da plataforma Moodle da UEMA. 
                  Acesse o ambiente para visualizar as videoaulas, materiais didáticos e realizar as atividades avaliativas.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="bg-pink-50 p-3 rounded-full">
                  <Award className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Certificação Garantida</h3>
                  <p className="text-pink-600">Emissão de certificado pela UEMA ao concluir</p>
                </div>
              </div>
            </div>

            {/* Lado Direito - Card de Acesso */}
            <div className="flex justify-center md:justify-end">
              {!isAuthenticated ? (
                <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                  
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Acesso Restrito</h3>
                    <p className="text-gray-500 mt-2">Faça login para entrar na sala de aula virtual</p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleLoginClick}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Entrar no Curso
                    </button>
                    
                    <div className="text-center pt-2">
                      <span className="text-gray-500">Ainda não tem cadastro? </span>
                      <button
                        onClick={handleCadastroClick}
                        className="text-pink-600 hover:text-pink-800 font-bold hover:underline transition-colors"
                      >
                        Criar conta gratuita
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-md bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex flex-col items-center text-center mb-8">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Acesso Liberado</h3>
                    <p className="text-purple-100 mt-2">Bem-vindo(a) de volta!</p>
                  </div>

                  <a
                    href="https://moodle.org" // Placeholder, should be the real UEMA Moodle link if known
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 block w-full bg-white text-purple-600 text-center py-4 px-6 rounded-xl hover:bg-gray-50 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Acessar Moodle Agora
                  </a>
                  
                  <p className="text-center text-sm text-purple-100 mt-6 relative z-10 opacity-80">
                    Você será redirecionado para o ambiente seguro da UEMA
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLogin={() => {
          onAuthChange(true);
          setShowLoginModal(false);
        }}
      />
    </section>
  );
}
