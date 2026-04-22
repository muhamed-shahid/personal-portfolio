import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'GitHub', 'Vercel', 'Postman', 'VS Code'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 rounded-2xl hover:-translate-y-1">
              <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full inline-block"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/20 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
