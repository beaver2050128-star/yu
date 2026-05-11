import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-20 py-12 border-t border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between px-8 md:px-[8vw] lg:px-[12vw] text-center bg-transparent backdrop-blur-sm mt-auto">
      <div className="flex items-center gap-6 text-[10px] md:text-xs text-white/40 tracking-widest font-light">
        <Link to="/company" className="hover:text-white transition-colors">COMPANY</Link>
        <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
        <Link to="/results" className="hover:text-white transition-colors">RESULTS</Link>
        <Link to="/contact" className="hover:text-white transition-colors">CONTACT</Link>
        <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
      </div>
      <p className="text-[10px] text-white/30 tracking-widest font-light uppercase">
        © Yulife Inc. All Rights Reserved.
      </p>
    </footer>
  );
}
