import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-display font-bold text-white cursor-pointer inline-block mb-2"
            >
              Shahid<span className="text-primary-500">.</span>
            </Link>
            <p className="text-slate-400 text-sm">Building scalable and secure web applications.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:muhamedshahid7860@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Muhamed Shahid P. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
