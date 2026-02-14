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
export const SkillsSection = () => {
    return ( 
        <section 
        id="skills"
        className="py-24 px-4 relative bg-secondary/30"
        >

        </section>
    );
};