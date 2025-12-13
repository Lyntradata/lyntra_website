import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { features } from "@/components/home/FeaturesSection";
import Navbar from "@/components/layout/Navbar";
import PlacementAssistance from "@/components/home/PlacementAssistance";
import Footer from "@/components/layout/Footer";

const getCustomDescription = (featureId) => {
  const descriptions = {
    'ai-learning': "Unlock a personalized learning experience! Our AI-powered system adapts to your learning style, ensuring the content is tailored to your pace and strengths. Say goodbye to one-size-fits-all learning and enjoy an experience designed just for you.",
    'interactive-discussions': "Engage in meaningful discussions with your peers and instructors. Bigclasses.ai fosters an interactive learning environment where you can ask questions, share ideas, and collaborate on projects—ensuring you never learn in isolation.",
    'progress-tracking': "Stay on track with our real-time progress tracking tools. You can easily monitor your learning milestones, set goals, and get immediate feedback on your performance, keeping you motivated and focused.",
    'self-paced': "With Bigclasses.ai, you control your learning journey. Whether you prefer to speed through lessons or take your time, our flexible platform allows you to learn whenever and however works best for you.",
    'coding-exercises': "Put theory into practice with hands-on coding exercises. Learn by doing and gain the confidence to apply your skills to real-world problems. Our interactive exercises help solidify your knowledge and improve problem-solving abilities.",
    'video-lectures': "Access high-quality, HD video lectures anytime, anywhere. Our expert instructors break down complex topics into easy-to-understand lessons, ensuring that you can learn at your own pace while enjoying crystal-clear visuals and explanations."
  };
  return descriptions[featureId] || "Enhance your learning experience with this powerful feature.";
};

const getFeatureBenefits = (featureId) => {
  const benefits = {
    'ai-learning': [
      "Adaptive quizzes to reinforce weak areas",
      "Intelligent reminders to keep you on track",
      "Automated content recommendations based on your progress"
    ],
    'interactive-discussions': [
      "Live Q&A sessions to resolve doubts instantly",
      "Collaborative project spaces to work with fellow learners",
      "Community forums moderated by experts"
    ],
    'progress-tracking': [
      "Detailed performance analytics to identify areas of improvement",
      "Goal-setting tools with milestone reminders",
      "Certificates of achievement to showcase your progress"
    ],
    'self-paced': [
      "Offline access to lessons for uninterrupted learning",
      "Customizable learning paths based on your goals",
      "Pause and resume features for seamless transitions"
    ],
    'coding-exercises': [
      "Real-time coding challenges with instant feedback",
      "Scenario-based tasks to simulate real-world applications",
      "Access to a sandbox environment for experimentation"
    ],
    'video-lectures': [
      "Downloadable resources and notes for offline reference",
      "Subtitles and multilingual support for wider accessibility",
      "Bookmarks and timestamps for easy navigation"
    ]
  };
  return benefits[featureId] || ["Enhanced learning efficiency", "Improved engagement", "Greater flexibility"];
};

const FeatureDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentFeature, setCurrentFeature] = useState(id || 'ai-learning');
  const navigate = useNavigate();

  useEffect(() => {
    if (id && id !== currentFeature) {
      setCurrentFeature(id);
    }
  }, [id]);

  const currentFeatureData = features.find(f => f.id === currentFeature) || features[0];

  const handleFeatureClick = (featureId) => {
    setCurrentFeature(featureId);
    navigate(`/feature-details/${featureId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    navigate('/#features', { replace: true });
    setTimeout(() => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Use shared site Navbar */}
      <Navbar />

      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-600 font-semibold transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Features
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Content Section */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Feature Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-orange-50 rounded-full">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {React.cloneElement(currentFeatureData.icon, { className: "w-4 h-4 text-white" })}
                </div>
                <span className="text-sm text-orange-600 font-semibold">{currentFeatureData.title}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Transform Your Learning Experience
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {getCustomDescription(currentFeature)}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <div className="space-y-3">
                {getFeatureBenefits(currentFeature).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Feature Navigation & Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Feature Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img
                  src={currentFeatureData.image}
                  alt={currentFeatureData.title}
                  className="w-full h-64 sm:h-72 object-cover object-right transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop';
                  }}
                />
              </div>

              {/* Feature Selection Cards - Scrollable */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">Explore Features</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureClick(feature.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                        currentFeature === feature.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          currentFeature === feature.id
                            ? 'bg-white/20'
                            : 'bg-white'
                        }`}>
                          {React.cloneElement(feature.icon, { 
                            className: `w-4 h-4 ${currentFeature === feature.id ? 'text-white' : 'text-orange-500'}` 
                          })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-semibold ${
                            currentFeature === feature.id ? 'text-white' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className={`text-xs ${
                            currentFeature === feature.id ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placement assistance + footer */}
      <PlacementAssistance />

      <Footer />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #dc2626);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #b91c1c);
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default FeatureDetail;