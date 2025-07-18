import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const experience = {
    company: "CENTRAL CHINMAYA MISSION TRUST",
    position: "Junior Software Developer",
    duration: "May 2024 – Present",
    location: "Mumbai, India",
    contributions: [
      "Built official website for Central Chinmaya Mission",
      "Used next.js, React.js and node.js",
      "Collaborated with teams for testing and feedback",
      "Version control with Git",
      "Participated in code reviews"
    ]
  };

  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <motion.div
              whileInView={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24 mx-auto"
            />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {/* Company Header */}
            <div className="mb-6">
              <motion.h3
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white mb-2 flex items-center gap-3"
              >
                <Building className="text-blue-400" size={24} />
                {experience.company}
              </motion.h3>
              
              <motion.h4
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-blue-400 font-semibold mb-4"
              >
                {experience.position}
              </motion.h4>

              <div className="flex flex-wrap gap-4 text-gray-400">
                <motion.div
                  whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Calendar size={18} className="text-green-400" />
                  <span>{experience.duration}</span>
                </motion.div>
                
                <motion.div
                  whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <MapPin size={18} className="text-purple-400" />
                  <span>{experience.location}</span>
                </motion.div>
              </div>
            </div>

            {/* Key Contributions */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h5 className="text-lg font-semibold text-white mb-4">Key Contributions:</h5>
              <ul className="space-y-3">
                {experience.contributions.map((contribution, index) => (
                  <motion.li
                    key={index}
                    whileInView={{ opacity: [0, 1], x: [-30, 0] }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{contribution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Glowing Effect */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.1)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />
          </motion.div>

          {/* Future Goals */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-400 italic"
            >
              "Continuously learning and growing in the field of software development, 
              with a passion for creating innovative solutions."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;