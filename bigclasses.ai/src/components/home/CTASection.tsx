import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, X, ExternalLink, CheckCircle, Users, BookOpen } from "lucide-react";

const CTASection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const youtubeVideoLink = "https://www.youtube.com/watch?v=4MetEXswZtw&t=15s";

  const openVideoModal = () => setShowVideoModal(true);
  const closeVideoModal = () => setShowVideoModal(false);
  const openYouTubeVideo = () => window.open(youtubeVideoLink, "_blank");

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background accent */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-600">
                  Transform Your Future Today
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Step Into the Future of Learning
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Thousands have already advanced their careers using our AI-enhanced platform.
Enjoy tailored learning paths designed around your goals.
Start your journey toward smarter, more effective learning.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-orange-500 text-white hover:bg-orange-600 rounded-xl px-8 py-7 text-lg font-semibold shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 group"
                >
                  Start Learning Free
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>


            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 max-w-[480px] mx-auto">
                  <img
                    src="/images/CTA.webp"
                    alt="Students collaborating"
                    className="w-full h-auto max-h-[360px] object-cover"
                  />
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl blur-lg opacity-75"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <Button
                onClick={closeVideoModal}
                className="absolute -top-4 -right-4 bg-gray-900 text-white hover:bg-gray-800 rounded-full w-10 h-10 p-0 shadow-xl"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>

                <h3 className="text-3xl font-bold mb-3 text-gray-900">See It In Action</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Watch how students are transforming their learning experience
                </p>

                <Button
                  onClick={openYouTubeVideo}
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-xl py-6 flex items-center justify-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Play className="h-6 w-6" />
                  Watch on YouTube
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;