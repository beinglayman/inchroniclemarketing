import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = 64;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 64;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={navigateHome}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 150" 
              id="desktop-logo"
              style={{ height: "32px", width: "auto" }}
              className="h-8"
            >
              <rect x="50" y="50" width="180" height="100" stroke="#5D259F" strokeWidth="3" fill="#5D259F" />
              <text x="225" y="140" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" textAnchor="end">IN</text>
              <text x="235" y="140" fontFamily="Arial, sans-serif" fontSize="120" fill="#333333">CHRONICLE</text>
            </svg>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-primary">How It Works</button>
            <button onClick={() => scrollToSection('employers')} className="text-gray-600 hover:text-primary">For Employers</button>
            <button onClick={() => scrollToSection('professionals')} className="text-gray-600 hover:text-primary">For Professionals</button>
            <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-primary">About</button>
            <button className="bg-primary text-white px-4 py-0.5 rounded-md hover:bg-primary-light transition-colors">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">How It Works</button>
              <button onClick={() => scrollToSection('employers')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">For Employers</button>
              <button onClick={() => scrollToSection('professionals')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">For Professionals</button>
              <button onClick={() => navigate('/about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">About</button>
              <button className="w-full text-center bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-light transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;