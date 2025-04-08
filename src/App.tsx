import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import ForProfessionals from './components/ForProfessionals';
import ForEmployers from './components/ForEmployers';
import Network from './components/Network';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <Carousel />
      <section id="features">
        <ProblemStatement />
        <Solution />
      </section>
      <section id="professionals">
        <ForProfessionals />
      </section>
      <section id="employers">
        <ForEmployers />
      </section>
      <Network />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <Testimonials />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;