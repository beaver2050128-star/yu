import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'COMPANY', href: '/company' },
    { name: 'SERVICES', href: '/services' },
    { name: 'RESULTS', href: '/results' },
    { name: 'NEWS', href: '/news' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 p-6 md:p-8 flex justify-between items-center text-white pointer-events-auto mix-blend-difference transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-black/10' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center shrink-0">
          <Link to="/" className="hover:opacity-70 transition-opacity">
            <img src="/logo.png" alt="Yulife Inc." className="h-10 md:h-16 w-auto object-contain object-left" />
          </Link>
        </div>
        
        <nav className="flex-1 mx-2 md:mx-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center gap-5 md:gap-10 text-[9px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors hover:text-white ${
                  location.pathname === link.href ? 'text-white' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="flex items-center gap-3 md:gap-6 shrink-0">
          <Link to="/contact" className="text-[9px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] text-white/60 hover:text-white transition-colors flex items-center gap-1.5 md:gap-2 group">
            <span>CONTACT</span>
            <ArrowRight className="w-2.5 h-2.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </header>
    </>
  );
}
