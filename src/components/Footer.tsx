import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-sm border-t border-blue-500/20 pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Mahesh Sharma
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Junior Software Developer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Mahesh3317"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mahesh-sharma-49200628a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="mailto:maheshsharma14051@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5, color: '#3b82f6' }}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="text-gray-400"
              >
                <span className="text-blue-400 font-medium">Email:</span><br />
                maheshsharma14051@gmail.com
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-gray-400"
              >
                <span className="text-blue-400 font-medium">Phone:</span><br />
                +91-8003200269
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="text-gray-400"
              >
                <span className="text-blue-400 font-medium">Location:</span><br />
                Kothrud, Pune, India
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-center md:text-left flex items-center gap-2"
          >
            <span>© {currentYear} Designed & Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            <span>by Mahesh Sharma</span>
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full border border-blue-500/20"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full border border-purple-500/20"
        />
      </div>
    </footer>
  );
};

export default Footer;