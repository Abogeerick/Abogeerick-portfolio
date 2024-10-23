import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 mb-8 md:mb-0"
          >
            <img
              src="/profile-picture.jpg"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hi, I'm John Doe, a passionate junior software developer with a keen interest in creating efficient and elegant solutions. I recently graduated from XYZ University with a degree in Computer Science and have been honing my skills in web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in software development started with a fascination for problem-solving and has evolved into a love for crafting user-friendly applications. I'm particularly excited about front-end technologies and how they can be used to create engaging user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software design patterns.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;