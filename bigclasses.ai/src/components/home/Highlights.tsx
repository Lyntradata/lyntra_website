import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from '@/lib/axiosConfig';
import { CheckCircle2, Star, Clock, Users, Loader2, AlertCircle, Download, Calendar, Phone, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const PRIMARY_COLOR = "blue-600";
const PRIMARY_HOVER_COLOR = "blue-700";

interface HighlightsData {
  title?: string;
  key_topics?: string[];
  features?: string[];
  students_enrolled?: string | number;
  rating?: string | number;
  duration?: string;
  image_url?: string;
}

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  extra_info: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const Highlights: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<HighlightsData | null>(null);
  const [batchSchedules, setBatchSchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [formData, setFormData] = useState<EnrollmentFormData>({
    name: '',
    email: '',
    phone: '',
    extra_info: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const contactPhoneNumber = "+91 8328497113";

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.name.trim())) {
      errors.name = "Please enter a valid name (only letters and spaces)";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof EnrollmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      extra_info: ''
    });
    setFormErrors({});
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${contactPhoneNumber}`;
    setIsContactModalOpen(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = contactPhoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent("Hi, I'm interested in the course and would like to speak with a course adviser.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsContactModalOpen(false);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(contactPhoneNumber).then(() => {
      toast({
        title: "Phone number copied!",
        description: "The phone number has been copied to your clipboard.",
      });
    }).catch(() => {
      toast({
        title: "Copy failed",
        description: "Please copy the number manually.",
        variant: "destructive",
      });
    });
  };

  useEffect(() => {
    if (!id) {
      setError("Course ID is missing.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    axiosInstance.get<any>(`/courses/${id}/`)
      .then(res => {
        if (res.data && res.data.highlights) {
          setData(res.data.highlights as HighlightsData);
        } else {
          setData(null);
        }
        if (res.data && res.data.batch_schedules) {
          setBatchSchedules(res.data.batch_schedules);
        } else {
          setBatchSchedules([]);
        }
      })
      .catch(err => {
        setError(err.response?.data?.message || "Failed to load highlights data. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
    setShowSuccessMessage(false);
    setEnrollmentSuccess(false);
    resetForm();
  };

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !id) return;

    setIsSubmitting(true);
    try {
      const hasDownloaded = localStorage.getItem(`curriculum_downloaded_${id}`);
      if (hasDownloaded) {
        toast({
          title: "Already Downloaded",
          description: "You have already downloaded this curriculum.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const response = await axiosInstance.post(`/courses/${id}/enroll-download/`, formData);

      if (response.data.success) {
        localStorage.setItem(`curriculum_downloaded_${id}`, 'true');
        
        setEnrollmentSuccess(true);
        setShowSuccessMessage(true);

        toast({
          title: "Enrollment Successful!",
          description: "The curriculum has been sent to your email.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Enrollment Failed",
        description: error.response?.data?.error || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setShowSuccessMessage(false);
      setEnrollmentSuccess(false);
      resetForm();
    }
  };

  if (loading) {
    return (
      <div className="highlights-wrapper">
        <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4 w-full overflow-hidden">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-orange-600 mx-auto mb-4" />
            <p className="text-lg text-gray-700">Loading Course Highlights...</p>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="highlights-wrapper">
        <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4 w-full overflow-hidden">
          <div className="text-center bg-white p-8 rounded-2xl border border-red-200 shadow-lg max-w-md mx-auto">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Highlights</h2>
            <p className="text-gray-600 text-sm">{error}</p>
          </div>
        </section>
      </div>
    );
  }

  if (!data || (data.key_topics?.length === 0 && data.features?.length === 0 && !data.title)) {
    return (
      <div className="highlights-wrapper">
        <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4 w-full overflow-hidden">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">No Highlights Available</h2>
            <p className="text-gray-600 text-sm mt-2">Highlights for this course could not be found.</p>
          </div>
        </section>
      </div>
    );
  }

  const {
    title = "Course Title Placeholder",
    key_topics = [],
    features = [],
    students_enrolled = "0",
    rating = "N/A",
    duration = "N/A",
    image_url = "/placeholder-image.jpg"
  } = data;

  return (
    <>
      <style>{`
        .batch-card {
          transition: all 0.3s ease;
        }
        .batch-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(249, 115, 22, 0.15);
        }
        
        /* COMPLETE FIX FOR HORIZONTAL SCROLL */
        html {
          overflow-x: hidden !important;
          width: 100% !important;
        }
        
        body {
          overflow-x: hidden !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        #root {
          overflow-x: hidden !important;
          width: 100% !important;
        }
        
        .highlights-wrapper {
          overflow-x: hidden !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .highlights-wrapper *,
        .highlights-wrapper *::before,
        .highlights-wrapper *::after {
          box-sizing: border-box !important;
        }
        
        .highlights-wrapper section {
          width: 100% !important;
          overflow-x: hidden !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        
        .highlights-wrapper .container {
          width: 100% !important;
          max-width: 1280px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        .highlights-wrapper img {
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
        }
        
        .highlights-wrapper .grid {
          width: 100% !important;
        }
        
        @media (max-width: 640px) {
          .highlights-wrapper {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>

      <div className="highlights-wrapper">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight break-words">
                {title}
              </h1>

              {/* Key Topics - Now removed from here as it's on the image */}
              
              {/* Features */}
              {features.length > 0 && (
                <div className="space-y-2">
                  {features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 break-words flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1 sm:mr-1.5" />
                  Schedule Demo
                </button>
                <button
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-white hover:bg-gray-50 text-gray-900 text-sm font-semibold rounded-lg shadow-md border border-gray-200 transition-all whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1 sm:mr-1.5" />
                  Contact Adviser
                </button>
                <button
                  onClick={handleDownloadClick}
                  disabled={downloadLoading}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-white hover:bg-gray-50 text-gray-900 text-sm font-semibold rounded-lg shadow-md border border-gray-200 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1 sm:mr-1.5" />
                  {downloadLoading ? 'Downloading...' : 'Curriculum'}
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-first lg:order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image_url}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
                
                {/* What You'll Learn Overlay */}
                {key_topics.length > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 break-words">What You'll Learn</h3>
                    <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                      {key_topics.slice(0, 4).map((topic: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span className="text-xs sm:text-sm text-white leading-tight break-words flex-1">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Batch Schedule Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 break-words px-2">
              Upcoming Batch Schedule
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 break-words">
              Choose your preferred batch timing and start your learning journey
            </p>
          </div>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8 sm:mb-10">
            {batchSchedules.map((batch) => (
              <div
                key={batch.id}
                className="batch-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 cursor-pointer"
                onClick={() => navigate('/signup')}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <Calendar className="w-6 h-6 text-white flex-shrink-0" />
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white break-words">{batch.date}</p>
                      <p className="text-xs text-white/90 break-words">{batch.day}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-0.5 break-words">{batch.title}</h3>
                  <p className="text-white/90 text-xs break-words">{batch.subtitle}</p>
                </div>

                {/* Body */}
                <div className="p-4 space-y-3 overflow-hidden">
                  <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg overflow-hidden">
                    <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900 truncate">{batch.time}</p>
                      <p className="text-xs text-gray-600 truncate">{batch.duration}</p>
                    </div>
                  </div>

                  <button
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/signup');
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">Need a Custom Schedule?</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 break-words">We offer flexible timings to match your availability</p>
            <button
              onClick={handleContactClick}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      </div>

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center text-white">
              <Phone className="h-5 w-5 inline mr-2 text-orange-500" />
              Contact Course Adviser
            </DialogTitle>
          </DialogHeader>

          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-orange-500" />
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-1">Get Instant Help</h3>
              <p className="text-sm text-gray-300">Speak with our course adviser</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
              <p className="text-xl font-bold text-white mb-3">{contactPhoneNumber}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={handleCallClick}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 inline mr-1" />
                  Call
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-semibold transition-all"
                >
                  WhatsApp
                </button>
                <button
                  onClick={copyPhoneNumber}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg text-gray-200 text-sm font-semibold transition-all"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enrollment Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center text-white">
              {showSuccessMessage ? "Enrollment Successful!" : "Download Curriculum"}
            </DialogTitle>
          </DialogHeader>
          {!showSuccessMessage ? (
            <form onSubmit={handleEnrollmentSubmit} className="space-y-4 py-2">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={e => handleInputChange('name', e.target.value)}
                  disabled={isSubmitting}
                  className={`mt-1.5 h-9 text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 ${formErrors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your name"
                  required
                />
                {formErrors.name && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  disabled={isSubmitting}
                  className={`mt-1.5 h-9 text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 ${formErrors.email ? 'border-red-500' : ''}`}
                  placeholder="you@example.com"
                  required
                />
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-300">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  disabled={isSubmitting}
                  className={`mt-1.5 h-9 text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 ${formErrors.phone ? 'border-red-500' : ''}`}
                  placeholder="10-digit number"
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>
              <div>
                <Label htmlFor="extra_info" className="text-sm font-semibold text-gray-300">Additional Info (Optional)</Label>
                <Textarea
                  id="extra_info"
                  value={formData.extra_info}
                  onChange={e => handleInputChange('extra_info', e.target.value)}
                  disabled={isSubmitting}
                  rows={2}
                  className="mt-1.5 text-sm bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-9 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Submitting...
                  </span>
                ) : (
                  "Submit & Download"
                )}
              </Button>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-green-400 mb-1">
                  Thank you for enrolling!
                </h3>
                <p className="text-sm text-gray-300">
                  Check your email for the curriculum link.
                </p>
              </div>
              <Button
                onClick={handleModalClose}
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold h-9"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Highlights;