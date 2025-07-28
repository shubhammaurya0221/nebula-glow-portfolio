import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowSquareOut, Code } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const projects = [
    {
      id: 1,
      title: "Email for Developers",
      description: "A sophisticated email platform designed specifically for developers with advanced features and integrations.",
      image: "/lovable-uploads/bd2d93e3-7edb-4a08-8ed6-b3d797db5219.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "3D Gaming Interface",
      description: "Next-level gaming UI with immersive 3D elements and smooth animations for enhanced user experience.",
      image: "/lovable-uploads/f75744c9-9764-4a23-bd61-d56dfa65bb08.png",
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "A stunning portfolio website featuring 3D elements, smooth animations, and modern design principles.",
      image: "/lovable-uploads/cdad9e0f-dde9-4e79-aa68-42f5a09fd294.png",
      tech: ["Next.js", "Spline", "GSAP", "TypeScript"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/lovable-uploads/bd2d93e3-7edb-4a08-8ed6-b3d797db5219.png",
      tech: ["React", "Express", "MySQL", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "AI Dashboard",
      description: "Intelligent dashboard with data visualization, machine learning insights, and real-time analytics.",
      image: "/lovable-uploads/f75744c9-9764-4a23-bd61-d56dfa65bb08.png",
      tech: ["React", "Python", "D3.js", "TensorFlow"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Mobile App UI",
      description: "Beautiful and responsive mobile application interface with smooth animations and intuitive design.",
      image: "/lovable-uploads/cdad9e0f-dde9-4e79-aa68-42f5a09fd294.png",
      tech: ["React Native", "Expo", "TypeScript", "Styled Components"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Project cards stagger animation
      gsap.fromTo(".project-card",
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 px-4"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass-card group hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-primary/80 hover:bg-primary">
                      <ArrowSquareOut size={16} className="mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30">
                      <Code size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;