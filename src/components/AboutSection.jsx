import { Bot, Sparkles, Workflow } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Aspiring Data Scientist & AI Engineer </h3>
                    <p className="text-muted-foreground">
                        Master's student at FAU Erlangen-Nürnberg specializing in the architecture of autonomous agents and scalable RAG-based Generative AI systems.
                    </p>
                    <p className="text-muted-foreground">
                        I bridge the gap between statistical theory and production-grade AI by architecting end-to-end ML pipelines that prioritize scalability and interpretability. My focus is on transforming complex data into robust, real-world solutions that evolve alongside the rapidly shifting AI landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Bot className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Gen AI Development</h4>
                                <p className="text-muted-foreground">Specializing in RAG (Retrieval-Augmented Generation) architectures and fine-tuning LLMs to minimize hallucinations and maximize factual accuracy in domain-specific tasks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Agentic AI</h4>
                                <p className="text-muted-foreground">Designing autonomous multi-agent systems using frameworks like LangGraph or AutoGen to execute complex, multi-step reasoning and automated tool-use.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Workflow className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI/ML Pipelines</h4>
                                <p className="text-muted-foreground">Architecting scalable, end-to-end data lifecycles—from automated feature engineering and statistical validation to containerized model deployment and monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section> 
    );
};