import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <i className="ri-timer-flash-line text-primary text-3xl mr-2"></i>
            <span className="text-2xl font-heading font-bold">Cronono</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <nav className="flex items-center space-x-1">
              <a href="#servicos" className="nav-link">Serviços</a>
              <a href="#eventos" className="nav-link">Eventos</a>
              <a href="#galeria" className="nav-link">Galeria</a>
              <a href="#contato" className="nav-link">Contato</a>
            </nav>
            <a href="#" className="hidden md:flex items-center text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
              <i className="ri-user-line mr-1"></i> Entrar
            </a>
            
            <button 
              className="md:hidden text-2xl" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#servicos" className="text-gray-dark font-medium hover:text-primary transition-all" onClick={closeMobileMenu}>Serviços</a>
            <a href="#eventos" className="text-gray-dark font-medium hover:text-primary transition-all" onClick={closeMobileMenu}>Eventos</a>
            <a href="#galeria" className="text-gray-dark font-medium hover:text-primary transition-all" onClick={closeMobileMenu}>Galeria</a>
            <a href="#contato" className="text-gray-dark font-medium hover:text-primary transition-all" onClick={closeMobileMenu}>Contato</a>
            <a href="#" className="flex items-center text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all" onClick={closeMobileMenu}>
              <i className="ri-user-line mr-1"></i> Entrar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
