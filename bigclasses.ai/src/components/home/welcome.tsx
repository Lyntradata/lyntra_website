import React, { useState } from "react";

const Welcome = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const highlights = [
    "Very interactive and career oriented sessions",
    "Recorded Sessions for your reference even after the course completion",
    "Unlimited access to Digital Library to master your course",
    "Flexible batch timings for working professionals",
    "Goal oriented, comprehensive training based on your specific learning needs",
    "24X7 technical support team via Phone, Email and Chat",
    "Certified industry experts as trainers"
  ];

  const colors = ['blue', 'orange', 'red', 'maroon', 'blue', 'orange', 'red'];

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'text-blue-600',
      orange: 'text-orange-500',
      red: 'text-red-600',
      maroon: 'text-red-900'
    };
    return colorMap[color];
  };

  return (
    <section className="-mt-10 pt-8 pb-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500"></div>
            <span className="text-sm font-semibold tracking-widest text-gray-500">PREMIER IT TRAINING</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Introducing <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Lyntra Data</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are proud to be one of the leading IT online training providers in the industry.
            We are into online training with much passion and dedication from many years.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Left - Training Highlights */}
          <div className="relative flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Training at a<span className="text-blue-600"> Glance </span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-red-600"></div>
            </div>

            {/* Point-wise List */}
            <div className="space-y-3">
              {highlights.map((text, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="group flex items-start gap-3 transition-all duration-300"
                >
                  {/* Bullet Point */}
                  <div className="flex-shrink-0 mt-1.5">
                    <span className={`text-xl font-bold transition-all duration-300 ${
                      activeIndex === idx 
                        ? getColorClass(colors[idx])
                        : 'text-gray-400'
                    }`}>
                      »
                    </span>
                  </div>

                  {/* Text */}
                  <p className={`text-base md:text-lg leading-relaxed transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'text-gray-900 font-medium translate-x-1'
                      : 'text-gray-700'
                  }`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Single Large Image */}
          <div className="relative h-full">
            <div className="relative group overflow-hidden h-full min-h-[200px] md:min-h-[260px] lg:min-h-[320px] max-h-[360px] rounded-2xl shadow-2xl max-w-[520px] mx-auto">
              <img
                src="/images/welcome.webp"
                alt="Learning Platform"
                className="w-full h-auto object-cover max-h-[320px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-4xl font-bold">10,000+</p>
                  <p className="text-xl">Students Trained</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;