import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Terminal, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Detail-oriented BCA graduate specializing in the MERN stack with hands-on experience in building and deploying full-stack applications. Passionate about scalable solutions and modern web technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I thrive in collaborative environments and enjoy transforming complex problems into elegant, user-friendly digital experiences. Always eager to learn and adopt new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: MapPin, color: 'text-primary-400', bg: 'bg-primary-500', groupBg: 'bg-primary-500/10', title: 'Location', text: 'Kannur, Kerala, India' },
              { icon: User, color: 'text-accent-400', bg: 'bg-accent-500', groupBg: 'bg-accent-500/10', title: 'Role', text: 'Full Stack Dev' },
              { icon: Terminal, color: 'text-blue-400', bg: 'bg-blue-500', groupBg: 'bg-blue-500/10', title: 'Experience', text: 'Fresher' },
              { icon: Coffee, color: 'text-green-400', bg: 'bg-green-500', groupBg: 'bg-green-500/10', title: 'Interests', text: 'Coding & Tech' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="glass-card p-6 rounded-xl flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-full ${item.groupBg} flex items-center justify-center ${item.color} group-hover:${item.bg} group-hover:text-white transition-colors duration-500`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <p className="text-white font-medium">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
