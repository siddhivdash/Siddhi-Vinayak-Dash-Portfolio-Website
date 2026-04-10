import { Github, Linkedin, Mail, ArrowDown, FileText, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MultilingualGreeting from "./MultilingualGreeting";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="flex justify-center lg:justify-start mb-6">
              
                
              
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center lg:justify-start tracking-tight">
              <MultilingualGreeting />
            </h1>

            <p className="text-xl md:text-3xl text-foreground mb-4 font-bold tracking-tight">
              AI Engineer & <span className="gradient-text">Computer Vision Specialist</span>
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl lg:max-w-none mb-8 leading-relaxed">
              Engineering high-performance <span className="text-foreground font-semibold underline decoration-primary/30">Computer Vision pipelines</span> and <span className="text-foreground font-semibold underline decoration-primary/30">Agentic AI systems</span>. 
              Certified by <span className="text-foreground font-medium">Oracle</span> and <span className="text-foreground font-medium">SAP</span> to transform complex research into production-ready, scalable solutions.
            </p>

            {/* Main CTA Group */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="glow-effect group h-12 px-8" asChild>
                <a href="/Siddhi_Vinayak_Dash.pdf" download>
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-primary/20 hover:bg-primary/5" asChild>
                <a href="#projects">
                  <Code2 className="mr-2 h-5 w-5" />
                  View Showcase
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-slide-up">
              {[
                { icon: Github, href: "https://github.com/siddhivdash", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/siddhi-v-dash", label: "LinkedIn" },
                { icon: Mail, href: "mailto:siddhudash21@gmail.com", label: "Email" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up delay-200">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-background shadow-2xl z-10">
                <img
                  src="/profile-placeholder.jpeg"
                  alt="Siddhi Vinayak Dash"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute top-0 -right-4 bg-card border border-border p-3 rounded-2xl shadow-xl z-20 animate-float">
                <p className="text-xs font-bold text-primary">OCI Certified</p>
              </div>
              <div className="absolute bottom-10 -left-8 bg-card border border-border p-3 rounded-2xl shadow-xl z-20 animate-float-delayed">
                <p className="text-xs font-bold text-blue-500">SAP GenAI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Explore My Work</span>
          <a href="#about" className="animate-float">
            <ArrowDown className="h-6 w-6 text-primary/50 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;