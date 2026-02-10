import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { useAuth } from "../context/AuthContext";
import { Menu, X, LogOut, User, GraduationCap } from "lucide-react";
import { cn } from "../lib/utils";
import { Page } from "../App";

interface NavbarProps {
  onOpenAuth: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar = ({ onOpenAuth, currentPage, onNavigate }: NavbarProps) => {
  const { isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; id: Page }[] = [
    { label: 'Início', id: 'home' },
    { label: 'Cursos', id: 'courses' },
    { label: 'Sobre Nós', id: 'about' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 border-b-[3px] border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
      )}
      style={{
        borderImage: 'linear-gradient(90deg, #e40303, #ff8c00, #ffed00, #008026, #24408e, #732982) 1'
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('home')}>
          <GraduationCap className="w-8 h-8 text-purple-600" />
          <span className={cn("text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent")}>
            CLOSE
          </span>
        </div>

        {/* Desktop Nav - Separated Tabs */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => handleNavigation(item.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm border",
                currentPage === item.id 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-md"
                  : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border-gray-100 hover:border-transparent bg-gray-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 border border-purple-200">
                  <User size={18} />
               </div>
               <Button variant="ghost" onClick={logout} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                 <LogOut className="w-4 h-4 mr-2" /> Sair
               </Button>
            </div>
          ) : (
            <Button onClick={onOpenAuth} className="rounded-full px-6">
              Entrar
            </Button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          {navItems.map((item) => (
             <button 
               key={item.label} 
               onClick={() => handleNavigation(item.id)} 
               className={cn(
                 "text-left font-medium p-3 rounded-lg transition-colors",
                 currentPage === item.id
                   ? "bg-purple-50 text-purple-600" 
                   : "bg-gray-50 hover:bg-purple-50 hover:text-purple-600"
               )}
             >
               {item.label}
             </button>
          ))}
          <hr />
          {isAuthenticated ? (
            <Button variant="ghost" onClick={logout} className="justify-start text-red-500">
              <LogOut className="w-4 h-4 mr-2" /> Sair
            </Button>
          ) : (
            <Button onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }} className="w-full">
              Entrar / Cadastrar
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
