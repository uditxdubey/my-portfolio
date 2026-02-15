import { Key } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // AI & Machine Learning Specialization
  { name: "Python / PyTorch", level: 85, category: "AI/ML" },
  { name: "Gen AI (LLMs & RAG)", level: 80, category: "AI/ML" },
  { name: "Agentic AI (LangChain)", level: 75, category: "AI/ML" },
  { name: "AI/ML Pipelines", level: 70, category: "AI/ML" },

  // Frontend & UI (Essential for AI Demos/Dashboards)
  { name: "React / Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },

  // Data & Backend
  { name: "SQL", level: 85, category: "Backend" },
  { name: "Vector DBs (Chroma/Pinecone)", level: 75, category: "Backend" },
  { name: "FastAPI / Node.js", level: 80, category: "Backend" },

  // Professional Tools & DevOps
  { name: "Git / GitHub", level: 90, category: "Tools" },
  { name: "Docker / Kubernetes", level: 75, category: "Tools" },
  { name: "VS Code", level: 80, category: "Tools" },
  { name: "Cloud (AWS/Azure)", level: 65, category: "Tools" }
];

const categories = ["All", "AI/ML", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory);
    return ( 
        <section 
        id="skills"
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx:auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-4 py-2 rounded-full text-sm font-medium capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary/90"
                            )}
                                >
                                {category}
                                </button>
                            ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                            <div className="text-left mv-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{ width: skill.level + "%" }}
                            />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};