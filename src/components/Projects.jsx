import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import housePlans from '../assets/houseplans.png';
import trade from '../assets/trade.png'; 
import news from '../assets/news.png';
import cli from '../assets/cli.png';
import erp from '../assets/erp.png';
import crm from '../assets/crm.png';
const projects = [
  {
    title: 'HousePlans',
    description: 'An interactive, React-based web application for showcasing diverse house plans in categories like Trending, New, Featured, and Luxury.',
    image: housePlans,
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/Abogeerick/housing-project',
    live: 'https://project-app-dixx.onrender.com',
  },
  {
    title: 'Trade',
    description: 'An innovative online shopping platform with a user-friendly interface for browsing, searching, and purchasing products.',
    image: trade,
    technologies: ['React', 'JavaScript', 'CSS', 'Node.js'],
    github: 'https://github.com/Bisinle/Trade',
    live: 'https://traded.netlify.app',
  },
  {
    title: 'News Sources',
    description: 'A web application for aggregating news from various categories, offering a centralized platform for news updates.',
    image: news,
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/eugenemrg/News-Sources',
    live: 'https://eugenemrg.github.io/News-Sources',
  },
  {
    title: 'Inventory Management CLI',
    description: 'A command-line interface (CLI) application for efficient inventory management, enabling functionalities like adding, viewing, and deleting products and transactions.',
    image: cli,
    technologies: ['Node.js', 'JavaScript'],
    github: 'https://github.com/Abogeerick/CLI_project',
    live: '',
  },
  {
    title: 'ERP System (HR Module)',
    description: 'Developed and maintained an ERP system for employee management and payroll processing, automating various HR functions. (Private project for previous employer)',
    image: erp,
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    github: '',
    live: '',
  },
  {
    title: 'CRM Automation System',
    description: 'Designed a CRM system to streamline customer engagement workflows and improve lead management efficiency. (Private project for previous employer)',
    image: crm,
    technologies: ['Python', 'Django', 'PostgreSQL'],
    github: '',
    live: '',
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
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
