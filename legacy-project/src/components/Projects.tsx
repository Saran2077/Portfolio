import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-featured MERN stack e-commerce platform with Stripe integration, admin dashboard, and secure authentication.',
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
      github: 'https://github.com/Saran2077/E-Commerce-website',
      demo: '#',
    },
    {
      title: 'Social Media Website',
      description: 'Dynamic messaging and content posting platform using MERN stack with real-time features powered by Socket.io.',
      image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chakra UI'],
      github: 'https://github.com/Saran2077/Socail-App',
      demo: '#',
    },
    {
      title: 'House Renting Website',
      description: 'Developed a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application for house rentals, implementing secure user authentication using JWT tokens and MongoDB Atlas for database management',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
      github: 'https://github.com/Saran2077/E-Commerce-website',
      demo: '#',
    },
    {
      title: 'User Management in React(tsx)',
      description: 'Dynamic messaging and content posting platform using MERN stack with real-time features powered by Socket.io.',
      image: 'https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Chakra UI'],
      github: 'https://github.com/Saran2077/UserManagement',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-800 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {/* <a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a> */}
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