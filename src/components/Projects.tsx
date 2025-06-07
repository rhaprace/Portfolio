import { ExternalLink, Github, ShoppingCart, Calendar, Dumbbell } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Event Management Platform",
      description: "A comprehensive web application built with React.js and Node.js that enables educational institutions to efficiently manage events, registrations, and user roles. Features real-time notifications, secure authentication, file uploads, analytics dashboards, and role-based access control for admins, organizers, and students.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      category: "Full-Stack",
      icon: Calendar,
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["Next.js", "React", "TypeScript", "Stripe"],
      github: "#",
      live: "#",
      category: "Full-Stack",
      icon: ShoppingCart,
      featured: true
    },
    {
      title: "Atletech - AI Fitness App",
      description: "AI-powered fitness application that helps users track their weight based on personal goals. Features customizable meal plans and workout routines tailored to individual fitness objectives and preferences.",
      tech: ["React", "AI/ML", "JavaScript", "CSS"],
      github: "#",
      live: "http://atletechteam.netlify.app/",
      category: "Web App",
      icon: Dumbbell,
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              MY PROJECTS
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of web applications and development projects I've built
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 group hover:border-primary/50 transition-all duration-300 hover:bg-card/50 flex flex-col h-full min-h-[280px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <project.icon className="h-6 w-6 text-primary group-hover:animate-glow-pulse flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-orbitron font-semibold text-base text-primary truncate">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>
                </div>
                <div className="flex space-x-2 flex-shrink-0 ml-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-neon-green transition-colors duration-300"
                    title="View Code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-neon-blue transition-colors duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                   style={{
                     display: '-webkit-box',
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: 'vertical',
                     lineHeight: '1.4',
                     maxHeight: '4.2em'
                   }}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs border border-primary/20 rounded hover:bg-primary/20 transition-colors duration-300 truncate max-w-20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs text-muted-foreground flex-shrink-0">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;