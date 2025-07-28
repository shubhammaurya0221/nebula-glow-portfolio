import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  DeviceMobile,
  Lightning
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', icon: Code, color: 'text-orange-500' },
    { name: 'CSS3', icon: Palette, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
    { name: 'React', icon: Code, color: 'text-cyan-400' },
    { name: 'Express', icon: Database, color: 'text-green-500' },
    { name: 'Node.js', icon: Database, color: 'text-green-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'MySQL', icon: Database, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-teal-400' },
    { name: 'Bootstrap', icon: Palette, color: 'text-purple-500' },
    { name: 'Next.js', icon: Globe, color: 'text-gray-300' },
    { name: 'Mobile Dev', icon: DeviceMobile, color: 'text-pink-400' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo(".skill-item",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Experience animation
      gsap.fromTo(".experience-item",
        { opacity: 0, x: -50, filter: "blur(5px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".experience-section",
            start: "top 85%",
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
      className="min-h-screen py-20 px-4 flex items-center"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-card p-2">
                <img 
                  src="/lovable-uploads/c93dc668-6835-4a45-944d-c13308d37d73.png"
                  alt="Aditya - Web Developer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I specialize in creating immersive, user-friendly digital experiences that push 
                the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a keen eye for design and a deep understanding of cutting-edge development 
                practices, I transform ideas into reality through clean, efficient code and 
                innovative solutions.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Technologies & Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="skill-item glass-card p-4 text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <IconComponent 
                        size={32} 
                        className={`${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Work Experience */}
            <div className="experience-section">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="experience-item glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        Frontend Developer
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        Parsh Technologies • Internship
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground mb-3">
                        <span>Jun 2025 - Present • 2 mos</span>
                        <span>Remote</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Developing responsive web applications using modern frontend technologies. 
                        Collaborating with design teams to implement user interfaces that enhance 
                        user experience and drive engagement.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          React
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          CSS3
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          HTML5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;