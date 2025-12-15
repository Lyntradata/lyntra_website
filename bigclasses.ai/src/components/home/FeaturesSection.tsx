import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  MessageSquare,
  BarChart3,
  Clock,
  Code,
  Video,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: "ai-learning",
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Intelligent Learning Powered by AI",
    description:
      "Experience personalized learning paths, smart recommendations, and real-time support—all driven by advanced artificial intelligence.",
    image: "/images/feature1.webp", // Update with your actual filename
  },
  {
    id: "interactive-discussions",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Live Doubt-Clearing & Discussions",
    description:
      "Get your doubts resolved instantly through live, interactive sessions designed to enhance clarity and confidence.",
    image: "/images/feature2.webp", // Update with your actual filename
  },
  {
    id: "progress-tracking",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Smart Progress Analytics",
    description:
      "Our intelligent system analyzes your activity and gives clear insights into how far you've come and what to improve next.",
    image: "/images/feature3.webp", // Update with your actual filename
  },
  {
    id: "self-paced",
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Flexible Self-Paced Learning",
    description:
      "Access lessons anytime and progress as fast or slow as you need—without feeling rushed or pressured.",
    image: "/images/feature4.webp", // Update with your actual filename
  },
  {
    id: "coding-exercises",
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Practical Coding Exercises",
    description:
      "Strengthen your skills with real-world coding tasks designed to build confidence and mastery through practice.",
    image: "/images/feature5.webp", // Update with your actual filename
  },
  {
    id: "video-lectures",
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "Immersive High-Definition Learning",
    description:
      "Experience learning like never before with visually rich HD videos that keep you focused and engaged.",
    image: "/images/feature6.webp", // Update with your actual filename
  },
];

export { features };

const FeaturesSection = () => {
  return (
    <section id="features" className="py-8 md:py-12 bg-gradient-to-br from-white via-orange-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Why <span className="text-orange-600">Lyntra Data</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Our platform combines cutting-edge AI technology with expert-crafted content to deliver an unparalleled learning experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            // Determine if icon should be on left (1, 4, 6) or right (2, 3, 5)
            const iconOnLeft = [0, 3, 5].includes(index);
            
            return (
              <Link
                key={feature.id}
                to={`/feature-details/${feature.id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-orange-100 hover:border-orange-300">
                  <div className={`flex ${iconOnLeft ? 'flex-row' : 'flex-row-reverse'} items-start gap-4 p-4 sm:p-5 md:p-6`}>
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                        {React.cloneElement(feature.icon, {
                          className: "h-7 w-7 sm:h-8 sm:w-8 text-orange-600"
                        })}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`flex-1 ${iconOnLeft ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 text-orange-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300`}>
                        <span>Learn more</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;