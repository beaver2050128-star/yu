import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ImmersiveBackground from './components/ImmersiveBackground';

import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Results from './pages/Results';
import News from './pages/News';
import Contact from './pages/Contact';
import Success from './pages/Success';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#000000] text-[#e0e0e0] font-sans selection:bg-sky-500/30 selection:text-sky-50 relative overflow-x-hidden min-h-screen flex flex-col">
        <ImmersiveBackground />
        <Header />
        <main className="relative z-20 flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/success" element={<Success />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
