import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Zap, Trophy, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  provider: string;
  description: string;
  icon: React.ReactNode;
  featured: boolean;
  skills: string[];
  gradient: string;
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const certifications: Certification[] = [
    {
      title: "Promote Engineer from GradUp",
      provider: "GradUp Platform",
      description: "Advanced engineering promotion certification recognizing exceptional technical skills and leadership potential in software development.",
      icon: <Trophy className="w-8 h-8" />,
      featured: true,
      skills: ["Leadership", "Advanced Engineering", "Problem Solving"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Full Stack Java Development",
      provider: "Qspider's, Pune",
      description: "Comprehensive certification covering Java ecosystem, Spring Boot, database integration, and full-stack development practices.",
      icon: <Zap className="w-8 h-8" />,
      featured: false,
      skills: ["Java", "Spring Boot", "Full Stack", "Database"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "RSCIT",
      provider: "Rajasthan Knowledge Corporation Limited",
      description: "Rajasthan State Certificate course in Information Technology covering fundamental IT skills and computer applications.",
      icon: <Award className="w-8 h-8" />,
      featured: false,
      skills: ["IT Fundamentals", "Computer Applications", "Digital Literacy"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Advanced React.js & Next.js",
      provider: "Udemy",
      description: "Advanced course covering modern React patterns, Next.js framework, server-side rendering, and performance optimization.",
      icon: <Star className="w-8 h-8" />,
      featured: false,
      skills: ["React.js", "Next.js", "SSR", "Performance"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
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
              Certifications & Achievements
            </h2>
            <motion.div
              whileInView={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24 mx-auto"
            />
          </motion.div>

          {/* Featured Certification */}
          {certifications
            .filter(cert => cert.featured)
            .map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="mb-12"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  className="relative bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-3xl p-8 overflow-hidden"
                >
                  {/* Featured Badge */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  >
                    ✨ FEATURED
                  </motion.div>

                  {/* Background Animation */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
                  />

                  <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                    {/* Content */}
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${cert.gradient} text-white mb-6 shadow-lg`}
                      >
                        {cert.icon}
                      </motion.div>

                      <h3 className="text-3xl font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      
                      <h4 className="text-xl text-yellow-400 font-semibold mb-4">
                        {cert.provider}
                      </h4>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>View Certificate</span>
                      </motion.button>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-4">Key Skills:</h5>
                      <div className="grid grid-cols-1 gap-3">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-lg border border-yellow-500/20"
                          >
                            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                            <span className="text-gray-300">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

          {/* Other Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {certifications
              .filter(cert => !cert.featured)
              .map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    rotateY: 5
                  }}
                  className="relative bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 overflow-hidden group cursor-pointer"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Certification Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cert.gradient} text-white mb-4 shadow-lg`}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <h4 className="text-blue-400 font-semibold mb-3">
                      {cert.provider}
                    </h4>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full border border-gray-500/30">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                    >
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </motion.button>
                  </div>

                  {/* Floating Animation */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full border border-blue-500/20"
                  />
                </motion.div>
              ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "4+", label: "Certifications", icon: Award },
                { number: "100%", label: "Completion Rate", icon: Star },
                { number: "2+", label: "Years Learning", icon: Zap },
                { number: "1", label: "Featured Achievement", icon: Trophy }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-slate-900/60 rounded-xl border border-blue-500/20"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;