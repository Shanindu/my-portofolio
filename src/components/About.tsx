import React from 'react';
import { GraduationCap, Code, Target, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'React.js', 'Node.js', 'Python', 'Java', 'HTML/CSS',
    'MongoDB', 'MySQL', 'Git', 'Tailwind CSS', 'Express.js', 'TypeScript'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated IT student with a passion for creating innovative solutions and learning cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-teal-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                    SP
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get to know me</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm currently pursuing a Higher National Diploma in Information Technology at the 
              Institute of Technology University of Moratuwa. My journey in technology has been 
              driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As I prepare to enter the professional world through internship opportunities, 
              I'm excited to apply my academic knowledge and contribute to meaningful projects. 
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
            <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600">
              Higher National Diploma in IT<br />
              Institute of Technology<br />
              University of Moratuwa
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Goal</h3>
            <p className="text-gray-600">
              Seeking internship opportunities to gain hands-on experience and contribute to innovative projects in the tech industry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl border border-teal-100 hover:shadow-lg transition-all duration-300">
            <Award className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Focus</h3>
            <p className="text-gray-600">
              Full-stack development, modern web technologies, and creating user-friendly applications with clean, maintainable code.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Technical <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;