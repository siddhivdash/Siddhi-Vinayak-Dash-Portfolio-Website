import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud, Monitor, Zap, Bot, Target } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Ensure developer-icons is updated to support these imports
import {
  Python,
  MySQL,
  FastAPI,
  MongoDB,
  Git,
  Docker,
  NumPy,
  HuggingFace,
  FlaskLight,
  FlaskDark,
  PyTorch
} from "developer-icons";

const skillCategories = [
  {
    title: "Core AI & Generative AI",
    icon: Bot,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      { name: "Ollama / Mistral", icon: "🦙", experience: "Advanced", description: "Local LLM orchestration & private deployment" },
      { name: "LangChain", icon: "🦜", experience: "Advanced", description: "RAG pipelines & Agentic AI workflows" },
      { name: "HuggingFace", icon: HuggingFace, experience: "Advanced", description: "Transformer fine-tuning & Model Hub" },
      { name: "FAISS / Pinecone", icon: "🔍", experience: "Intermediate", description: "Vector similarity search for LLM context" }
    ]
  },
  {
    title: "Computer Vision & Robotics",
    icon: Target,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      { name: "YOLOv8 / v10", icon: "🎯", experience: "Advanced", description: "Real-time object detection & tracking" },
      { name: "ByteTrack", icon: "📡", experience: "Advanced", description: "Multi-object tracking for aerial/drone footage" },
      { name: "SAM (Meta)", icon: "✂️", experience: "Intermediate", description: "Zero-shot interactive image segmentation" },
      { name: "OpenCV", icon: "📷", experience: "Advanced", description: "Image processing & spatial analytics" }
    ]
  },
  {
    title: "Machine Learning Foundations",
    icon: Brain,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      { name: "PyTorch", icon: PyTorch, experience: "Advanced", description: "Neural network architecture & training" },
      { name: "Scikit-learn", icon: "🧠", experience: "Advanced", description: "Predictive modeling & risk classification" },
      { name: "Pandas/NumPy", icon: NumPy, experience: "Advanced", description: "Large-scale data engineering & ETL" },
      { name: "TensorFlow", icon: "🔥", experience: "Intermediate", description: "Deep Learning & CNN implementations" }
    ]
  },
  {
    title: "Backend & ML Systems",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    skills: [
      { name: "FastAPI / Flask", icon: FastAPI, experience: "Advanced", description: "Asynchronous high-performance AI APIs" },
      { name: "MySQL / MongoDB", icon: MySQL, experience: "Advanced", description: "Optimized schema design for ML records" },
      { name: "REST APIs", icon: Zap, experience: "Advanced", description: "Production-grade microservices architecture" }
    ]
  },
  {
    title: "MLOps & Cloud Strategy",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      { name: "Docker", icon: Docker, experience: "Advanced", description: "Containerization & multi-stage builds" },
      { name: "Oracle Cloud (OCI)", icon: Cloud, experience: "Certified", description: "GPU provisioning & GenAI Professional" },
      { name: "Git/CI-CD", icon: Git, experience: "Advanced", description: "Version control & automated deployment" },
    ]
  }
];

const summaryStats = [
  { icon: Bot, count: "5+", label: "GenAI Apps" },
  { icon: Target, count: "94%", label: "mAP (Vision)" },
  { icon: Zap, count: "60%", label: "Efficiency Gain" },
  { icon: Cloud, count: "2x", label: "OCI Certified" }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in deploying high-concurrency AI systems, spanning from <span className="text-foreground font-semibold">Autonomous Drone Vision</span> to <span className="text-foreground font-semibold">Agentic LLM Frameworks</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 card-hover bg-card border-border flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-5 flex-1">
                  {category.skills.map((skill, idx) => {
                    let SkillIcon = skill.icon;
                    if (skill.icon === "flask") {
                      SkillIcon = theme === "dark" ? FlaskLight : FlaskDark;
                    }

                    return (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1 flex-shrink-0 transition-transform group-hover:scale-110">
                          {typeof SkillIcon === 'string' ? (
                            <span className="text-lg">{SkillIcon}</span>
                          ) : (
                            <SkillIcon className="h-5 w-5 text-foreground/80" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                            <span className="text-[9px] uppercase tracking-tighter text-primary font-bold opacity-70">
                              {skill.experience}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-tight italic">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Impact-Driven Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card/50 border-border hover:border-primary/50 transition-colors">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-black text-primary mb-1">{stat.count}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;