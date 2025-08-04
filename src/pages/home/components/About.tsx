import { ArrowRight } from 'lucide-react';
import { ShineParticlesButton } from '../../../components/ShineParticlesButton';

import Slider from 'react-slick';
import { FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Maria Lopez",
    testimonial: "Absolutely amazing service! My home has never looked better.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    color: "#F5F3FF",
  },
  {
    name: "James Smith",
    testimonial: "Very professional and reliable. Highly recommend.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    color: "#FEF3C7",
  },
  {
    name: "Sofia Rivera",
    testimonial: "Super detailed cleaning, eco-friendly products. Perfect!",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "#D1FAE5",
  },
  {
    name: "Carlos Pérez",
    testimonial: "Fast, trustworthy, and the house smells fresh every time.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
    color: "#DBEAFE",
  },
];

const description = 'We offer professional house cleaning services that are tailored to meet your unique needs. Our team of experienced cleaners uses eco-friendly products and the latest cleaning techniques to ensure your home is spotless and healthy.';

type StarRatingProps = { rating: number };
const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex justify-center">
    {[1,2,3,4,5].map(i =>
      i <= rating
        ? <FaStar key={i} className="text-yellow-400" />
        : <FaRegStar key={i} className="text-yellow-400" />
    )}
  </div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
  appendDots: (dots: any) => (
    <div style={{ position: 'absolute', bottom: '-30px', width: '100%', textAlign: 'center' }}>
      <ul style={{ margin: 0, padding: 0, display: 'inline-block' }}>{dots}</ul>
    </div>
  ),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-200 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-300 bg-teal-500"
        style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
      ></div>

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
                className="w-full h-96 object-cover rounded-3xl"
              />

              <div className="absolute top-20 right-16 w-4 h-4 bg-teal-400 transform rotate-45 animate-pulse"></div>
              <div className="absolute top-32 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-32 left-12 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-24 left-20 w-3 h-3 bg-yellow-300 transform rotate-45 animate-bounce-slow"></div>
            </div>
          </div>
        </div>

        {/* Carrusel de testimonios centrado y separado */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Customer Testimonials</h3>
          <div className="relative">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex items-stretch px-2 md:px-4">
                  <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl text-center w-full h-auto mx-2 min-h-[340px] flex flex-col justify-between border border-gray-100">
                    <div className="flex justify-center mb-4">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
                    <p className="mt-4 text-gray-800 italic font-serif">"{testimonial.testimonial}"</p>
                    <div className="mt-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
