import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { ShineParticlesButton } from '../../../components/ShineParticlesButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 opacity-10 rounded-full transform translate-x-32 -translate-y-32 animate-gentle-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300 opacity-10 rounded-full transform -translate-x-24 translate-y-24 animate-float"></div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-600 to-gray-900" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Discover  <span className="text-yellow-300">a cleaner home</span>
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in a pristine living space with our exclusive cleaning packages tailored just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Image with Organic Shape */}
          <div className="relative">
            <div className="organic-shape-large bg-white p-8 animate-gentle-float">
              <img
                src="https://images.pexels.com/photos/4239040/pexels-photo-4239040.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clean and organized home"
                className="w-full h-52 md:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get Your Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="post-construction">Post-Construction</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your cleaning needs..."
                ></textarea>
              </div>

              <ShineParticlesButton
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span> 
                <Send className="h-5 w-5" />
              </ShineParticlesButton>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-6 w-6 text-teal-500" />
                  <span className="text-sm text-gray-600">+1 555-555-5556</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-6 w-6 text-teal-500" />
                  <span className="text-sm text-gray-600">info@limpiezaradiante.com</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="h-6 w-6 text-teal-500" />
                  <span className="text-sm text-gray-600">Ciudad de México</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;