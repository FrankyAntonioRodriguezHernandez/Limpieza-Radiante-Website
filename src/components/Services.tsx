import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Step into a cleaner space',
      description: 'Discover unmatched quality, eco-friendly and advanced house cleaning services. We use the latest and most effective cleaning techniques to ensure your home is spotless and fresh.',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      buttonText: 'Learn More',
      reverse: false
    },
    {
      title: 'Comfort & Convenience',
      description: 'We only use friendly products and equipment of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee.',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=600',
      buttonText: 'Discover more',
      reverse: true
    },
    {
      title: 'Tailored solutions',
      description: 'We offer a wide range of services of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee.',
      image: 'https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg?auto=compress&cs=tinysrgb&w=600',
      buttonText: 'Learn More',
      reverse: false
    },
    {
      title: 'Spotless Homes',
      description: 'Use this snippet to showcase various cleaning services that highlight our expertise and customer satisfaction. Duplicate the element to create a list that fits your needs.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600',
      buttonText: 'Continue reading',
      reverse: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {services.map((service, index) => (
          <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={`space-y-6 ${service.reverse ? 'lg:col-start-2' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {service.title.includes('cleaner') && (
                  <>
                    Step into a <span className="text-teal-600">cleaner</span> space
                  </>
                )}
                {service.title === 'Comfort & Convenience' && service.title}
                {service.title === 'Tailored solutions' && service.title}
                {service.title === 'Spotless Homes' && service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300">
                <span>{service.buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Image with Organic Shape */}
            <div className={`relative ${service.reverse ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                {/* Organic shape background */}
                <div className="organic-shape-service bg-white p-6 animate-gentle-float">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-3xl"
                  />
                </div>
                
                {/* Decorative elements */}
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full animate-bounce-slow opacity-80"></div>
                )}
                {index === 1 && (
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-300 rounded-full animate-float opacity-60"></div>
                )}
                {index === 2 && (
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-300 rounded-full animate-pulse opacity-70"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-200 opacity-10 rounded-full transform translate-x-48 animate-gentle-float"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-200 opacity-15 rounded-full transform -translate-x-40 animate-float"></div>
    </section>
  );
};

export default Services;