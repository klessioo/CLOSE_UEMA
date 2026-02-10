import React from "react";
import { Lock, ExternalLink } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

export const Courses = ({ onLoginReq }: { onLoginReq: () => void }) => {
  const { isAuthenticated } = useAuth();

  const handleAccess = () => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para acessar os cursos.");
      onLoginReq();
    } else {
      window.open("https://moodle.uema.br", "_blank");
    }
  };

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Cursos</h2>
          <p className="text-gray-600">
            Acesse nossa plataforma de ensino a distância e inicie sua jornada de aprendizado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB1bml2ZXJzaXR5JTIwZGl2ZXJzZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MDIzMjcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Sala de aula" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/40 flex items-center justify-center">
              {!isAuthenticated && <Lock className="w-16 h-16 text-white/80" />}
            </div>
          </div>
          
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4 w-fit">
              Plataforma Moodle
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ambiente Virtual de Aprendizagem</h3>
            <p className="text-gray-600 mb-6">
              Acesse vídeo-aulas, materiais complementares e certificação oficial da UEMA diretamente pelo Moodle.
            </p>
            
            <Button onClick={handleAccess} className="w-full">
              {isAuthenticated ? (
                <>Acessar Moodle <ExternalLink className="ml-2 w-4 h-4" /></>
              ) : (
                <>Fazer Login para Acessar <Lock className="ml-2 w-4 h-4" /></>
              )}
            </Button>
            
            {!isAuthenticated && (
              <p className="text-xs text-center text-gray-500 mt-3">
                É necessário cadastro gratuito para visualizar o conteúdo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
