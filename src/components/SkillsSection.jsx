import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // AI & Machine Learning Specialization
  { name: "Python / PyTorch", category: "AI/ML" },
  { name: "Gen AI (LLMs & RAG)", category: "AI/ML" },
  { name: "Agentic AI (LangChain)", category: "AI/ML" },
  { name: "AI/ML Pipelines", category: "AI/ML" },

  // Frontend & UI
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Data & Backend
  { name: "SQL", category: "Backend" },
  { name: "Vector DBs (Chroma/Pinecone)", category: "Backend" },
  { name: "FastAPI / Node.js", category: "Backend" },

  // Professional Tools & DevOps
  { name: "Git / GitHub", category: "Tools" },
  { name: "Docker / Kubernetes", category: "Tools" },
  { name: "Linux / Bash", category: "Tools" },
  { name: "Cloud (AWS/Azure)", category: "Tools" }
];

const categories = ["All", "AI/ML", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory);

    return ( 
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Technical <span className="text-primary">Expertise</span>
                </h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                                    : "bg-secondary/50 text-foreground hover:bg-secondary/80"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid - Modern Badge Style */}
                <div className="flex flex-wrap justify-center gap-4">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="px-6 py-4 rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm 
                                       hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] 
                                       transition-all duration-300 group cursor-default"
                        >
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};