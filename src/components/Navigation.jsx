import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (hash) => {
    const currentHash = location.hash || window.location.hash;
    return currentHash === hash;
  };

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <span className="material-symbols-outlined text-primary text-3xl">eco</span>
          <h1 className="text-xl font-black tracking-tighter uppercase">Escuta das Plantas</h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/bio"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/bio') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Bio
          </Link>
          <Link
            to="/gallery"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/gallery') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Galeria
          </Link>
          <Link
            to="/videos"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/videos') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Vídeos
          </Link>
          <Link
            to="/practice"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/practice') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Prática
          </Link>
          <Link
            to="/agenda"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/agenda') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Agenda
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              isRouteActive('/contact') ? 'text-primary' : 'hover:text-primary'
            }`}
          >
            Contato
          </Link>
        </div>

        <button
          className="md:hidden material-symbols-outlined"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">
            <Link
              to="/bio"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/bio') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Bio
            </Link>
            <Link
              to="/gallery"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/gallery') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Galeria
            </Link>
            <Link
              to="/videos"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/videos') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Vídeos
            </Link>
            <Link
              to="/practice"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/practice') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Prática
            </Link>
            <Link
              to="/agenda"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/agenda') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Agenda
            </Link>
            <Link
              to="/#philosophy"
              onClick={handleLinkClick}
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-left py-2"
            >
              Filosofia
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left py-2 ${
                isRouteActive('/contact') ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

