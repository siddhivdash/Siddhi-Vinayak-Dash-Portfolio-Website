import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "SAP Certified Associate - SAP Generative AI Developer",
    issuer: "SAP",
    date: "2026",
    description: "Validated expertise in developing and deploying generative AI applications using SAP AI Core and SAP Generative AI Hub on the Business Technology Platform.",
    skills: ["SAP AI Core", "SAP BTP", "Generative AI Hub"],
    icon: "/placeholder.svg", 
    verifyUrl: "https://www.credly.com/badges/eb7675fd-03a4-424e-aa7e-ffafd439da1e/public_url"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    description: "Specialized in machine learning pipelines, cloud infrastructure, and statistical modeling methodologies.",
    skills: ["ML Pipelines", "Cloud Infrastructure", "Statistical Modeling"],
    icon: "/oracle-logo.png",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A5596DBB58DC361AE8BFFC57984EFDD274F981176E805B2EC875C4B00FCA758C"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    description: "Expert-level proficiency in LLM architectures, prompt engineering, and generative AI systems.",
    skills: ["LLM Architecture", "Prompt Engineering", "Generative AI"],
    icon: "/oracle-logo.png",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=384210BAA67BD4C3FCE1CC95941AFD5D8CB4222F969417A40E32A744D4A24962"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "IIT Kharagpur (NPTEL)",
    date: "2025",
    description: "Mastered 12+ core algorithms across supervised and unsupervised learning paradigms.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Algorithms"],
    icon: "/nptel-logo.png",
    verifyUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS149S13320051509187131"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Industry-recognized credentials validating expertise in Cloud AI, Data Science, and Machine Learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 flex flex-col card-hover bg-card border-border h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="h-20 w-20 text-primary" />
              </div>
              
              <div className="mb-6">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
                  {cert.date}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold text-sm mb-4">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full group" asChild>
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    Verify Credential <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;