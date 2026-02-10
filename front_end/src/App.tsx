import React, { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Courses } from "./components/sections/Courses";
import { About } from "./components/sections/About";
import { Footer } from "./components/Footer";
import { AuthModals } from "./components/auth/AuthModals";
import { Toaster } from "sonner";
import { ResetPasswordPage } from "./components/auth/ResetPasswordPage";

// Adicionamos 'reset-password' aos tipos de página
export type Page = 'home' | 'courses' | 'about' | 'reset-password';

export default function App() {
  const [authModalType, setAuthModalType] = useState<"login" | "register" | "forgot" | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [resetToken, setResetToken] = useState<string | null>(null);

  // Monitora a URL para capturar o token de recuperação
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    
    if (token) {
      setResetToken(token);
      setCurrentPage('reset-password');
      // Limpa a URL para o usuário não ficar vendo o token
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onRegister={() => setAuthModalType("register")} onNavigate={setCurrentPage} />;
      case 'courses':
        return <Courses onLoginReq={() => setAuthModalType("login")} />;
      case 'about':
        return <About />;
      case 'reset-password':
        return resetToken ? (
          <ResetPasswordPage 
            token={resetToken} 
            onSuccess={() => {
              setResetToken(null);
              setCurrentPage('home');
              setAuthModalType('login'); // Abre o login para ele testar a senha nova
            }} 
          />
        ) : (
          <Hero onRegister={() => setAuthModalType("register")} onNavigate={setCurrentPage} />
        );
      default:
        return <Hero onRegister={() => setAuthModalType("register")} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900 flex flex-col">
        <Toaster position="top-right" richColors />
        
        {/* Esconde a Navbar e Footer durante o Reset de senha para manter o foco */}
        {currentPage !== 'reset-password' && (
          <Navbar 
            onOpenAuth={() => setAuthModalType("login")} 
            currentPage={currentPage}
            onNavigate={setCurrentPage}
          />
        )}
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        {currentPage !== 'reset-password' && (
          <Footer onNavigate={setCurrentPage} />
        )}

        <AuthModals 
          type={authModalType} 
          onClose={() => setAuthModalType(null)} 
          onSwitch={(type) => setAuthModalType(type)}
        />
      </div>
    </AuthProvider>
  );
}