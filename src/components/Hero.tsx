import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import MultilingualGreeting from "./MultilingualGreeting";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center lg:justify-start">
              <MultilingualGreeting />
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-4 font-semibold">
              Computer Science Specialisation with Data Science
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl lg:max-w-none mb-8 leading-relaxed">
              Engineering the future of Computer Vision and Data Science.
              I am a Computer Science student at SRM University focused on transforming advanced research into production-ready, 
              scalable solutions.
            </p>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/profile-placeholder.jpeg"
                  alt="Siddhi Vinayak Dash"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* CTA Buttons and Social Links */}
        <div className="text-center mt-12">
          <div className="flex gap-4 justify-center mb-8 flex-wrap animate-slide-up">
            <Button size="lg" className="glow-effect group" asChild>
              <a href="/Siddhi_Dash_Resume.pdf" download>
                <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12 animate-slide-up">
            <a
              href="https://github.com/siddhivdash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-v-dash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:siddhudash21@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#about" className="inline-block animate-float">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;