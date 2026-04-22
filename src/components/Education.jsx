import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Kannur University',
    score: '79.22%',
    year: 'Graduated',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Govt HSS Ramanthali',
    score: '92%',
    year: 'Completed',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent-500/10 rounded-full mix-blend-multiply filter blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 md:p-8 rounded-2xl relative group overflow-hidden hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 ml-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mt-1 flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-slate-400 text-lg mb-2">{item.institution}</p>
                    <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-primary-400 font-medium text-sm">
                      Score: {item.score}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 md:ml-0 ml-16 md:mt-0 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium text-sm">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
