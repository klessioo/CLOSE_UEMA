import { X, BookOpen, Clock, Users, Award, CheckCircle, ExternalLink, Lock } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  students: string;
  description: string;
}

interface CourseModalProps {
  module: Module | null;
  onClose: () => void;
  isAuthenticated: boolean;
  onRequestLogin: () => void;
}

export function CourseModal({ module, onClose, isAuthenticated, onRequestLogin }: CourseModalProps) {
  if (!module) return null;

  const lessons = [
    'Introdução aos conceitos fundamentais',
    'Prática guiada com exercícios',
    'Estudos de caso reais',
    'Projeto prático',
    'Avaliação e feedback'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header do Modal */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{module.title}</h2>
              <p className="text-purple-100">{module.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6">
          {/* Descrição */}
          <div>
            <p className="text-gray-600 leading-relaxed">{module.description}</p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Clock className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Duração</p>
              <p className="text-sm font-semibold text-gray-900">{module.duration}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Alunos</p>
              <p className="text-sm font-semibold text-gray-900">{module.students}</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Award className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Certificado</p>
              <p className="text-sm font-semibold text-gray-900">Sim</p>
            </div>
          </div>

          {/* Conteúdo do Módulo */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600" />
              Conteúdo do Módulo
            </h3>
            <ul className="space-y-1.5">
              {lessons.map((lesson, index) => (
                <li key={index} className="text-sm text-gray-600 pl-6 relative before:content-['•'] before:absolute before:left-2 before:text-purple-400">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          {/* Container de Acesso ao Moodle */}
          {isAuthenticated ? (
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Acessar o Curso no Moodle</h3>
                  <p className="text-sm text-purple-100">Assista às videoaulas e complete as atividades</p>
                </div>
              </div>
              <a
                href="https://moodle.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-purple-600 text-center py-3 px-6 rounded-lg hover:bg-purple-50 transition-all font-semibold shadow-lg"
              >
                Ir para a Plataforma Moodle
              </a>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 space-y-4 border-2 border-dashed border-gray-300">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Lock className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Acessar o Curso no Moodle</h3>
                  <p className="text-sm text-gray-600">Faça login para liberar o acesso</p>
                </div>
              </div>
              <button
                onClick={onRequestLogin}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-md"
              >
                Fazer Login para Acessar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}