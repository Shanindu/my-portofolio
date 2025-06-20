import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking for project management.",
      technologies: ["React.js", "Firebase", "Material-UI", "Socket.io"],
      githubUrl: "https://github.com/Shanindu/MERN-Task-Manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      image: "https://uizard.io/static/e5daa42c17923ec354ca0c0414827192/a8e47/320c8071bbbf30e4e49720dd798987a8896cbeb8-1440x835.png?raw=true"
    },
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather application providing current weather, 7-day forecasts, weather maps, and location-based services with beautiful visualizations and responsive design.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/Shanindu/react-weather-app-master1",
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      image: "https://cdn.dribbble.com/userupload/4246709/file/original-7ec7d3e380f5f080b4d0fea878dc4375.jpg?resize=1200x900?raw=true"
    },
    {
      title: "Portfolio Website",
      description: "A professional responsive portfolio website built with React.js and TypeScript.",
      technologies: ["React.js", "TypeScript", "CSS", "Vite"],
      githubUrl: "https://github.com/Shanindu/my-portofolio",
      liveUrl: "#",
      image: "https://github.com/Shanindu/File-1/blob/main/Screenshot%202025-06-20%20125943.png?raw=true"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-teal-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-teal-700 transition-all flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/Shanindu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;