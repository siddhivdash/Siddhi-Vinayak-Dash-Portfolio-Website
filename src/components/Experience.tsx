import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap, Code } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Mahanadi Coalfields Limited (MCL)",
    period: "Jun 2025 – Jul 2025",
    location: "Sambalpur, Odisha",
    logo: "/MCL_logo.jpg", // Ensure you have this logo in your public folder
    achievements: [
      "Engineered MCLBuddy, an NLP-powered HR chatbot serving 500+ employees, reducing query resolution time from 4 hours to 15 minutes (73% improvement)",
      "Architected scalable backend with Flask APIs integrating ANN, RNN, Bi-LSTM, and Transformer models for production",
      "Optimized FAISS-based semantic search achieving 0.89 similarity score with 40% latency reduction",
      "Curated 2,000+ HR queries and 150+ FAQ pairs from internal documents with 98% accuracy in data quality",
      "Partnered with cross-functional teams to deliver a production-ready solution 2 weeks ahead of schedule"
    ],
    technologies: ["Python", "Flask", "NLP", "LLMs", "FAISS", "Bi-LSTM", "Transformers", "SQL"]
  },
  {
    title: "Data Analytics Virtual Experience",
    company: "Tata Group",
    period: "Aug 2025",
    location: "Remote",
    logo: "/Tata_logo.png",
    achievements: [
      "Analyzed 50,000+ transaction records to identify key business drivers and operational bottlenecks",
      "Constructed 3 predictive models to forecast demand and optimize inventory management",
      "Presented strategic data-driven insights to executive stakeholders to support business decision-making"
    ],
    technologies: ["Data Analytics", "Predictive Modeling", "Business Intelligence", "Excel", "Data Visualization"]
  },
  {
    title: "Graphic Designer",
    Event: "Aaruush National Technical Festival",
    period: "2024 – 2025",
    location: "Chennai, Tamil Nadu",
    logo: "/Aaruush_logo.png",
    achievements: [
      "Led digital marketing initiatives for a national festival with 2,000+ participants",
      "Produced 25+ promotional assets and coordinated cross-platform campaigns",
      "Increased event registration by 40% through targeted digital outreach and branding strategies"
    ],
    technologies: ["Digital Marketing", "Leadership", "Content Strategy", "Public Relations"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Professional</span> Journey
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Advancing the field of Artificial Intelligence through impactful internships and data-driven projects.
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <Card className="p-6 card-hover bg-card border-border shadow-lg">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-border"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary text-xs mt-1.5">●</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
                        <Code className="w-3 h-3 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;