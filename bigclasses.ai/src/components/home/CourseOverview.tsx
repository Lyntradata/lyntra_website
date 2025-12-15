import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from '@/lib/axiosConfig';
import { Loader2, TrendingUp, DollarSign, Target, AlertCircle, Briefcase, Rocket, Star } from "lucide-react";

interface SalaryInsights {
  min: string;
  avg: string;
  max: string;
}

interface OverviewData {
  avg_package: string;
  avg_hike: string;
  successful_transitions: string;
  salary_insights: SalaryInsights;
  manager_priority_percentage: string;
}

const CourseOverview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        if (res.data && res.data.overview && typeof res.data.overview === 'object') {
          setData(res.data.overview);
        } else {
          setError("Course overview data is missing or invalid.");
        }
      })
      .catch(err => {
        console.error('Failed to fetch course overview:', err);
        setError(err.response?.data?.message || "Failed to load course overview. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <section className="bg-gray-50 py-20 px-4 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-14 w-14 animate-spin text-orange-600 mx-auto mb-4" />
          <p className="text-lg text-gray-700 font-medium">Loading Success Stories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-20 px-4 min-h-[400px] flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-3xl shadow-xl max-w-lg mx-auto border-2 border-red-100">
          <AlertCircle className="h-14 w-14 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Unable to Load Data</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="bg-gray-50 py-20 px-4 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-600 text-lg">No data available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto max-w-7xl relative z-10 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Your Future Starts Here
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of professionals who've accelerated their careers and multiplied their earning potential
          </p>
        </div>
      </div>

      {/* Salary Breakdown Section - Full Width */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white">Compensation Breakdown</h2>
              <p className="text-gray-400 mt-1 text-sm md:text-base">Real salary data from our graduates</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starting Package */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Entry Point</span>
                <Star className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{data.salary_insights.min}</p>
              <p className="text-gray-400 text-sm">Starting salary range for freshers and career switchers</p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Average Package */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl transform md:scale-105 z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/90 font-medium">Most Common</span>
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{data.salary_insights.avg}</p>
              <p className="text-white/90 text-sm">What most graduates earn after course completion</p>
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Top Package */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Peak Earnings</span>
                <Star className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{data.salary_insights.max}</p>
              <p className="text-gray-400 text-sm">Top-tier placements for exceptional performers</p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{data.avg_hike}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Average Raise</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-orange-400 mb-2">{data.successful_transitions}+</p>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Success Stories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{data.manager_priority_percentage}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wide">Hiring Priority</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Showcase */}
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-orange-600" />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Salary Jump</p>
            <p className="text-4xl font-black text-gray-900 mb-1">{data.avg_package}</p>
            <p className="text-sm text-gray-600">Post-course average</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Pay Increase</p>
            <p className="text-4xl font-black text-gray-900 mb-1">{data.avg_hike}</p>
            <p className="text-sm text-gray-600">Typical raise achieved</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-500">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-green-600" />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Career Changes</p>
            <p className="text-4xl font-black text-gray-900 mb-1">{data.successful_transitions}+</p>
            <p className="text-sm text-gray-600">Professionals placed</p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-500">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">In-Demand</p>
            <p className="text-4xl font-black text-gray-900 mb-1">{data.manager_priority_percentage}</p>
            <p className="text-sm text-gray-600">Employer preference</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;