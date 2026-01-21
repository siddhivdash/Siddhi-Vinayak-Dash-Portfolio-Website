import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const NavigationHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const timer = setTimeout(() => {
        window.history.replaceState(null, '', '/');
        window.scrollTo(0, 0);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Removed '/blog' from sectionPaths
    const sectionPaths = ['/about', '/services', '/experience', '/projects', '/skills', '/certifications', '/contact'];
    if (sectionPaths.includes(location.pathname)) {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate, location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <NavigationHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<Index />} />
            <Route path="/services" element={<Index />} />
            <Route path="/experience" element={<Index />} />
            <Route path="/projects" element={<Index />} />
            <Route path="/skills" element={<Index />} />
            {/* Replaced /blog with /certifications */}
            <Route path="/certifications" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;