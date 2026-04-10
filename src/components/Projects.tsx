import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SkyTrack AI",
    description: "Advanced drone-based vehicle detection and tracking system designed for real-time traffic monitoring and urban analytics.",
    achievements: [
      "Achieved 94% mAP for vehicle detection using YOLOv8 optimized for aerial perspectives",
      "Integrated ByteTrack algorithm for robust multi-object tracking across varying altitudes",
      "Developed custom analytics dashboard for traffic flow density and speed estimation"
    ],
    technologies: ["YOLOv8", "ByteTrack", "Python", "OpenCV", "Drone-Tech"],
    github: "https://github.com/siddhivdash/SkyTrack-AI---Drone-based-vehicle-detection-and-tracking-system.  ",
    period: "Feb 2026"
  },
  {
    title: "EmailIQ",
    description: "A privacy-first, local AI assistant for Gmail that automates categorization, summarization, and smart replies using local LLMs.",
    achievements: [
      "Built a secure local processing engine using Ollama to ensure zero data leakage",
      "Engineered automated email summarization and priority scoring with Mistral-7B",
      "Integrated LangChain for intelligent context-aware drafting of replies"
    ],
    technologies: ["Ollama", "Mistral", "LangChain", "Python", "Gmail API"],
    github: "https://github.com/siddhivdash/EmailIQ-Local-AI-Gmail-Assistant",
    period: "Jan 2026"
  },
  {
    title: "VisLang Multimodal AI",
    description: "Built a vision-language system integrating YOLOv8, Meta's SAM, and local LLMs (LLaVA) for real-time object detection and interactive image segmentation.",
    achievements: [
      "Achieved 92% object detection accuracy on 15+ classes and 0.94 IoU score in segmentation",
      "Enabled natural language image queries with sub-2 second response times via Ollama",
      "Containerized with Docker, reducing deployment time by 80% across environments"
    ],
    technologies: ["Python", "FastAPI", "YOLOv8", "SAM", "Ollama", "LLaVA", "Docker"],
    github: "https://github.com/siddhivdash/VISLANG-Real-Time-Vision-Language-Assistant",
    period: "Dec 2025"
  },
  {
    title: "Diamond Price Prediction",
    description: "Developed a production-grade ML pipeline to predict diamond prices based on 7 key features from a 54,000+ record dataset.",
    achievements: [
      "Achieved R² = 0.96 and RMSE = $287, supporting high-volume transaction estimates",
      "Reduced feature dimensionality by 40% while maintaining model accuracy",
      "Deployed Flask REST API with 99.8% uptime, processing 500+ daily predictions"
    ],
    technologies: ["Python", "Scikit-learn", "Flask", "REST APIs", "MySQL", "Pandas"],
    github: "https://github.com/siddhivdash/Diamond-Price-Prediction",
    period: "Jun 2025"
  },
  {
    title: "Diabetes Risk Classification",
    description: "Trained a healthcare classification system using Random Forest to predict patient risk based on clinical parameters.",
    achievements: [
      "Reached 89.2% peak accuracy and 0.88 AUC score for patient risk stratification",
      "Improved recall by 12% through hyperparameter tuning, reducing false negatives",
      "Optimized MySQL schema for sub-millisecond query response on 10,000+ records"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "MySQL"],
    github: "https://github.com/siddhivdash/Diabetes-Prediction-By-Testing-Different-ML-Algorithm",
    period: "May 2025"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Showcase</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          AI/ML pipelines and multimodal systems designed for high performance and real-world scalability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover bg-card border-border h-full">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/70 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{project.period}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-xs leading-normal">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-muted-foreground/90">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-[10px] py-0 border-primary/20 text-primary uppercase tracking-wider">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;