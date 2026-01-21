import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud, Monitor, Wrench } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Import developer icons - ensure these are installed via:
// npm install developer-icons
import {
  Python,
  Java,
  MySQL,
  FastAPI,
  MongoDB,
  Git,
  Docker,
  Linux,
  FlaskLight,
  FlaskDark,
  NumPy,
  HuggingFace
} from "developer-icons";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      { name: "Python", icon: Python, experience: "Advanced", description: "AI/ML, NLP, FastAPI, Flask" },
      { name: "SQL", icon: MySQL, experience: "Advanced", description: "Complex queries, Optimization" },
      { name: "C", icon: "C", experience: "Intermediate", description: "Core fundamentals" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      { name: "Scikit-learn", icon: "🧠", experience: "Advanced", description: "Regression, Classific" },
      { name: "TensorFlow", icon: "🔥", experience: "Intermediate", description: "Deep Learning, CNNs, Bi-LSTM" },
      { name: "Pandas", icon: "🐼", experience: "Advanced", description: "Data analysis & cleaning" },
      { name: "NumPy", icon: NumPy, experience: "Advanced", description: "Numerical computations" },
      { name: "HuggingFace", icon: HuggingFace, experience: "Intermediate", description: "Transformers, NLP models" }
    ]
  },
  {
    title: "Computer Vision & NLP",
    icon: Monitor,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      { name: "YOLOv8", icon: "🎯", experience: "Advanced", description: "Real-time object detection" },
      { name: "SAM", icon: "✂️", experience: "Intermediate", description: "Segment Anything Model" },
      { name: "Ollama", icon: "🦙", experience: "Advanced", description: "Local LLM deployment" },
      { name: "FAISS", icon: "🔍", experience: "Intermediate", description: "Vector similarity search" },
      { name: "LangChain", icon: "🦜", experience: "Intermediate", description: "RAG & AI Agents" }
    ]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    skills: [
      { name: "FastAPI", icon: FastAPI, experience: "Advanced", description: "High-performance APIs" },
      { name: "Flask", icon: "flask", experience: "Advanced", description: "Production ML backends" },
      { name: "MySQL", icon: MySQL, experience: "Advanced", description: "Schema design, normalization" },
      { name: "MongoDB", icon: MongoDB, experience: "Intermediate", description: "NoSQL data storage " }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Cloud,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    skills: [
      { name: "Docker", icon: Docker, experience: "Intermediate", description: "Containerized deployments" },
      { name: "Git/GitHub", icon: Git, experience: "Advanced", description: "Version control, collaboration" },
      { name: "Oracle Cloud", icon: Cloud, experience: "Certified", description: "OCI Data Science & GenAI " },
    ]
  }
];

const summaryStats = [
  { icon: Code, count: "4+", label: "Languages" },
  { icon: Brain, count: "20+", label: "ML Projects" },
  { icon: Database, count: "4+", label: "Models Deployed" },
  { icon: Cloud, count: "2+", label: "Cloud Certs" }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies utilized in production environments at MCL and through advanced AI certifications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 card-hover bg-card border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => {
                    let SkillIcon = skill.icon;
                    if (skill.icon === "flask") {
                      SkillIcon = theme === "dark" ? FlaskLight : FlaskDark;
                    }

                    return (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 transition-transform group-hover:scale-110">
                          {typeof SkillIcon === 'string' ? (
                            <span className="text-lg">{SkillIcon}</span>
                          ) : (
                            <SkillIcon className="h-5 w-5 text-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className={`text-[10px] px-1.5 h-4 border-primary/20 text-primary`}>
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-tight">{skill.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summaryStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card border-border">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;