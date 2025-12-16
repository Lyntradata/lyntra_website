import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Layers, Headphones, Briefcase, RefreshCw, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import PlacementAssistance from "@/components/home/PlacementAssistance";
import Footer from "@/components/layout/Footer";

// Define the feature data structure
const subFeatures = [
  {
    id: "hands-on-projects",
    title: "Hands-on Projects",
    icon: Layers,
    description: "Apply your knowledge with real-world projects that build your portfolio and practical skills.",
    benefits: [
      "Our projects are designed based on real job roles and the skills that IT and AI companies are looking for.",
      "Students work on practical, real-world projects that match what companies actually use.",
      "We have a system that guides students to choose the right projects for their career goals.",
      "All projects are created after analyzing thousands of job listings to ensure they help students get hired.",
    ],
    detailContent: "Our hands-on projects are designed to reinforce theoretical concepts through practical application. Each project simulates real-world scenarios you'll encounter in your professional career. From building machine learning models to developing full-stack applications, these projects will not only solidify your understanding but also provide valuable additions to your portfolio.",
    mediaType: "video",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=500&fit=crop",
    gradient: "from-orange-500 to-red-500",
    bgPattern: "bg-orange-50"
  },
  {
    id: "mentor-support",
    title: "Mentor Support",
    icon: Headphones,
    description: "Get guidance and support from industry experts who are dedicated to your success.",
    benefits: [
      "1-on-1 mentorship and mentoring sections with industry professionals.",
      "24/7 chat support on every class video using AI.",
      "Automated Assignments evaluation and code feedback using AI.",
      "Career Advice with industry professionals.",
    ],
    detailContent: "Our mentorship program connects you with experienced professionals who are passionate about helping you succeed. Through scheduled 1-on-1 sessions, you'll receive personalized guidance tailored to your learning goals and career aspirations. Mentors provide code reviews, help troubleshoot challenges, and share valuable insights from their industry experience.",
    mediaType: "video",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "bg-blue-50"
  },
  {
    id: "career-services",
    title: "Career Services",
    icon: Briefcase,
    description: "Prepare for your career with resume reviews, interview preparation, and job search strategies.",
    benefits: [
      "Resume and LinkedIn profile optimization to showcase your skills effectively.",
      "Mock interviews with feedback to prepare for technical and behavioral questions.",
      "Job search strategies, networking tips, and salary negotiation guidance.",
      "Comprehensive support to transition smoothly from education to employment.",
    ],
    detailContent: "Our comprehensive career services are designed to bridge the gap between education and employment. We'll help you craft a compelling resume that highlights your newly acquired skills and projects. Our career coaches conduct mock interviews to prepare you for technical and behavioral questions. Additionally, we provide guidance on job search strategies and salary negotiation.",
    mediaType: "video",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop",
    gradient: "from-orange-400 to-amber-500",
    bgPattern: "bg-amber-50"
  },
];

const FeatureOverview = () => {
  const [activeFeature, setActiveFeature] = useState(subFeatures[0].id);
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  const handleFeatureClick = (featureId) => {
    if (activeFeature !== featureId) {
      setActiveFeature(featureId);
      setKey((prevKey) => prevKey + 1);
    }
  };

  const activeFeatureData = subFeatures.find(
    (feature) => feature.id === activeFeature
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium">Empowering Your Learning Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-blue-200 bg-clip-text text-transparent">
              Our Premium Features
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Discover the tools and services that will accelerate your learning journey and prepare you for success in the tech industry.
            </p>
          </div>
        </div>
        
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Features Navigation - Card Style */}
      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => handleFeatureClick(feature.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-br ' + feature.gradient + ' text-white shadow-2xl'
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all ${
                  activeFeature === feature.id
                    ? 'bg-white/20 backdrop-blur-sm'
                    : 'bg-gradient-to-br ' + feature.gradient
                }`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                
                <div className={`h-1 w-12 rounded-full transition-all duration-300 ${
                  activeFeature === feature.id ? 'bg-white' : 'bg-gradient-to-r ' + feature.gradient
                }`}></div>
                
                {activeFeature === feature.id && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${feature.gradient}`}></div>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Content */}
      {activeFeatureData && (
        <div className="py-8 md:py-16">
          <div className="space-y-0">
            {/* Full Width Image Section with Overlay Content */}
            <div className="relative w-full">
              <img
                key={`image-${activeFeature}-${key}`}
                src={activeFeatureData.imageSrc}
                alt={activeFeatureData.title}
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Content Overlay on Image */}
              <div className="absolute inset-0 flex items-end">
                <div className="container mx-auto px-4 md:px-6 pb-6 md:pb-10">
                  <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${activeFeatureData.gradient} flex items-center justify-center shadow-lg`}>
                      {React.createElement(activeFeatureData.icon, {
                        className: 'h-6 w-6 md:h-8 md:w-8 text-white'
                      })}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {activeFeatureData.title}
                    </h2>
                  </div>
                  
                  <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl">
                    {activeFeatureData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Content - Full Width */}
            <div className={`w-full ${activeFeatureData.bgPattern}`}>
              <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">

                {/* Two Cards Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  {/* Benefits Card */}
                  <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-orange-500">
                    <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeFeatureData.gradient}`}></div>
                      Key Benefits
                    </h3>
                    <ul className="space-y-3 md:space-y-4">
                      {activeFeatureData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-gray-700">
                          <div className={`mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br ${activeFeatureData.gradient} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details Card */}
                  <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-xl md:text-2xl mb-4 md:mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                      Why It Matters
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {activeFeatureData.detailContent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl md:rounded-3xl p-6 md:p-10 text-center text-white shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto px-4">
              Join thousands of students who are already building their future with our comprehensive learning platform.
            </p>
            <button onClick={() => navigate('/signup')} className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <PlacementAssistance />
      <Footer />
    </div>
  );
};

export default FeatureOverview;