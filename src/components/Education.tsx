import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  type: string;
  icon: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education: Education[] = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Jai Narain Vyas University",
      duration: "2019 - 2022",
      location: "Rajasthan, India",
      type: "undergraduate",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Apex Public School",
      duration: "2018 - 2019",
      location: "India",
      type: "secondary",
      icon: "📚"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Prerana Public School",
      duration: "2016 - 2017",
      location: "India",
      type: "secondary",
      icon: "🏫"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education Timeline
            </h2>
            <motion.div
              whileInView={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24 mx-auto"
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"
            />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${
                      edu.type === 'undergraduate' 
                        ? 'from-blue-500 to-purple-500' 
                        : 'from-purple-500 to-pink-500'
                    } border-4 border-slate-900 z-10`}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"
                    />
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5
                    }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                      {/* Education Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl mb-4"
                      >
                        {edu.icon}
                      </motion.div>

                      {/* Education Details */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <motion.h4
                        whileInView={{ opacity: [0, 1], x: [20, 0] }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-blue-400 font-semibold mb-4"
                      >
                        {edu.institution}
                      </motion.h4>

                      <div className="space-y-2 text-gray-400">
                        <motion.div
                          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <Calendar size={16} className="text-green-400" />
                          <span>{edu.duration}</span>
                        </motion.div>
                        
                        <motion.div
                          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-center gap-2"
                        >
                          <MapPin size={16} className="text-purple-400" />
                          <span>{edu.location}</span>
                        </motion.div>
                      </div>

                      {/* Achievement Badge for BCA */}
                      {edu.type === 'undergraduate' && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm"
                        >
                          <Award size={14} />
                          <span>Bachelor's Degree</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educational Achievements */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm"
            >
              <GraduationCap size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Educational Philosophy</h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                "Education is the foundation of growth. Through continuous learning and practical application, 
                I've developed a strong foundation in computer science and software development, 
                always staying curious and eager to learn new technologies."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;