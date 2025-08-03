import { ArrowRight } from 'lucide-react';
import { ShineParticlesButton } from '../../../components/ShineParticlesButton';

const About = () => {
  const description = 'we offer professional house cleaning services that are tailored to meet your unique needs. Our team of experienced cleaners uses eco-friendly products and the latest cleaning techniques to ensure your home is spotless and healthy.';
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-300 bg-teal-500" style={{
        clipPath: 'ellipse(55% 100% at 50% 0%)'
      }}></div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-100 rounded-full opacity-30 animate-gentle-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-100 rounded-full opacity-20 animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-yellow-500">Complete</span>{' '}
                <span className="text-teal-600">satisfaction</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <span className="font-semibold text-teal-600">Company LimpiezaRadiante</span>, 
                </p>
                <p className="line-clamp-3 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            <ShineParticlesButton className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </ShineParticlesButton>
          </div>

          <div className="relative">
            <div className="organic-shape-large bg-teal-300 p-8 animate-gentle-float">
              <img
                src="https://images.pexels.com/photos/4239040/pexels-photo-4239040.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clean and organized home" 
                className="w-full h-96 object-cover rounded-3xl"/>

                <div className="absolute top-20 right-16 w-4 h-4 bg-teal-400 transform rotate-45 animate-pulse"></div>
                <div className="absolute top-32 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce-slow"></div>
                <div className="absolute bottom-32 left-12 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-24 left-20 w-3 h-3 bg-yellow-300 transform rotate-45 animate-bounce-slow"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;