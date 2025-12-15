import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from '@/lib/axiosConfig';
import { CheckCircle, ChevronRight, Loader2, AlertCircle, BookOpen, FileText, Award, PlayCircle } from "lucide-react";

interface Topic {
  title: string;
}

interface Module {
  title: string;
  description: string;
  topics: Topic[];
}

const Curriculum: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedModuleIndex, setSelectedModuleIndex] = useState<number | null>(null);
  const [showTopics, setShowTopics] = useState<boolean>(false);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!id) {
      setError("Course ID is missing.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    axiosInstance.get(`/courses/${id}/`)
      .then(res => {
        if (res.data && Array.isArray(res.data.curriculum)) {
          setModules(res.data.curriculum);
        } else {
          setError("No valid curriculum data found for this course.");
          setModules([]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch curriculum:', err);
        setError(err.response?.data?.message || "Failed to load curriculum. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleModuleSelect = (idx: number) => {
    setSelectedModuleIndex(idx);
    setShowTopics(false);
  };

  const toggleTopicCompletion = (topicTitle: string) => {
    setCompletedTopics(prev => ({ ...prev, [topicTitle]: !prev[topicTitle] }));
  };

  const getModuleProgress = (module: Module) => {
    if (!module.topics || module.topics.length === 0) return 0;
    const completed = module.topics.filter(t => completedTopics[t.title]).length;
    return Math.round((completed / module.topics.length) * 100);
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-700 font-medium">Loading Curriculum...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto border border-red-100">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Curriculum</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    );
  }

  const selectedModule = selectedModuleIndex !== null ? modules[selectedModuleIndex] : null;
  const progress = selectedModule ? getModuleProgress(selectedModule) : 0;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Course Curriculum
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master every concept through our structured learning path
          </p>
        </div>

        {modules.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
            <BookOpen className="h-20 w-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Curriculum Coming Soon</h3>
            <p className="text-gray-500">The curriculum for this course is being prepared.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Sidebar - Module List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-indigo-600" />
                  Modules
                </h2>
                <div className="space-y-3">
                  {modules.map((module, idx) => {
                    const moduleProgress = getModuleProgress(module);
                    const isSelected = selectedModuleIndex === idx;
                    return (
                      <button
                        key={`module-${idx}`}
                        onClick={() => handleModuleSelect(idx)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-grow">
                            <span className={`text-xs font-semibold uppercase tracking-wider mb-1 block ${
                              isSelected ? 'text-indigo-100' : 'text-indigo-600'
                            }`}>
                              Module {idx + 1}
                            </span>
                            <h3 className={`font-semibold text-sm line-clamp-2 ${
                              isSelected ? 'text-white' : 'text-gray-900'
                            }`}>
                              {module.title}
                            </h3>
                          </div>
                          <ChevronRight className={`flex-shrink-0 ml-2 transition-transform ${
                            isSelected ? 'transform translate-x-1 text-white' : 'text-gray-400'
                          }`} size={18} />
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-2">
                          <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                            isSelected ? 'bg-white/20' : 'bg-gray-200'
                          }`}>
                            <div
                              className={`h-full transition-all duration-500 rounded-full ${
                                isSelected ? 'bg-white' : 'bg-indigo-500'
                              }`}
                              style={{ width: `${moduleProgress}%` }}
                            />
                          </div>
                          <p className={`text-xs mt-1 ${
                            isSelected ? 'text-indigo-100' : 'text-gray-500'
                          }`}>
                            {moduleProgress}% complete
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content - Module Details */}
            <div className="lg:col-span-2">
              {!selectedModule ? (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Module</h3>
                  <p className="text-gray-500">Choose a module from the left to view its details</p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 md:p-10 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      Module {selectedModuleIndex! + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {selectedModule.title}
                    </h2>
                    <p className="text-indigo-100 text-lg leading-relaxed">
                      {selectedModule.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-indigo-200" />
                        <span className="text-sm">
                          {selectedModule.topics?.length || 0} Topics
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-indigo-200" />
                        <span className="text-sm">
                          {progress}% Complete
                        </span>
                      </div>
                    </div>

                    {/* View Topics Button */}
                    <div className="mt-6 flex gap-3">
                      {!showTopics ? (
                        <button
                          onClick={() => setShowTopics(true)}
                          className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          View Topics
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowTopics(false)}
                          className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                        >
                          Close Topics
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Topics List - Only shown when button is clicked */}
                  {showTopics && (
                    <div className="p-8 md:p-10">
                      {(!selectedModule.topics || selectedModule.topics.length === 0) ? (
                        <div className="text-center py-12">
                          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500">No topics available for this module yet.</p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                            <PlayCircle className="h-5 w-5 mr-2 text-indigo-600" />
                            Learning Topics
                          </h3>
                          {selectedModule.topics.map((topic, tidx) => {
                            const isCompleted = completedTopics[topic.title];
                            return (
                              <div
                                key={`topic-${selectedModuleIndex}-${tidx}`}
                                className={`group flex items-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                                  isCompleted
                                    ? 'bg-green-50 border-green-200 hover:border-green-300'
                                    : 'bg-gray-50 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                                }`}
                                onClick={() => toggleTopicCompletion(topic.title)}
                              >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all ${
                                  isCompleted
                                    ? 'bg-green-500 shadow-lg shadow-green-200'
                                    : 'bg-white border-2 border-gray-300 group-hover:border-indigo-400'
                                }`}>
                                  {isCompleted ? (
                                    <CheckCircle size={20} className="text-white" />
                                  ) : (
                                    <span className="text-sm font-semibold text-gray-400 group-hover:text-indigo-600">
                                      {tidx + 1}
                                    </span>
                                  )}
                                </div>
                                <div className="flex-grow">
                                  <p className={`font-medium transition-all ${
                                    isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'
                                  }`}>
                                    {topic.title}
                                  </p>
                                </div>
                                {!isCompleted && (
                                  <ChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" size={20} />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Curriculum;