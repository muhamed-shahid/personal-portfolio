import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects (Smooth Parallax is usually done via scroll library, but we'll keep these soft blobs) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 md:pt-28 lg:pt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeUpVariant}>
              <span className="text-primary-400 font-medium tracking-wider uppercase text-sm">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              variants={fadeUpVariant}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight"
            >
              Muhamed Shahid P
            </motion.h1>
            
            <motion.h2
              variants={fadeUpVariant}
              className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-slate-400 font-light"
            >
              Full Stack Web Developer
            </motion.h2>
            
            <motion.p
              variants={fadeUpVariant}
              className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-400 font-light leading-relaxed"
            >
              Building scalable and secure web applications with modern technologies. 
              Passionate about delivering elegant solutions to complex problems.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                className="px-8 py-3 rounded-full glass text-white font-medium shadow-sm hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
            >
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:muhamedshahid7860@gmail.com" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <span className="sr-only">Email</span>
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Profile Image Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full p-2 bg-gradient-to-tr from-primary-500/30 to-accent-500/30 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700 ease-out shadow-2xl overflow-visible">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-dark-800">
                  <img 
                    src="/image.png" 
                    alt="Muhamed Shahid P - Developer Portrait"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
