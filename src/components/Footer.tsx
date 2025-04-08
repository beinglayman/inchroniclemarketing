import React from 'react';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
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
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1200 150" 
              className="h-8 mb-6"
            >
              <rect x="50" y="50" width="180" height="100" stroke="#5D259F" strokeWidth="3" fill="#5D259F" />
              <text x="225" y="140" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" textAnchor="end">IN</text>
              <text x="235" y="140" fontFamily="Arial, sans-serif" fontSize="120" fill="white">CHRONICLE</text>
            </svg>
            <p className="text-gray-400">
              Building trust through time-stamped, verified professional achievements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('employers')} className="text-gray-400 hover:text-white transition-colors">Enterprise</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary-light transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 InChronicle. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => navigate('/privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/terms')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;