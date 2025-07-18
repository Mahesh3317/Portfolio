import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleDownloadResume = () => {
    // In a real application, you would link to an actual resume file
    alert('Resume download feature - Please link to actual resume file');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* Avatar with 3D effect */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotateY: 15 }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold text-white">
              MS
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Mahesh Sharma
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
        >
          Junior Software Developer
        </motion.h2>

        {/* Location and Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-400" />
            <span>Kothrud, Pune, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-blue-400" />
            <span>+91-8003200269</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-400" />
            <span>maheshsharma14051@gmail.com</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
  href="Mahesh-Resume.pdf"
  download
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center gap-2 justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
>
  <Download size={20} />
  Download Resume
</motion.a>


          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-blue-500/10 transition-all duration-300"
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/mahesh-sharma-49200628a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com/Mahesh3317"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;