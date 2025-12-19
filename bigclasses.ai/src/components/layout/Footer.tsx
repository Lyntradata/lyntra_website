import React, { useState } from "react";
import {
  Facebook,
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

// X (formerly Twitter) logo component
const XIcon = ({ size = 20, color = "#000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.694-5.867 6.694h-3.31l7.75-8.835L.424 2.25h6.844l4.915 6.494L17.68 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Replace this URL with your Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzi3Tvukl_AdRrvcw5owFB4VFnA_XtrOEYKbGSX0siu4dEqfcMb-920dkUf-l3icDqlsw/exec";

  const openMapLocation = () => {
    const mapUrl =
      "https://www.google.com/maps/search/?api=1&query=PLOT+NO+4%2F2+SECTOR+1+RAM+SVR+HUDA+TECHNO+ENCLAVE+MADHAPUR+HYDERABAD+TELANGANA+INDIA+500081";
    window.open(mapUrl, "_blank");
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/lyntradata",
      icon: Facebook,
      color: "#1877F2",
      hoverColor: "hover:bg-blue-50",
    },
    {
      name: "Twitter",
      url: "https://x.com/lyntradata",
      icon: XIcon,
      color: "#000000",
      hoverColor: "hover:bg-gray-50",
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

  const handleSubscribe = async () => {
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus(""), 3000);
      return;
    }

    setIsLoading(true);
    setSubscribeStatus("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus(""), 5000);
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
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
                src="/lovable-uploads/lyntradata-logo.png"
                alt="Lyntradata"
                className="h-20 md:h-24 lg:h-28 w-auto"
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
                    PLOT NO 4/2 SECTOR 1, RAM SVR, HUDA TECHNO ENCLAVE, MADHAPUR, HYDERABAD, TELANGANA, INDIA - 500081
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-orange-50 p-2.5 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <Phone size={18} className="text-orange-600" />
                  </div>
                  <a
                    href="tel:+917799350934"
                    className="text-gray-600 group-hover:text-orange-600 transition-colors text-sm"
                  >
                    +91 7799350934
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <a
                    href="mailto:lyntradata@gmail.com"
                    className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm break-all"
                  >
                    lyntradata@gmail.com
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
                onKeyPress={handleKeyPress}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-white transition-all shadow-lg text-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
                disabled={isLoading}
              />
              <button
                onClick={handleSubscribe}
                disabled={isLoading}
                className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ transform: 'scale(1)' }}
                onMouseEnter={(e) => !isLoading && (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
                <Send size={16} />
              </button>
            </div>
            {subscribeStatus === "success" && (
              <p className="text-green-300 mt-3 font-medium text-sm">
                ✓ Successfully subscribed! Check your inbox for confirmation.
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