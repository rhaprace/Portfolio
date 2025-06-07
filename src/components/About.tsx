import { Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-12 text-white">
            ABOUT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Rafael Race, a passionate BSIT student.
                Currently building my expertise in modern web development while actively seeking internship opportunities
                to apply my growing skillset in real-world projects.
              </p>

              <p>
                My journey in tech has been driven by curiosity and a love for creating digital solutions.
                I'm eager to contribute to innovative teams, learn from industry professionals, and gain hands-on experience
                that will shape my career in frontend development.
              </p>
            </div>            <div>
              <a
                href="/CV.pdf"
                download="Rafael_Race_CV.pdf"
                className="inline-flex items-center space-x-2 bg-neon-blue text-white px-6 py-3 font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                <span>DOWNLOAD MY CV</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="relative w-80 h-80 bg-gradient-to-br from-orange-500 to-orange-600 p-1"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <div
                  className="w-full h-full bg-background"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Rafael Race - Profile"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  />
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