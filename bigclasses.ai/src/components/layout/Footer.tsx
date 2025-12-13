import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const openMapLocation = () => {
    const mapUrl =
      "";
    window.open(mapUrl, "_blank");
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "",
      icon: Facebook,
      color: "#1877F2",
      hoverColor: "hover:bg-blue-50",
    },
    {
      name: "Twitter",
      url: "",
      icon: Twitter,
      color: "#1DA1F2",
      hoverColor: "hover:bg-sky-50",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/lyntradata/",
      icon: Instagram,
      color: "#E4405F",
      hoverColor: "hover:bg-pink-50",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCnZk_tyRFcb1Stav48mbslw",
      icon: Youtube,
      color: "#FF0000",
      hoverColor: "hover:bg-red-50",
    },
  ];

  const features = [
    { icon: Sparkles, text: "AI-Powered Learning" },
    { icon: BookOpen, text: "Expert Instructors" },
    { icon: Users, text: "Global Community" },
    { icon: Award, text: "Certified Courses" },
  ];

  const handleSubscribe = () => {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus(""), 3000);
    } else {
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus(""), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-white via-orange-50/30 to-orange-100/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full" style={{ filter: 'blur(100px)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full" style={{ filter: 'blur(100px)' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Left Section - Brand & Features */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div>
              <img
                src="/lovable-uploads/logo.webp"
                alt="BigClasses.AI"
                className="h-24 md:h-28 lg:h-32 w-auto"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              Empowering learners worldwide with AI-driven education solutions
              that make learning accessible, engaging, and effective.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`group relative bg-white rounded-xl p-3 shadow-sm border border-gray-100 ${social.hoverColor} transition-all hover:shadow-md`}
                      style={{ transform: 'translateY(0)' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <Icon size={20} color={social.color} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Section - Contact & Newsletter */}
          <div className="lg:col-span-7 flex gap-12 md:gap-16">
            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-1 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
              </div>
              <ul className="space-y-2">
                {[
                  { text: "Home", action: scrollToTop },
                  { text: "Courses", href: "#courses" },
                  { text: "Features", href: "#features" },
                ].map((link, idx) => (
                  <li key={idx}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-gray-600 hover:text-orange-600 transition-colors font-medium flex items-center gap-2 group w-full text-left"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors"></div>
                        {link.text}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-orange-600 transition-colors font-medium flex items-center gap-2 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors"></div>
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-1 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-800">Get in Touch</h3>
              </div>
              <ul className="space-y-3">
                <li
                  className="flex items-start gap-3 group cursor-pointer"
                  onClick={openMapLocation}
                >
                  <div className="bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm leading-relaxed flex-1">
                  PLOT NO 4/2 SECTOR 1, RAM SVR, HUDA TECHNO ENCLAVE, MADHAPUR, HYDERABAD,TELANGANA, INDIA -500081

                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-orange-50 p-2.5 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <Phone size={18} className="text-orange-600" />
                  </div>
                  <a
                    href="tel:+919666523199"
                    className="text-gray-600 group-hover:text-orange-600 transition-colors text-sm"
                  >
                    +91 8328497113
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <a
                    href="mailto:Info@bigclasses.ai"
                    className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm break-all"
                  >
                    Lyntradata@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block rounded-full px-3 py-1 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <span className="text-white text-xs font-semibold">📧 Stay Updated</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-blue-100 mb-6 text-sm">
              Get the latest updates on courses, tips, and AI learning resources
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-white transition-all shadow-lg text-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
              />
              <button
                onClick={handleSubscribe}
                className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap text-sm"
                style={{ transform: 'scale(1)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Subscribe
                <Send size={16} />
              </button>
            </div>
            {subscribeStatus === "success" && (
              <p className="text-green-300 mt-3 font-medium text-sm">
                ✓ Successfully subscribed! Check your inbox.
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="text-red-300 mt-3 font-medium text-sm">
                ✗ Please enter a valid email address
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} lyntradata.com All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;