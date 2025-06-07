const Skills = () => {
  const techCategories = [
    {
      title: "Frontend",
      color: "neon-green",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Styling & UI",
      color: "neon-blue",
      technologies: ["Tailwind CSS", "Figma"]
    },
    {
      title: "Backend & Database",
      color: "neon-purple",
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "Tools & Testing",
      color: "neon-green",
      technologies: ["Git", "Vite",  "Socket.io"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              TECH STACK
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to build modern, scalable, and performant web applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 hover:bg-card/50"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className={`font-orbitron font-bold text-lg mb-2 text-${category.color}`}>
                  {category.title}
                </h3>
                <div className={`h-0.5 w-16 bg-gradient-to-r from-${category.color} to-${category.color}/50 mx-auto`}></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech}
                    className="group/tech hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${(categoryIndex * 6 + techIndex) * 100}ms` }}
                  >
                    <div className={`
                      relative bg-card/50 backdrop-blur-sm border border-${category.color}/30
                      hover:border-${category.color}/60 hover:bg-card/70 transition-all duration-300
                      hover:shadow-lg hover:shadow-${category.color}/20 rounded-lg p-3 min-h-[60px]
                      flex items-center justify-center
                    `}>
                      <span className={`
                        font-medium text-xs text-center text-${category.color}
                        group-hover/tech:text-white transition-colors duration-300
                        leading-tight
                      `}>
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;