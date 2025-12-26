import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Blueprint from './components/Blueprint';
import CaseStudy from './components/CaseStudy';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import Apply from './components/Apply';
import Economics from './components/Economics';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-ink-primary selection:text-paper">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/blueprint" element={<Blueprint />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/economics" element={<Economics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
