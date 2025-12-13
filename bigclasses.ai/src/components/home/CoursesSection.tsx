import React, { useState } from "react";
import { Users, Clock, Star, BookOpen, ArrowRight, Play } from "lucide-react";

const courses = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Master data analysis techniques, statistical methods, and visualization tools to extract insights from data.",
    image: "https://i.pinimg.com/736x/43/8e/c0/438ec085495d683eaa3a6a10260ae1cb.jpg",
    students: "2893+",
    duration: "8-12 weeks",
    level: "Beginner",
    rating: 4.8,
    modules: 5,
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Learn the core concepts and algorithms behind machine learning with hands-on projects.",
    image: "https://math.duke.edu/sites/math.duke.edu/files/styles/large/public/images/Featured%20Courses%20MTH%20260%20Python%20Programming%20in%20Math%20image.jpg.png?itok=kTIwZdBL",
    students: "2171+",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.6,
    modules: 5,
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Build solid foundations in machine learning with practical use cases and algorithms.",
    image: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
    students: "2329+",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.9,
    modules: 5,
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Explore neural networks, CNNs, RNNs, and advanced architectures like Transformers.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*tWLecb8_qosGJNHFAF43qA.jpeg",
    students: "2719+",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.9,
    modules: 5,
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    description: "Understand natural language processing from tokenization to transformers.",
    image: "https://media.istockphoto.com/id/1420753803/photo/ai-and-nlp-natural-language-processing-cognitive-computing-technology-concept.jpg?s=612x612&w=0&k=20&c=sNQoIU4pZRg4kLcu8OkKO9yXPZiZIr0ZwkKCoYSaB5I=",
    students: "2583+",
    duration: "8-12 weeks",
    level: "Intermediate",
    rating: 4.8,
    modules: 5,
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Learn how to build and evaluate generative models like GANs and VAEs.",
    image: "https://prescienceds.com/wp-content/uploads/2024/10/GenAI.webp",
    students: "2911+",
    duration: "4-8 weeks",
    level: "Advanced",
    rating: 4.6,
    modules: 5,
  },
  {
    id: "langchain",
    title: "LangChain",
    description: "Master building LLM applications with LangChain and real-world integrations.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    students: "2167+",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.7,
    modules: 5,
  },
  {
    id: "langgraph",
    title: "LangGraph",
    description: "Create powerful AI workflows with LangGraph's graph-based programming paradigm.",
    image: "https://cdn.prod.website-files.com/6583e2b6af21ee3aa85c3013/671f853754d6970c274a7136_66824dd409fe46033e194223_lang%2520Graph.png",
    students: "2412+",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.7,
    modules: 5,
  },
  {
    id: "mlops",
    title: "MLOps",
    description: "Implement ML systems at scale with CI/CD, monitoring, and deployment strategies.",
    image: "https://www.marktechpost.com/wp-content/uploads/2022/08/Blog-Banner-2.png",
    students: "2607+",
    duration: "8-12 weeks",
    level: "Advanced",
    rating: 4.7,
    modules: 6,
  },
  {
    id: "llmops",
    title: "LLMOps",
    description: "Deploy, fine-tune, and scale large language models efficiently in production.",
    image: "https://markovate.com/wp-content/uploads/2024/05/LLMOps_-Streamlining-AI-Workflows-for-Optimal-Results-1280x960.webp",
    students: "2942+",
    duration: "4-8 weeks",
    level: "Advanced",
    rating: 4.7,
    modules: 5,
  },
  {
    id: "ai-agents",
    title: "Agents",
    description: "Build autonomous AI agents capable of decision-making and task execution.",
    image: "https://i0.wp.com/www.lyzr.ai/wp-content/uploads/2024/08/Understanding-AI-agents-scaled.webp",
    students: "2786+",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.6,
    modules: 5,
  },
  {
    id: "ai-ethics",
    title: "Ethics in AI and Scaling AI systems",
    description: "Explore ethical AI practices and the challenges in scaling responsible AI systems.",
    image: "https://innovationatwork.ieee.org/wp-content/uploads/2020/10/bigstock-Teamwork-Business-Team-Repair-300147874_1024X684.png",
    students: "2747+",
    duration: "4 weeks",
    level: "Beginner",
    rating: 4.7,
    modules: 5,
  }
];

export default function CoursesSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleViewCourse = (courseId) => {
    window.location.href = `/${courseId}`;
  };

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 9);

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-0.5 w-8 sm:w-12 bg-orange-500"></div>
            <span className="text-orange-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
              Featured Courses
            </span>
            <div className="h-0.5 w-8 sm:w-12 bg-orange-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 text-black">
            Learn From The <span className="text-orange-600">Best</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Expertly crafted courses designed to transform your career in AI and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleCourses.map((course, index) => (
            <article
              key={course.id}
              className="group relative cursor-pointer w-full"
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleViewCourse(course.id)}
            >
              <div className="relative overflow-hidden h-72 sm:h-80 rounded-3xl w-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === course.id ? 'scale-110 brightness-50' : 'scale-100 brightness-75'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
                
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-5xl sm:text-6xl font-black text-white opacity-40 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                      course.level === "Beginner"
                        ? "bg-green-500"
                        : course.level === "Intermediate"
                        ? "bg-blue-500"
                        : "bg-orange-600"
                    } text-white uppercase tracking-wide`}>
                      {course.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-orange-500 fill-orange-500'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                      <span className="text-white font-bold ml-1 text-xs sm:text-sm">{course.rating}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/90 mb-3 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-1.5">
                        <Users className="h-4 w-4 text-white mx-auto mb-0.5" />
                        <p className="text-xs font-bold text-white">{course.students}</p>
                        <p className="text-[10px] text-white/70">Students</p>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-1.5">
                        <Clock className="h-4 w-4 text-white mx-auto mb-0.5" />
                        <p className="text-xs font-bold text-white">{course.duration}</p>
                        <p className="text-[10px] text-white/70">Duration</p>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-1.5">
                        <BookOpen className="h-4 w-4 text-white mx-auto mb-0.5" />
                        <p className="text-xs font-bold text-white">{course.modules}</p>
                        <p className="text-[10px] text-white/70">Modules</p>
                      </div>
                    </div>

                    <button
                      className={`w-full font-bold py-2.5 text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 rounded-lg ${
                        hoveredId === course.id
                          ? 'bg-orange-600 text-white opacity-100 translate-y-0'
                          : 'bg-white text-black opacity-0 translate-y-2'
                      }`}
                    >
                      <Play className="h-3.5 w-3.5" />
                      Explore Course
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-600 to-blue-600 transition-all duration-300 ${
                  hoveredId === course.id ? 'w-2' : ''
                }`}></div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 transition-all duration-300 ${
                  hoveredId === course.id ? 'h-1.5' : ''
                }`}></div>
              </div>
            </article>
          ))}
        </div>

        {!showAllCourses && (
          <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
            <button
              onClick={() => setShowAllCourses(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 sm:gap-3 shadow-2xl rounded-lg"
            >
              View All {courses.length} Courses
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}