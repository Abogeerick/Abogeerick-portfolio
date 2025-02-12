import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile-picture.jpg.jpeg';



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
              src={profilePicture} 
              alt="Erick Aboge"
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
              Hi, I’m Erick Aboge, a dedicated Software Engineer with a strong background in both Quality Assurance and front-end development. Currently, I work on ERP systems at Optiven Ltd, where I focus on building scalable, cross-platform mobile applications using Flutter and ensuring high-quality, bug-free software through comprehensive testing. I am passionate about developing seamless, user-friendly applications and optimizing systems to meet both functional and performance standards
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I have a Bachelor's Degree in Finance/Information Technology from the University of Nairobi and a Software Development Certificate from Moringa School. My experience spans across both front-end and back-end development, with a particular interest in creating intuitive and engaging user interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Outside of coding, I love exploring new technologies, working on freelance projects, and contributing to open-source communities. I’m always eager to learn and grow, whether it’s through new tools or frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
