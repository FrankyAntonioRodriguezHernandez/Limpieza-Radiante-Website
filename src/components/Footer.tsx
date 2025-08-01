import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <img 
                  src="/public/logo.jpeg" 
                  alt="Limpieza Radiante" 
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                <div className="w-8 h-8 bg-white rounded-full hidden items-center justify-center">
                  <span className="text-teal-500 font-bold text-sm">LR</span>
                </div>
              </div>
              <span className="text-xl font-bold">LIMPIEZA RADIANTE</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services that transform your space into a pristine environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Residential Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Commercial Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Deep Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Get in Touch</h3>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get in touch
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            2025© Spark Cleaning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;