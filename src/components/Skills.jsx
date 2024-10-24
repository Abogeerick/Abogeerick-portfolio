import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, level: 80 },
  { name: 'JavaScript', icon: FaJs, level: 85 },
  { name: 'HTML5', icon: FaHtml5, level: 90 },
  { name: 'CSS3', icon: FaCss3, level: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 75 },
  { name: 'TypeScript', icon: SiTypescript, level: 70 },
  { name: 'Git', icon: FaGitAlt, level: 80 },
  { name: 'Node.js', icon: FaNode, level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-4xl text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;