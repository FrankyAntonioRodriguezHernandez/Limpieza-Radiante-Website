import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Curved Top Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-teal-500" style={{
        clipPath: 'ellipse(100% 100% at 50% 0%)'
      }}></div>

      {/* Background Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-100 rounded-full opacity-30 animate-gentle-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-yellow-500">Complete</span>{' '}
                <span className="text-teal-600">satisfaction</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <span className="font-semibold text-teal-600">Company LimpiezaRadiante</span>, we offer professional house cleaning services that are tailored to meet your unique needs. Our team of experienced cleaners uses eco-friendly products and the latest cleaning techniques to ensure your home is spotless and healthy.
                </p>
                <p>
                  We believe in putting our clients first and delivering exceptional service that exceeds their expectations.
                </p>
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main circular background */}
              <div className="w-96 h-96 bg-gray-100 rounded-full relative animate-gentle-float">
                {/* Sun illustration */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full relative">
                    {/* Sun rays */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-6 h-6 bg-yellow-400"
                        style={{
                          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                          transform: `rotate(${i * 45}deg)`,
                          transformOrigin: '50% 100%',
                          top: '-12px',
                          left: '50%',
                          marginLeft: '-12px'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Cleaning supplies illustration */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-end space-x-4">
                    {/* Spray bottle */}
                    <div className="w-16 h-20 bg-teal-500 rounded-lg relative">
                      <div className="w-4 h-6 bg-teal-600 rounded-t-lg absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
                      <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80"></div>
                      <div className="absolute top-6 left-2 right-2 h-1 bg-white opacity-60 rounded"></div>
                    </div>

                    {/* Vacuum cleaner */}
                    <div className="w-20 h-24 bg-teal-600 rounded-lg relative">
                      <div className="w-6 h-8 bg-gray-300 rounded absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                      <div className="w-12 h-3 bg-gray-400 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Sparkles */}
                <div className="absolute top-20 right-16 w-4 h-4 bg-teal-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute top-32 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce-slow"></div>
                <div className="absolute bottom-32 left-12 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-24 left-20 w-3 h-3 bg-yellow-300 transform rotate-45 animate-bounce-slow"></div>

                {/* Person silhouette */}
                <div className="absolute bottom-8 right-16 w-12 h-16 bg-teal-400 rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;