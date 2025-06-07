import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            If you'd like to collaborate on projects or have any inquiries, feel free to reach out to me via email:
          </p>
          <div className="mt-4">
            <a
              href="mailto:rhaprace@gmail.com"
              className="text-neon-blue hover:text-neon-green transition-colors duration-300 text-lg font-medium"
            >
              rhaprace@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;