import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'bg-dark-900/70 backdrop-blur-2xl border-b border-white/5 shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity duration-300"
          >
            <Code2 className="w-8 h-8 text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
            <span className="font-display font-bold text-xl text-white">Shahid<span className="text-primary-500">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="nav-link"
                activeClass="active"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Shahid_cv_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-primary-500/50 text-primary-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 text-sm font-medium hover:scale-[1.02] active:scale-95 hover:shadow-lg hover:shadow-primary-500/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-110 active:scale-95"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-dark-800/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-primary-400 hover:bg-white/5 rounded-lg cursor-pointer transition-colors duration-300"
              activeClass="text-primary-400 bg-white/5"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="Shahid_cv_new.pdf"
            download="Muhamed_Shahid_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg mt-4 text-center border-none transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
