import { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';

interface HeaderProps {
  activeTab: 'inicio' | 'curso' | 'sobre';
  onTabChange: (tab: 'inicio' | 'curso' | 'sobre') => void;
  isAuthenticated: boolean;
  onAuthChange: (authenticated: boolean) => void;
}

export function Header({ activeTab, onTabChange, isAuthenticated, onAuthChange }: HeaderProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b-4 border-transparent" style={{borderImage: 'linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #24408e, #732982) 1'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Close
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => onTabChange('inicio')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'inicio'
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => onTabChange('curso')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'curso'
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Cursos
              </button>
              <button
                onClick={() => onTabChange('sobre')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'sobre'
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Sobre Nós
              </button>
            </nav>

            {/* Login Button */}
            {!isAuthenticated ? (
              <div className="flex gap-3">
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Cadastro
                </button>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
                >
                  Login
                </button>
              </div>
            ) : (
              <button
                onClick={() => onAuthChange(false)}
                className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Sair
              </button>
            )}
          </div>
        </div>
      </header>
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={() => {
          onAuthChange(true);
          setIsLoginOpen(false);
        }}
      />

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onRegister={() => {
          onAuthChange(true);
          setIsRegisterOpen(false);
        }}
      />
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onTabChange('inicio');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'inicio'
                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => {
                onTabChange('curso');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'curso'
                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              Cursos
            </button>
            <button
              onClick={() => {
                onTabChange('sobre');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'sobre'
                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              Sobre Nós
            </button>
          </nav>
        </div>
      )}
    </>
  );
}