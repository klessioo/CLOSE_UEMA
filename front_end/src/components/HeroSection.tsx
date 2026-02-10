import { BookOpen, Users, Award, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Letramento sobre questões LGBTQIAPN+
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Plataforma digital para ofertar embasamento teórico sobre questões LGBTQIAPN+, 
              auxiliando no processo de construção de uma realidade social mais equitativa, 
              com foco no Estado do Maranhão. Participe do nosso letramento sobre questões 
              de gênero e diversidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg text-lg font-medium">
                Começar Agora
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-lg font-medium">
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Ilustração Abstrata */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-100 to-orange-200 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-shadow border-2 border-red-200">
                <BookOpen className="w-12 h-12 text-red-600" />
                <p className="font-semibold text-gray-800">Cursos sobre Diversidade</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-green-200 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-shadow mt-8 border-2 border-green-200">
                <Users className="w-12 h-12 text-green-700" />
                <p className="font-semibold text-gray-800">Comunidade Inclusiva</p>
              </div>
              <div className="bg-gradient-to-br from-blue-200 to-purple-300 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-shadow -mt-8 border-2 border-blue-300">
                <Award className="w-12 h-12 text-blue-800" />
                <p className="font-semibold text-gray-800">Certificação</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg transition-shadow border-2 border-purple-400">
                <Zap className="w-12 h-12 text-white" />
                <p className="font-semibold text-white">Capacitação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}