// src/App.tsx
import React, { useEffect } from 'react';
import { FloatingShape, WaveShape } from './components/Shapes';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Configurar el efecto de desplazamiento para la sección de portada
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const coverSection = document.querySelector('.s_cover') as HTMLElement;
      if (coverSection) {
        const backgroundPosition = 50 - scrollPosition * 0.1;
        coverSection.style.backgroundPosition = `50% ${backgroundPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white">
      {/* Sección de portada */}
      <section 
        className="s_cover relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80')" }}
      >
        <div className="o_we_bg_filter absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Forma flotante animada */}
        <FloatingShape className="absolute inset-0" />
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="display-3 text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Revolution <br/> in Home Cleaning
          </h1>
          <p className="mb-8"></p>
          <p>
            <a 
              className="o_translate_inline btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              href="/our-services"
            >
              Learn more about our services
            </a>
          </p>
        </div>
      </section>

      {/* Sección de texto e imagen */}
      <section className="s_text_image relative py-20 md:py-32">
        <WaveShape className="absolute bottom-0 left-0 w-full h-48 md:h-64" flip="x" />
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-5/12 mb-12 md:mb-0">
              <h2 className="h3-fs text-3xl md:text-4xl font-bold mb-6">
                <span 
                  className="text-gradient bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: "linear-gradient(135deg, #4f6df5 0%, #3aa9f5 100%)"
                  }}
                >
                  Complete satisfaction
                </span>
              </h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                At LimpiezaRadiante, we offer professional house cleaning services that are tailored to meet your unique needs. 
                Our team of experienced cleaners uses eco-friendly products and the latest cleaning techniques to ensure your home is spotless and healthy.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                We believe in putting our clients first and delivering exceptional service that exceeds their expectations.
              </p>
              <p>
                <a 
                  className="o_translate_inline btn btn-secondary bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                  href="/about-us"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="w-full md:w-6/12 md:ml-12">
              <div className="relative">
                <div className="bg-blue-100 rounded-full w-64 h-64 md:w-80 md:h-80 absolute -top-6 -left-6 -z-10 animate-pulse"></div>
                <div className="bg-blue-200 rounded-full w-80 h-80 absolute -bottom-6 -right-6 -z-10 animate-pulse delay-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80" 
                  alt="Limpieza Radiante" 
                  className="rounded-full border-8 border-white shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de imagen central */}
      <section className="s_picture relative py-20 md:py-32 bg-blue-50">
        <WaveShape className="absolute bottom-0 left-0 w-full h-48 md:h-64" flip="y" color="blue" />
        
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover a cleaner home
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Immerse yourself in a pristine living space with our exclusive cleaning packages tailored just for you.
          </p>
          <div className="pt-6">
            <figure className="relative">
              <div className="bg-blue-200 rounded-full w-40 h-40 absolute -top-4 -right-4 -z-10 animate-pulse"></div>
              <div className="bg-blue-100 rounded-full w-32 h-32 absolute -bottom-4 -left-4 -z-10 animate-pulse delay-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578021558-9b2b2d2b3b3e?q=80" 
                alt="Cleaning process" 
                className="rounded-xl shadow-xl mx-auto w-full max-w-3xl"
              />
              <figcaption className="figure-caption text-gray-500 py-6 italic max-w-2xl mx-auto">
                Watch as we meticulously clean every corner of your home, providing a refreshing atmosphere for you and your family.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Sección de imagen y texto alternada */}
      <section className="s_image_text relative py-20 md:py-32">
        <WaveShape className="absolute top-0 left-0 w-full h-48 md:h-64" flip="y" color="blue" />
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-6/12 mb-12 md:mb-0">
              <div className="relative">
                <div className="bg-blue-100 rounded-full w-64 h-64 absolute -top-6 -right-6 -z-10 animate-pulse"></div>
                <div className="bg-blue-200 rounded-full w-72 h-72 absolute -bottom-6 -left-6 -z-10 animate-pulse delay-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80" 
                  alt="Clean space" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-5/12 md:ml-12">
              <h2 className="h3-fs text-3xl md:text-4xl font-bold mb-6">
                <span 
                  className="text-gradient bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: "linear-gradient(135deg, #4f6df5 0%, #3aa9f5 100%)"
                  }}
                >
                  Step into a cleaner space
                </span>
              </h2>
              <p className="mb-4 text-gray-600 leading-relaxed">
                At LimpiezaRadiante, we offer professional house cleaning services that are tailored to meet your unique needs. 
                Our team of experienced cleaners uses eco-friendly products and the latest cleaning techniques to ensure your home is spotless and healthy.
              </p>
              <p className="mb-6 text-gray-600 leading-relaxed">
                We believe in putting our clients first and delivering exceptional service that exceeds their expectations.
              </p>
              <p>
                <a 
                  className="o_translate_inline btn btn-secondary bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                  href="/about-us"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de lista de medios */}
      <section className="s_media_list relative py-20 bg-gray-50">
        <FloatingShape className="absolute top-0 left-0 w-full h-full opacity-10" />
        
        <div className="container px-4 mx-auto">
          <div className="space-y-16">
            {/* Primer elemento */}
            <div className="s_media_list_item">
              <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full md:w-6/12">
                  <img 
                    src="https://images.unsplash.com/photo-1615529162924-f86053891ef1?q=80" 
                    alt="Comfort & Convenience" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-6/12 p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Comfort & Convenience
                  </h3>
                  <p className="mb-6 text-gray-600">
                    We only use eco-friendly products and equipment of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                    Discover more <i className="fas fa-long-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Segundo elemento (invertido) */}
            <div className="s_media_list_item">
              <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full md:w-6/12">
                  <img 
                    src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80" 
                    alt="Tailored solutions" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-6/12 p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Tailored solutions
                  </h3>
                  <p className="text-gray-600">
                    We only use eco-friendly products and equipment of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Tercer elemento */}
            <div className="s_media_list_item">
              <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full md:w-6/12">
                  <img 
                    src="https://images.unsplash.com/photo-1620231109648-302d034cb29b?q=80" 
                    alt="Spotless Homes" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-6/12 p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Spotless Homes
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Use this snippet to showcase various cleaning services that highlight our expertise and customer satisfaction. Duplicate the element to create a list that fits your needs.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                    Continue reading <i className="fas fa-long-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto text-center">
          <p>© 2023 LimpiezaRadiante. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Professional home cleaning services</p>
        </div>
      </footer>
    </div>
  );
};

export default App;