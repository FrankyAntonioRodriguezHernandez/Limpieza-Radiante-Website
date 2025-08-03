import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ShineParticlesButton } from './ShineParticlesButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-sm sticky top-0 z-50 transition-colors duration-300 hover:bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-13 h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Limpieza Radiante" 
                className="w-14 h-14 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                }}
              />
              <div className="w-8 h-8 bg-white rounded-full hidden items-center justify-center">
                <span className="text-teal-500 font-bold text-sm">LR</span>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-950">Limpieza Radiante</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#services" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium">Services</a>
            <a href="#about" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium">About us</a>
            <a href="#contact" className="text-stone-950 hover:text-teal-600 transition-colors duration-300 font-medium">Contact us</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-stone-950">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 555-555-5556</span>
          </div>
            <ShineParticlesButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
              ¡Get in touch!
            </ShineParticlesButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 py-2">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 py-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 py-2">About us</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 py-2">Contact us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;