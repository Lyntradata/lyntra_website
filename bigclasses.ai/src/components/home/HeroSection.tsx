import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  
  const words = ["Learn Smarter", "Grow Faster", "Achieve More", "Build Better"];
  
  // Background images - use images placed in `public/images/`
  const backgroundImages = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2300);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleExploreCourses = () => {
    // If not on home, navigate first then scroll.
    const scrollToCourses = () => {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      // wait for route change and DOM render
      setTimeout(scrollToCourses, 250);
    } else {
      scrollToCourses();
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === imageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-orange-900/50"></div>
          </div>
        ))}
      </div>

      {/* Decorative animated elements */}
      <div className="hidden md:block absolute top-20 right-20 w-56 h-56 bg-orange-500/8 rounded-full blur-3xl z-[1]"></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl z-[1]"></div>

      {/* Floating elements */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl rotate-12 animate-float z-[1]"></div>
      <div className="hidden md:block absolute bottom-1/3 right-1/3 w-12 h-12 bg-orange-400/20 backdrop-blur-sm rounded-full animate-float-delayed z-[1]"></div>
      <div className="hidden md:block absolute top-2/3 right-1/4 w-20 h-20 bg-pink-400/20 backdrop-blur-sm rounded-3xl -rotate-12 animate-float-slow z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full shadow-md mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-white">Welcome to the Future of Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-white mb-2 drop-shadow-lg">Transform Your Career,</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn drop-shadow-lg">
              {words[wordIndex]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Experience intelligent learning that adapts to you. Our AI-powered platform creates personalized pathways, helping you master in-demand skills and land your dream job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button 
              onClick={handleGetStarted} 
              className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleExploreCourses}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-lg shadow-md hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/30"
            >
              Explore Courses
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-3 justify-center">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === imageIndex 
                    ? "w-8 bg-orange-400" 
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-12deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;