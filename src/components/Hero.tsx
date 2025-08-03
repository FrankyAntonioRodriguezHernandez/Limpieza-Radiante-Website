import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 opacity-20 rounded-full transform translate-x-32 -translate-y-32 animate-gentle-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300 opacity-15 rounded-full transform -translate-x-24 translate-y-24 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full animate-bounce-slow"></div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              The Revolution
              <br />
              <span className="text-yellow-300">in Home Cleaning</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in a pristine living space with our exclusive cleaning packages tailored just for you.
            </p>
          </div>

          {/* Hero Image with Organic Shape */}
          <div className="relative pt-10">
            <div className="relative max-w-2xl mx-auto">
              <div className="organic-shape bg-white p-8 animate-gentle-float">
                <img
                  src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Clean home interior"
                  className="w-full h-64 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;