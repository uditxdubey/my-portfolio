import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:test-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Udit</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Dubey</span>
                        
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I specialize in architecting Agentic AI workflows and Gen AI systems that bridge the gap between complex data and autonomous, real-world solutions. With a focus on scalable ML pipelines, I build technologies that are not only technically sound but genuinely intelligent.
                        

                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                        View My Work</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span>Scroll</span>
            <ArrowBigDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};