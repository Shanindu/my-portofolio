import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-teal-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  SP
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-200 to-teal-200 bg-clip-text text-transparent">
              Shanidu Polhena
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            IT Undergraduate at Institute of Technology University of Moratuwa
          </p>

          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and ready to contribute to innovative projects. 
            Currently seeking internship opportunities to apply my skills and gain valuable industry experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/shanidupokuna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/shanidu-polhena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:shanidu.polhena@example.com"
              className="text-white hover:text-purple-200 transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;