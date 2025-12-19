import React, { useEffect } from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import EnrollPage from "./pages/EnrollPage";
import CourseDetails from "@/pages/CourseDetails";
import FeatureDetail from "./components/home/FeatureDetail";
import FeatureOverview from "./components/home/FeatureOverview";

// Blog pages removed


const queryClient = new QueryClient();

// Google Analytics and GTM removed: no-op placeholders kept to avoid accidental references
const initializeAnalytics = () => {
  // analytics removed
};

const trackPageView = (_path: string) => {
  // analytics removed
};

// Component to handle route tracking
const RouteTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure we start at top of page on route change to avoid landing mid-page/footer
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [location]);

  return null;
};

const AppContent: React.FC = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enrollnow" element={<EnrollPage />} />
        <Route path="/:id" element={<CourseDetails />} /> 
        <Route path="*" element={<NotFound />} />
        <Route path="/feature-details/:id" element={<FeatureDetail />} /> 
        <Route path="/features" element={<FeatureOverview />} />
        <Route path="/features/:featureId" element={<FeatureOverview />} />

        {/* Blog routes removed */}
      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;