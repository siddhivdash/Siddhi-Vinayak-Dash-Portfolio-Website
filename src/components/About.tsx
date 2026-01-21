import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb, Zap, GraduationCap } from "lucide-react";

const About = () => {
  const workValues = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Building production-ready ML backends using Flask, FastAPI, and standardized Docker containers",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Implementing state-of-the-art models like YOLOv8, SAM, and Transformers for multimodal AI",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Proven ability to partner with HR, IT, and Data Science teams to deliver solutions ahead of schedule",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing semantic search and ML inference to achieve sub-2 second response times",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    }
  ];

  const stats = [
    { number: "4+", label: "Models Deployed" },
    { number: "8.27", label: "Current CGPA" },
    { number: "20+", label: "Technologies Mastered" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Engineering intelligent systems that bridge the gap between complex data and human-centric solutions.
          </p>
          
          {/* Education Badge */}
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-foreground">B.Tech in Computer Science and Engineering</div>
              <div className="text-xs text-muted-foreground">SRM Institute of Science and Technology • CGPA 8.27/10</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - My Journey */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey in technology began at SRM Institute of Science and Technology, fueled by a fascination with how machines perceive the world. What started as academic curiosity quickly evolved into a mission to transform raw data into intelligent, production-ready solutions. To date, I have successfully deployed four production-grade models, bridging the gap between theoretical research and scalable application.
              </p>
              
              <p>
                A defining chapter of my experience was at Mahanadi Coalfields Limited, where I engineered MCLBuddy. By architecting this NLP-powered assistant, I was able to reduce HR query resolution times by 73% for over 500 employees. This experience solidified my focus on optimizing semantic search architectures and building robust backends. As an OCI Data Science Professional and a dedicated competitive programmer, I thrive on the challenge of turning complex problems into efficient, high-performance code.
              </p>
            </div>
          </div>

          {/* Right Column - How I Work */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">How I Work</h3>
            <div className="grid grid-cols-2 gap-4">
              {workValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-4 bg-card border-border hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <div className={`inline-flex p-2 rounded-lg ${value.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why You Should Hire Me */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Why You Should Hire Me?</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Delivered Measurable AI Results</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Mahanadi Coalfields Limited, I optimized FAISS-based semantic search to achieve an 0.89 similarity score while reducing processing latency by 40%. My multimodal VisLang system achieved 92% object detection accuracy across 15+ classes, demonstrating my ability to build high-performance AI tools that solve specific operational challenges.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Expertise in Local LLMs and Real-Time Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I have extensive experience deploying local LLMs like LLaVA and Moondream via Ollama, achieving sub-2 second response times for natural language image queries. My work with YOLOv8 and Meta's SAM for real-time segmentation (0.94 IoU score) proves my capability in handling cutting-edge computer vision tasks.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2"></div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Leadership and Cross-Functional Collaboration</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As a Graphic Designer for the Aaruush National Technical Festival, I contributed to a visual identity that supported a reach of 2,000+ participants. Whether coordinating with technical teams at Mahanadi Coalfields Limited or presenting data insights to stakeholders at **Tata Group**, I drive project success through a blend of creative communication and technical leadership
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-card border border-border/50 rounded-2xl mb-4">
                <span className="text-3xl font-bold gradient-text">{stat.number}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;