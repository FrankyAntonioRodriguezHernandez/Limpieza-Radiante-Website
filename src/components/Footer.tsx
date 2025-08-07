import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ShineParticlesButton } from './ShineParticlesButton';
import { Link } from 'react-router-dom';
import { useScrollToHash } from './useScrollToHash';
import Logo from '../images/logo.jpg'

const Footer = () => {
  useScrollToHash();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12  flex items-center justify-center">
                <Link to="/#home"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#home") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}><img
                  src={Logo}
                  alt="Limpieza Radiante"
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block';
                  }}
                /></Link>
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
              <Link to="/#home" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#home") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Home
              </Link>

              <li><Link to="/services#AllServices" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/services" || location.pathname === "/services#AllServices") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("AllServices");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Services
              </Link></li>

              <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#about") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                About us
              </Link></li>

              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#contact") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Contact us
              </Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#cleaning1" className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={e => {
                    const el = document.getElementById("cleaning1");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>Residential Cleaning</Link></li>
              <li><Link to="/services#cleaning2" className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={e => {
                    const el = document.getElementById("cleaning2");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>Commercial Cleaning</Link></li>
              <li><Link to="/services#cleaning3" className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={e => {
                    const el = document.getElementById("cleaning3");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>Deep Cleaning</Link></li>
              <li><Link to="/services#cleaning4" className="text-gray-400 hover:text-white transition-colors duration-300"
                onClick={e => {
                    const el = document.getElementById("cleaning4");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>Restaurant cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Get in Touch</h3>
            <ShineParticlesButton className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
              <Link to="/#contact" 
                onClick={e => {
                  if (location.pathname === "/" || location.pathname === "/#contact") {
                    e.preventDefault(); // Prevenir la navegación si ya estás ahí
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                Get in Touch!
              </Link>
            </ShineParticlesButton>
            <Link to="/services#cleaning4" className="text-gray-400 hover:text-white transition-colors duration-300 "
                onClick={e => {
                    const el = document.getElementById("cleaning4");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>Privacy Policy</Link>
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