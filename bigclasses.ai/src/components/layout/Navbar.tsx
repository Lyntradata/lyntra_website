import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import startNowAnimation from "../../assets/animations/start_now_animation.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileFeatureDropdownOpen, setMobileFeatureDropdownOpen] = useState(false);
  const [mobileCourseDropdownOpen, setMobileCourseDropdownOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [mobileResourcesDropdownOpen, setMobileResourcesDropdownOpen] = useState(false);
  const [learningPathDropdownOpen, setLearningPathDropdownOpen] = useState(false);
  const learningPathTimeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingButton(scrollY >= 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileFeatureDropdownOpen(false);
    setMobileCourseDropdownOpen(false);
  };
  
  const toggleMobileCourseDropdown = () => {
    setMobileCourseDropdownOpen(!mobileCourseDropdownOpen);
  };
  
  const toggleMobileFeatureDropdown = () => {
    setMobileFeatureDropdownOpen(!mobileFeatureDropdownOpen);
  };
  
  const toggleMobileResourcesDropdown = () => {
    setMobileResourcesDropdownOpen(!mobileResourcesDropdownOpen);
  };
  
  const toggleLearningPathDropdown = () => {
    setLearningPathDropdownOpen(!learningPathDropdownOpen);
  };
  
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/#");
  };

  const handleFeatureClick = (featureId: string) => {
    navigate(`/features/${featureId}`);
    setIsMenuOpen(false);
    setMobileFeatureDropdownOpen(false);
  };

  const handleStartNowClick = () => {
    navigate("/signup");
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleContactClick = () => {
    // Removed phone dropdown functionality
  };

  const handleScrollToSection = (sectionId: string) => {
    navigate('/#');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  // Helper for navigation and scroll to top
  const navigateAndScrollTop = (path: string) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <>
      <style>{`
        @keyframes smoothVibration {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-2px); }
          50% { transform: translateY(0px); }
          75% { transform: translateY(2px); }
        }
        .vibrate-button {
          animation: smoothVibration 1s ease-in-out infinite;
        }
        .vibrate-button:hover {
          animation: smoothVibration 0.4s ease-in-out infinite;
        }
        
        /* Custom gradient button styles - now customizable */
        .gradient-button-primary {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
          color: white;
          transition: all 0.3s ease;
        }
        .gradient-button-primary:hover {
          box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
          transform: translateY(-1px) scale(1.05);
        }
        
        .gradient-button-secondary {
          background: linear-gradient(45deg, #8360c3, #2ebf91);
          box-shadow: 0 4px 15px rgba(131, 96, 195, 0.4);
          color: white;
          transition: all 0.3s ease;
        }
        
        .gradient-button-floating {
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          color: white;
          transition: all 0.3s ease;
        }
        .gradient-button-floating:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(255, 107, 107, 0.6);
        }

        /* Phone floating button styles - Updated for smaller size */
        .phone-floating-button {
          background: linear-gradient(135deg, #7c3aed, #8b5cf6, #a855f7);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
          color: white;
          transition: all 0.3s ease;
          animation: phoneVibration 2s ease-in-out infinite;
          border-radius: 50% 50% 50% 0%;
          position: relative;
        }
        .phone-floating-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.7);
          animation: phoneVibrationFast 0.5s ease-in-out infinite;
        }
        .phone-floating-button:active {
          transform: scale(1.05);
        }

        @keyframes phoneVibration {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-3px); }
          50% { transform: translateY(0px); }
          75% { transform: translateY(3px); }
        }

        @keyframes phoneVibrationFast {
          0%, 100% { transform: translateY(0px) scale(1.1); }
          25% { transform: translateY(-2px) scale(1.1); }
          50% { transform: translateY(0px) scale(1.1); }
          75% { transform: translateY(2px) scale(1.1); }
        }

        /* Phone widget styles */
        .phone-widget {
          position: fixed;
          right: 1rem;
          bottom: 1.25rem;
          z-index: 60;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .phone-circle {
          background: #00c853;
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,200,83,0.15);
          position: relative;
        }
        .phone-ring {
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 6px solid rgba(0,200,83,0.22);
          animation: pulse 1.6s infinite ease-out;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .phone-pill {
          background: #fff;
          padding: 6px 12px;
          border-radius: 9999px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
        }
        .phone-pill .number {
          color: #000000;
          font-weight: 700;
          font-size: 14px;
        }
      `}</style>
<nav className="bg-white h-14 sticky top-0 z-50 shadow-sm">
  <div className="w-full px-4 md:px-8 flex items-center justify-between h-full">
    {/* Logo - adjusted margin */}
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          navigateAndScrollTop("/#");
          setTimeout(() => handleScrollTo("hero"), 0);
        }}
        className="flex items-center gap-2"
      >
        <img
          src="\lovable-uploads\logo.webp"
          alt="Lyntra Data Logo"
          className="h-28 md:h-28 lg:h-30 w-auto pointer-events-none"
          style={{ display: 'block' }}
        />
      </button>
    </div>
    {/* Center Nav Links - adjusted spacing and width */}
    <div className="hidden md:flex justify-center items-center space-x-12 flex-1 max-w-3xl mx-auto px-4">
      <button
        onClick={() => {
          navigateAndScrollTop("/#");
          setTimeout(() => handleScrollTo("hero"), 0);
        }}
        className="text-black hover:text-blue-500 transition-colors whitespace-nowrap"
      >
        Home
      </button>
      <div className="relative group">
        <a
          href="#courses"
          className="text-black hover:text-primary transition-colors flex items-center space-x-2 whitespace-nowrap"
        >
          <span>Courses</span>
          <svg
            className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a
            href="/data-analytics/"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Data Analytics
          </a>
          <a
            href="/python-programming"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Python Programming 
          </a>
          <a
            href="/machine-learning"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Machine Learning
          </a>
          <a
            href="/deep-learning"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Deep Learning
          </a>
          <a
            href="/natural-language-processing"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Natural Language Processing (NLP)
          </a>
          <a
            href="/generative-ai"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
           Generative AI
          </a>
          <a
            href="/langchain"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Langchain
          </a>
          <a
            href="/langgraph"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            LangGraph
          </a>
          <a
            href="/mlops"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            MLOps
          </a>
          <a
            href="/llmops"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            LLMOps
          </a>
         
          <a
            href="/ai-agents"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Agents
          </a>
            <a
            href="/ai-ethics"
            className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Ethics AI and Scaling AI system
          </a>
        </div>
      </div>

      <div className="relative group">
        <a
          href="#features"
          className="text-black hover:text-primary transition-colors flex items-center space-x-2 whitespace-nowrap"
        >
          <span>Features</span>
          <svg
            className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          {/* Feature links that navigate to specific feature tabs */}
          <button
            onClick={() => handleFeatureClick("hands-on-projects")}
            className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Hands-on Projects
          </button>
          <button
            onClick={() => handleFeatureClick("mentor-support")}
            className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Mentor Support
          </button>
          <button
            onClick={() => handleFeatureClick("career-services")}
            className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-sm text-gray-800"
          >
            Career Services
          </button>
          {/* Certifications removed */}
          {/* Link to view all features */}
          <button
            onClick={() => navigate("/features")}
            className="block w-full text-left px-6 py-3 bg-gray-50 hover:bg-gray-100 text-sm font-medium text-blue-600"
          >
            View All Features
          </button>
        </div>
      </div>
      {/* Testimonials removed from navbar */}
    </div>

    {/* Right Auth Buttons - adjusted margin */}
    <div className="hidden md:flex items-center ml-4 space-x-4">
      {isLoggedIn ? (
        <Button variant="outline" className="rounded-full px-6" onClick={handleLogout}>
          Sign out
        </Button>
      ) : (
        <Button
          className="rounded-full px-6 py-2 font-semibold bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
          onClick={() => navigate("/signup")}
        >
          Enroll Now
        </Button>
      )}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white py-6 px-4 shadow-lg">
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => {
            navigateAndScrollTop("/#");
            setTimeout(() => handleScrollTo("home"), 0);
          }}
          className="text-left text-black hover:text-blue-500 transition-colors py-2"
        >
          Home
        </button>
        {/* Courses dropdown for mobile */}
        <div className="py-2">
          <button
            onClick={toggleMobileCourseDropdown}
            className="w-full text-left flex items-center justify-between text-black hover:text-blue-500 transition-colors"
          >
            <span>Courses</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${mobileCourseDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileCourseDropdownOpen && (
            <div className="pl-4 flex flex-col space-y-2 mt-2">
              <button
                className="text-left text-gray-700 hover:text-blue-500"
                onClick={() => {
                  navigate("/data-analytics");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                Data Analytics
              </button>
              <button
                className="text-left text-gray-700 hover:text-blue-500"
                onClick={() => {
                  navigate("/python-programming");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                Python Programming
              </button>
              <button
                className="text-left text-gray-700 hover:text-blue-500"
                onClick={() => {
                  navigate("/machine-learning");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                Machine Learning
              </button>
              <button
                className="text-left text-gray-700 hover:text-blue-500"
                onClick={() => {
                  navigate("/deep-learning");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                Deep Learning
              </button>
              <button
                className="text-left text-gray-700 hover:text-blue-500"
                onClick={() => {
                  navigate("/natural-language-processing");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                NLP
              </button>
              <button
                className="text-left text-blue-600 font-medium"
                onClick={() => {
                  handleScrollTo("courses");
                  setIsMenuOpen(false);
                  setMobileCourseDropdownOpen(false);
                }}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>

        {/* Features dropdown for mobile - Now toggleable */}
        <div className="py-2">
          <button
            onClick={toggleMobileFeatureDropdown}
            className="w-full text-left flex items-center justify-between text-black hover:text-blue-500 transition-colors"
          >
            <span>Features</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${mobileFeatureDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileFeatureDropdownOpen && (
            <div className="pl-4 flex flex-col space-y-2 mt-2">
              <button
                onClick={() => handleFeatureClick("hands-on-projects")}
                className="text-left text-gray-700 hover:text-blue-500"
              >
                Hands-on Projects
              </button>
              <button
                onClick={() => handleFeatureClick("mentor-support")}
                className="text-left text-gray-700 hover:text-blue-500"
              >
                Mentor Support
              </button>
              <button
                onClick={() => handleFeatureClick("career-services")}
                className="text-left text-gray-700 hover:text-blue-500"
              >
                Career Services
              </button>
              {/* Certifications removed from mobile features */}
              <button
                onClick={() => {
                  navigate("/features");
                  setIsMenuOpen(false);
                  setMobileFeatureDropdownOpen(false);
                }}
                className="text-left font-medium text-blue-600"
              >
                View All Features
              </button>
            </div>
          )}
        </div>

        {/* Mobile Learning Path removed */}

        {/* Testimonials removed from mobile menu */}
        <div className="flex flex-col items-start sm:items-center space-y-4 pt-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center space-x-3">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <Button
                className="rounded-full w-full"
                onClick={() => {
                  toggleMenu();
                  handleLogout();
                }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <div className="flex flex-col space-y-3 w-full">
              <Button
                className="rounded-full w-full px-6 py-2 font-semibold bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
              >
                Enroll Now
              </Button>
              <div className="text-center py-2 text-gray-600 text-sm">
                Welcome! Ready to begin your learning journey?
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</nav>

{/* Floating Phone Widget */}
      {!isLoggedIn && showFloatingButton && (
        <>          
          {/* Floating Phone Widget */}
          <div className="phone-widget" role="group" aria-label="Contact via WhatsApp">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div 
                className="phone-circle" 
                onClick={() => handlePhoneCall('918328497113')} 
                role="button" 
                style={{ cursor: 'pointer' }}
              >
                <div className="phone-ring" aria-hidden="true"></div>
                <Phone size={18} />
              </div>
              <div className="phone-pill" onClick={() => handlePhoneCall('918328497113')} style={{ cursor: 'pointer' }}>
                <span className="number">8328497113</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;