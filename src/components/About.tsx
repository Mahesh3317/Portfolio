import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
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

  const leftVariants = {
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

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
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
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={leftVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image Container */}
              <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
>
  <div className="aspect-square bg-gradient-to-br from-blue-00 to-purple-700 p-1 rounded-2xl shadow-2xl">
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <img
        src="myimage.jpeg" // ✅ remove "/public"
        alt="My Profile"
        className="w-full h-full object-contain scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  </div>
</motion.div>


              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={rightVariants} className="space-y-6">
            <div>
              <motion.h2 
                whileInView={{ scale: [0.8, 1] }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div
                whileInView={{ width: ["0%", "100%"] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-24 mb-8"
              />
            </div>

            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Full stack Developer skilled in building responsive, cross-platform web applications using 
              <span className="text-blue-400 font-semibold"> React.js</span>, 
              <span className="text-blue-400 font-semibold"> Next.js</span>, 
              <span className="text-blue-400 font-semibold"> JavaScript</span> and
              <span className="text-purple-400 font-semibold"> Node.js</span>. 
              Experienced with <span className="text-purple-400 font-semibold">HTML5</span>, 
              <span className="text-purple-400 font-semibold"> CSS3</span> and 
              <span className="text-green-400 font-semibold"> Git</span> version control.
            </motion.p>

            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Proven ability to collaborate in <span className="text-yellow-400 font-semibold">Agile teams</span>, 
              contribute to enterprise-level solutions, and ensure exceptional user experiences through 
              clean UI and performance optimization.
            </motion.p>

            {/* Stats */}
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">1.5</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;