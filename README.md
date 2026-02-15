Cosmic AI Engineer Portfolio;
A high-performance, responsive portfolio built to showcase expertise in Agentic AI, Gen AI, and Scalable ML Pipelines;

# Technical Stack:

Frontend: React 18, Vite, Tailwind CSS

Icons: Lucide-React

Animation: Framer Motion / CSS Keyframes

Deployment: Vercel / GitHub Pages

# Roadmap:

DAY 1: Foundation & The Cosmic Theme

  Initialized the React project using Vite.

  Configured Tailwind CSS for a dark-themed, "Cosmic" aesthetic.

  Implemented the StarBackground and ThemeToggle components.

  Built the Hero Section with fade-in animations.

DAY 2: Core Components & Skill Logic

  Developed the About Section focusing on my Master’s studies at FAU.

  Created a dynamic Skills Section with category filtering (AI/ML, Frontend, Backend).

  Refinement: Moved from "Percentage Bars" to a modern "Badge Cloud" to focus on expertise rather than  arbitrary numbers.

DAY 3: Project Architecture & Connectivity

  Built a reusable ProjectCard component.

  Implemented the .map() logic to render AI-focused projects dynamically from a data array.

  Developed the Contact Section with a minimalist, centered design for direct recruiter access.

  Fixed cross-component navigation bugs and ID mismatches.

  Post-Mortem: Bug Report & Debugging Log

  
"Bug Encountered" -	Root Cause	- Debugging Solution
"Invisible" Projects" - 	Data was defined but the .map() function was missing in the JSX.- Implemented a map loop to return JSX elements for each object in the projects array.
"Home Button Inactive" -	ID Mismatch - : Navbar looked for #home, but the Hero section was labeled #hero.	Standardized the Hero section ID to id="home".
"Contact Section Not Rendering" - 	Z-index conflict; the StarBackground was overlapping the section content.	 - Added relative z-10 and block classes to force the section to the foreground.
"Responsive Typograph" - Typo in Tailwind class (md:test-6xl). -	Corrected to md:text-6xl to ensure proper scaling on desktop.
