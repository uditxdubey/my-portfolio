import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";

const projects = [
    {
    id: 1, // Update ID as needed
    title: "Industrial Agentic RAG",
    description: "A zero-hallucination multi-agent system designed to query and compare industrial automation manuals using a semantic router and hybrid vector stores to prevent cross-brand data bleeding.",
    image: "/projects/ai1.png", 
    tags: ["Python", "LlamaIndex", "Groq", "Streamlit", "ChromaDB"],
    demoUrl: "#", // Add link if hosted
    githubUrl: "https://github.com/uditxdubey/Industrial-Intelligence-Engine", 
  },
    {
    id: 2, // Update accordingly
    title: "Sovereign Shield",
    description: "A local-first runtime interception layer for AI agents that enforces real-time EU AI Act compliance (Art. 10, 13, 53). It prevents PII leaks and unauthorized cross-border data transfers with <2ms latency.",
    image: "/projects/ai2.png", 
    tags: ["Python", "Cybersecurity", "EU AI Act", "LangChain", "Regex"],
    demoUrl: "#", 
    githubUrl: "https://github.com/uditxdubey/MAS_UND", 
  },
    {
    id: 3, 
    title: "Validex API & Validator",
    description: "An AI-driven startup pitch validator that provides structured GO/NO-GO/ASK decisions. Features a real-time FastAPI backend, session-based conversation history, and a modern responsive dashboard for market and technical analysis.",
    image: "/projects/ai3.png", 
    tags: ["FastAPI", "Uvicorn", "Python", "REST API", "Responsive Design"],
    demoUrl: "#", // Update if you deploy to Fly.io or Vercel
    githubUrl: "https://github.com/uditxdubey/Validex", 
  },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project showcases my skills in software development, machine learning, and AI. Feel free to explore the code and live demos!
                </p>
                
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="gradient-border card-hover overflow-hidden flex flex-col h-full bg-background/50 backdrop-blur-sm">
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 ">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary font-medium border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between items-center pt-4 border-t border-muted">
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLinkIcon size={20} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/uditxdubey">
                        View my Github <ArrowRight size={20} />
                    </a>

                </div>
            </div>
        </section>
    );
};