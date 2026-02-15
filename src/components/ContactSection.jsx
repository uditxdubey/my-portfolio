import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
            {/* Heading */}
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm currently looking for Working Student or Internship opportunities in AI & Data Science. 
                    Let's connect!
                </p>
            </div>

            {/* Centered Contact Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
                {/* Phone */}
                <div className="flex flex-col items-center space-y-3">
                    <div className="p-4 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary"/>
                    </div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+4915510318247" className="text-muted-foreground hover:text-primary transition-colors">
                        +49 155 10318247
                    </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center space-y-3">
                    <div className="p-4 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary"/>
                    </div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:ruditdubey@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        ruditdubey@gmail.com
                    </a>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center space-y-3">
                    <div className="p-4 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary"/>
                    </div>
                    <h4 className="font-semibold">Location</h4>
                    <span className="text-muted-foreground">Erlangen, Germany</span>
                </div>
            </div>

            {/* Social Connect */}
            <div className="pt-8 border-t border-white/5">
                <h4 className="font-medium mb-6">Connect With Me</h4>
                <div className="flex justify-center">
                    <a 
                        href="https://www.linkedin.com/in/udit-dubey-9aa0b9284/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all transform hover:scale-110"
                    >
                        <Linkedin className="h-6 w-6 text-primary" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}