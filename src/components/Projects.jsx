import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    live: 'https://ecommerce-platform-demo.netlify.app',
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather data using a third-party API.',
    image: '/projects/weather-app.jpg',
    technologies: ['React', 'OpenWeatherMap API', 'Tailwind CSS'],
    github: 'https://github.com/johndoe/weather-app',
    live: 'https://weather-app-demo.netlify.app',
  },
  {
    title: 'Task Manager',
    description: 'A task management application with drag-and-drop functionality.',
    image: '/projects/task-manager.jpg',
    technologies: ['React', 'Redux', 'React Beautiful DnD'],
    github: 'https://github.com/johndoe/task-manager',
    live: 'https://task-manager-demo.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;