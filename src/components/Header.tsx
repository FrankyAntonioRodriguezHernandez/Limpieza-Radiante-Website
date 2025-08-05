import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ShineParticlesButton } from './ShineParticlesButton';
import { Link } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash';
import Logo from '../images/logo.jpg';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollToHash();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null); // ref para botón
  const isMobile = useIsMobile();
  const listenersActive = useRef(false); // evita doble cierre

  // Solo activa listeners después de abrir el menú, para evitar cierre inmediato
  useEffect(() => {
    if (!isMenuOpen) {
      listenersActive.current = false;
      return;
    }

    const activateListeners = () => {
      listenersActive.current = true;
    };
    // Pequeño retraso: listeners activos DESPUÉS de abrir el menú
    const timer = setTimeout(activateListeners, 50);

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!listenersActive.current) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (!listenersActive.current) return;
      setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      listenersActive.current = false;
    };
  }, [isMenuOpen]);

  return (
    <header className={
      "shadow-sm sticky top-0 z-50 transition-colors duration-300 " +
      ((isMenuOpen && isMobile) ? "bg-white" : "bg-transparent hover:bg-white")
    }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Nombre */}
          <div className="flex items-center space-x-3 group">
            <div className="w-13 h-12 flex items-center justify-center">
              <Link to="/#home"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#home") {
                    e.preventDefault();
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                <img
                  src={Logo}
                  alt="Limpieza Radiante"
                  className="w-14 h-14 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                  }}
                />
              </Link>
              <div className="w-8 h-8 bg-white rounded-full hidden items-center justify-center">
                <span className="text-teal-500 font-bold text-sm">LR</span>
              </div>
            </div>
            <span className={"text-xl font-bold text-gray-950 transition-opacity duration-300 " +
              (isMenuOpen ? "opacity-100" : "opacity-0") + " md:opacity-100"
            }>
              Limpieza Radiante
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* ...tu navegación de desktop igual... */}
            <Link to="/#home" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
              onClick={e => {
                if (location.pathname === "/" || location.pathname === "/#home") {
                  e.preventDefault();
                  const el = document.getElementById("home");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Home
            </Link>
            <Link to="/services#AllServices" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
              onClick={e => {
                if (location.pathname === "/services" || location.pathname === "/services#AllServices") {
                  e.preventDefault();
                  const el = document.getElementById("AllServices");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Services
            </Link>
            <Link to="/#about" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
              onClick={e => {
                if (location.pathname === "/" || location.pathname === "/#about") {
                  e.preventDefault();
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              About us
            </Link>
            <Link to="/#contact" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
              onClick={e => {
                if (location.pathname === "/" || location.pathname === "/#contact") {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              Contact us
            </Link>
          </nav>
          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-stone-950">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 555-555-5556</span>
            </div>
            <ShineParticlesButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
              <Link to="/#contact"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#contact") {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Get in Touch!
              </Link>
            </ShineParticlesButton>
          </div>
          {/* Botón menú móvil o cerrar, ambos en el mismo ref */}
          <div className="md:hidden" ref={menuButtonRef}>
            {!isMenuOpen ? (
              <button
                onClick={e => {
                  e.stopPropagation(); // evita propagación
                  setIsMenuOpen(true);
                }}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={e => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
        {/* Navegación móvil */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 relative bg-white rounded-b-xl shadow-lg" ref={menuRef}>
            <nav className="flex flex-col space-y-2">
              <Link to="/#home" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#home") {
                    e.preventDefault();
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}>
                Home
              </Link>
              <Link to="/services#AllServices" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/services" || location.pathname === "/services#AllServices") {
                    e.preventDefault();
                    const el = document.getElementById("AllServices");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}>
                Services
              </Link>
              <Link to="/#about" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#about") {
                    e.preventDefault();
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}>
                About us
              </Link>
              <Link to="/#contact" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#contact") {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                  setIsMenuOpen(false);
                }}>
                Contact us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
