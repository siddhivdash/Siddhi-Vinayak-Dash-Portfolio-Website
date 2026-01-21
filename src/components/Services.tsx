import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Database, Link, Rocket, Code, Upload, Bot, BrainCircuit, Search } from "lucide-react";

const Services = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const words = ["Intelligent", "Scalable", "Efficient", "Vision Driven"];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, displayedText, isTyping]);

  const services = [
    {
      icon: BrainCircuit,
      title: "Machine Learning Engineering",
      description: "Architecting end-to-end ML pipelines including regression, classification, and clustering with high accuracy scores using Scikit-learn and TensorFlow.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Bot,
      title: "NLP & LLM Systems",
      description: "Developing intelligent chatbots and RAG systems using local LLMs (LLaVA, Moondream) and Ollama for sub-2 second response times.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Search,
      title: "Computer Vision Solutions",
      description: "Implementing real-time object detection (YOLOv8) and interactive image segmentation (SAM) for advanced visual intelligence.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building production-ready APIs with FastAPI, Flask, and Django, integrated with optimized MySQL and MongoDB databases.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Code,
      title: "Full-Stack AI Integration",
      description: "Seamlessly bridging deep learning models with responsive web applications to transform complex AI into accessible user tools.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: Upload,
      title: "DevOps & Containerization",
      description: "Standardizing environments and accelerating deployment using Docker to ensure reliable performance across all platforms.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Animated Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Create{" "}
            <span 
              className="gradient-text inline-block align-middle relative"
              style={{ 
                width: '320px', 
                height: '1.2em',
                verticalAlign: 'middle',
                opacity: isTyping ? 1 : 0,
                transform: isTyping ? 'scale(1)' : 'scale(1.2)',
                transition: 'opacity 200ms ease-in-out, transform 200ms ease-in-out'
              }}
            >
              {displayedText}
            </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Solutions for the Future</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging my experience at SRM University and MCL to build data-driven applications that drive measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border/50 hover:border-purple-500/50 hover:bg-card/80 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-full ${service.color} group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300`}>
                      <IconComponent className="h-6 w-6 group-hover:text-purple-400" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact Me Button */}
        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#contact">Collaborate with Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;