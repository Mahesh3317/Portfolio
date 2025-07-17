import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills: Skill[] = [
    { name: "JavaScript", level: 90, category: "Frontend", color: "from-yellow-400 to-yellow-600" },
    { name: "React.js", level: 85, category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "HTML5", level: 95, category: "Frontend", color: "from-orange-400 to-orange-600" },
    { name: "CSS3", level: 90, category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 80, category: "Frontend", color: "from-gray-400 to-gray-600" },
    { name: "Java", level: 85, category: "Backend", color: "from-red-400 to-red-600" },
    { name: "Node.js", level: 75, category: "Backend", color: "from-green-400 to-green-600" },
    { name: "Oracle SQL", level: 80, category: "Database", color: "from-red-400 to-red-600" },
    { name: "MySQL", level: 85, category: "Database", color: "from-blue-400 to-blue-600" },
    { name: "Git", level: 88, category: "Tools", color: "from-orange-400 to-orange-600" },
    { name: "GitHub", level: 85, category: "Tools", color: "from-gray-400 to-gray-600" },
    { name: "Postman", level: 80, category: "Tools", color: "from-orange-400 to-orange-600" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={skillVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <motion.div
              whileInView={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24 mx-auto"
            />
          </motion.div>

          {/* Skills by Category */}
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={skillVariants}
                className="bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                    category === 'Frontend' ? 'from-blue-400 to-blue-600' :
                    category === 'Backend' ? 'from-green-400 to-green-600' :
                    category === 'Database' ? 'from-purple-400 to-purple-600' :
                    'from-orange-400 to-orange-600'
                  }`} />
                  {category}
                </h3>

                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        {/* Skill Name and Percentage */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>

                        {/* Progress Bar Background */}
                        <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                          {/* Progress Bar Fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            {/* Glowing Effect */}
                            <motion.div
                              animate={{ 
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm`}
                            />
                          </motion.div>

                          {/* Skill Level Indicator */}
                          <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: `${skill.level - 100}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.1,
                              ease: "easeOut"
                            }}
                            className="absolute top-0 right-0 h-full w-1 bg-white rounded-full shadow-lg"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Bubbles Visualization */}
          <motion.div
            variants={skillVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Interactive Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className={`relative px-6 py-3 bg-gradient-to-r ${skill.color} rounded-full text-white font-semibold cursor-pointer shadow-lg hover:shadow-xl`}
                >
                  {skill.name}
                  
                  {/* Floating Animation */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 2 + Math.random() * 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;