import React from "react";
import { CheckCircle, Briefcase, BookOpenCheck, GraduationCap } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section id="placement-assistance" className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full">
              Your Success Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Career & <span className="block text-orange-500 mt-2">Job Support </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Receive structured guidance to enhance your employability and career growth.
From skill assessments to mock interviews, we prepare you for real-world challenges.
Our team connects you with the right opportunities to kick-start your career.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="space-y-20">
          
          {/* Section 1 - Comprehensive Job Assistance */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Icon & Title */}
              <div className="md:w-80 bg-gradient-to-br from-orange-500 to-orange-600 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Comprehensive Job Assistance
                </h3>
              </div>
              
              {/* Right Side - Features Grid */}
              <div className="flex-1 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Master course curriculum and real-world projects</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Portfolio Building with SME guidance</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Hackathons & Mock Interviews with Industry Experts</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Professional Resume Review and Optimization</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Regular Quizzes and skill assessments</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Interview Preparation Sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Job Support Program (FEATURED) */}
          <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 rounded-3xl shadow-lg overflow-hidden border border-orange-200 relative">
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
              FEATURED
            </div>
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Icon & Title */}
              <div className="md:w-80 bg-gradient-to-br from-orange-600 to-orange-700 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Job Support Program
                </h3>
              </div>
              
              {/* Right Side - Features Grid */}
              <div className="flex-1 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-orange-500">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Leverage our global network facilitating thousands of career transitions</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-orange-500">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Boost confidence through personalized coaching</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-orange-500">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Expert job support from world-class trainers (hourly, weekly, or monthly)</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-orange-500">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Build long-term industry readiness with mentors</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-orange-500">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Get assistance with on-the-job challenges and tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - BigClass LMS */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Icon & Title */}
              <div className="md:w-80 bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <BookOpenCheck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                 LMS
                </h3>
              </div>
              
              {/* Right Side - Features Grid */}
              <div className="flex-1 p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Watch video lessons with summaries</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Take quizzes to test knowledge</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Submit assignments & get feedback</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Real-time notifications</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Manage daily learning schedule</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Dark mode for viewing</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">Automated resume creation</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 group">
                    <CheckCircle className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-900 font-medium text-sm">24/7 chat support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;