import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, GraduationCap, Mail, Phone, User, BookOpen, Award, Users } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  { id: 1, title: "Data Analytics" },
  { id: 2, title: "Python Programming" },
  { id: 3, title: "Machine Learning" },
  { id: 4, title: "Deep Learning" },
  { id: 5, title: "Natural Language Processing (NLP)" },
  { id: 6, title: "Generative AI" },
  { id: 7, title: "Langchain" },
  { id: 8, title: "LangGraph" },
  { id: 9, title: "MLOps" },
  { id: 10, title: "LLMOps" },
  { id: 11, title: "Agents" },
  { id: 12, title: "Ethics AI and Scaling AI system" },
];

const Enroll = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    email: "",
    course_title: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (value) => {
    setFormData((prev) => ({ ...prev, course_title: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.student_name ||
      !formData.email ||
      !formData.course_title ||
      !formData.phone
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Enrollment successful! Welcome to your AI journey!");
      setFormData({
        student_name: "",
        email: "",
        course_title: "",
        phone: "",
      });
    } catch (err) {
      setError("Enrollment failed. Please try again.");
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 -ml-2">
              <img 
                src="/lovable-uploads/logo.webp" 
                alt="Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <Button
              onClick={handleClose}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of students mastering cutting-edge AI technologies
          </p>
        </div>
      </div>

      {/* Course Categories Section */}
      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Our Course Offerings</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">Comprehensive programs covering the entire spectrum of modern technology and data science</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-all border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Data & Analytics</h4>
              <p className="text-xs sm:text-sm text-gray-400">Data Analytics, Python Programming</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-all border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Machine Learning</h4>
              <p className="text-xs sm:text-sm text-gray-400">ML, Deep Learning, NLP</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-all border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Generative AI</h4>
              <p className="text-xs sm:text-sm text-gray-400">GenAI, Langchain, LangGraph</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-750 transition-all border border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">MLOps & Agents</h4>
              <p className="text-xs sm:text-sm text-gray-400">MLOps, LLMOps, AI Agents, Ethics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Course Information
                </h3>
                <div className="h-1 w-20 bg-orange-500 mb-4 sm:mb-6"></div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Our curriculum spans 12 specialized courses covering Data Science, Machine Learning, Generative AI, and Production Deployment. From foundational programming to advanced AI systems, each course includes practical projects and real-world applications.
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-gray-100">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">What You'll Learn</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">Data analytics and Python programming fundamentals for data science applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">Machine learning algorithms, deep learning, and neural network architectures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">Natural language processing, generative AI, and modern frameworks like Langchain</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">Production deployment with MLOps, LLMOps, AI agents, and ethical AI practices</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Course Details</h4>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="text-orange-400 text-xs sm:text-sm font-semibold mb-1">Duration</div>
                    <div className="text-xl sm:text-2xl font-bold">8-12 Weeks</div>
                  </div>
                  <div>
                    <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1">Format</div>
                    <div className="text-xl sm:text-2xl font-bold">Online Live</div>
                  </div>
                  <div>
                    <div className="text-orange-400 text-xs sm:text-sm font-semibold mb-1">Sessions</div>
                    <div className="text-xl sm:text-2xl font-bold">3x per Week</div>
                  </div>
                  <div>
                    <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1">Support</div>
                    <div className="text-xl sm:text-2xl font-bold">24/7 Access</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-orange-200">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Prerequisites</h4>
                <p className="text-sm sm:text-base text-gray-700 mb-4">
                  Most courses require basic computer literacy and enthusiasm to learn. Programming experience is helpful but not mandatory for beginner-level courses. We provide foundational resources to help you succeed regardless of your starting point.
                </p>
                <div className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold">Recommended:</span> Basic understanding of mathematics and logical thinking
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enrollment Form</h3>
                  <p className="text-orange-100">Fill out the details to get started</p>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="student_name" className="text-gray-800 font-semibold flex items-center gap-2">
                        <User className="h-4 w-4 text-orange-500" />
                        Full Name
                      </Label>
                      <Input
                        id="student_name"
                        name="student_name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.student_name}
                        onChange={handleChange}
                        required
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-800 font-semibold flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Course Field */}
                    <div className="space-y-2">
                      <Label htmlFor="course_title" className="text-gray-800 font-semibold flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-orange-500" />
                        Select Course
                      </Label>
                      <Select
                        required
                        value={formData.course_title}
                        onValueChange={handleCourseChange}
                      >
                        <SelectTrigger className="h-12 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 transition-all">
                          <SelectValue placeholder="Choose your course" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {courses.map((course) => (
                            <SelectItem 
                              key={course.id} 
                              value={course.title}
                              className="cursor-pointer hover:bg-orange-50"
                            >
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-800 font-semibold flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-500" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center pt-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-5 w-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-3 text-sm text-gray-700 cursor-pointer"
                      >
                        Remember me for future enrollments
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      ENROLL NOW
                    </Button>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                      <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                  )}

                  {/* Success Message */}
                  {success && (
                    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                      <p className="text-green-700 text-sm font-semibold">{success}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Need help? <a href="mailto:Lyntradata@gmail.com" className="text-blue-400 font-semibold cursor-pointer hover:underline">Contact Support</a>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2025 Lyntra Data. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Enroll;