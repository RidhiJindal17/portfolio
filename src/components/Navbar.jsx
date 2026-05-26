import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple logic to highlight active link based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = '';

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
          }
        }
      });

      if (current) {
        const activeName = navLinks.find(link => link.href === `#${current}`)?.name;
        if (activeName) setActiveLink(activeName);
      } else if (window.scrollY < 100) {
        setActiveLink('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-space font-bold tracking-wider z-50">
          <span className="text-gradient">Ridhi</span> Jindal
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-sm font-medium transition-all duration-300 hover:text-neonPink hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.8)] ${activeLink === link.name ? 'text-neonPink drop-shadow-[0_0_8px_rgba(255,20,147,0.8)]' : 'text-gray-300'
                }`}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-neonPurple text-neonPurple hover:bg-neonPurple hover:text-white rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(176,38,255,0.2)] hover:shadow-[0_0_15px_rgba(176,38,255,0.6)] text-sm font-semibold"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-gray-300 hover:text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen glass flex flex-col items-center justify-center space-y-8 z-40 md:hidden bg-darkBg/95 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-2xl font-space font-semibold transition-colors duration-300 ${activeLink === link.name ? 'text-gradient' : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-neonPurple to-neonPink rounded-full font-semibold text-lg shadow-[0_0_20px_rgba(176,38,255,0.4)]"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
