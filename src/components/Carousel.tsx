import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Trophy, BookOpen } from 'lucide-react';

const carouselItems = [
  {
    textBefore: "",
    buttonText: "InChronicle your incredible journey!",
    textAfter: "",
    icon: BookOpen,
    color: "text-yellow-300"
  },
  {
    textBefore: "Did something incredible? ",
    buttonText: "InChronicle your work!",
    textAfter: "",
    icon: Star,
    color: "text-blue-300"
  },
  {
    textBefore: "Achieved something great? ",
    buttonText: "InChronicle your achievements!",
    textAfter: "",
    icon: Trophy,
    color: "text-green-300"
  },
  {
    textBefore: "Had a hard day at work? ",
    buttonText: "InChronicle your struggles!",
    textAfter: "",
    icon: Award,
    color: "text-purple-300"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }, []);
  
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, goToNext]);

  // Glitter particles component - for the entire carousel item
  const GlitterParticles = () => {
    return (
      <>
        <div className="glitter-particle top-0 left-1/4"></div>
        <div className="glitter-particle top-0 right-1/4 animation-delay-300"></div>
        <div className="glitter-particle bottom-0 left-1/3 animation-delay-700"></div>
        <div className="glitter-particle bottom-0 right-1/3 animation-delay-500"></div>
        <div className="glitter-particle left-0 top-1/4 animation-delay-200"></div>
        <div className="glitter-particle right-0 top-1/4 animation-delay-600"></div>
        <div className="glitter-particle left-0 bottom-1/4 animation-delay-800"></div>
        <div className="glitter-particle right-0 bottom-1/4 animation-delay-400"></div>
      </>
    );
  };

  // InChronicle button component (no special effects now)
  const InChronicleButton = ({ text }) => {
    return (
      <button className="mx-1 px-3 py-1 bg-white text-primary rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center">
        {text}
      </button>
    );
  };

    };

  return (
    <div 
      className="bg-primary w-full py-12 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-5 left-10 w-32 h-32 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-5 right-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-yellow-400 blur-3xl"></div>
      </div>
      
      {/* CSS for glitter animation */}
      <style jsx>{`
        @keyframes glitter-move {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%) translateY(100%); opacity: 0; }
        }
        
        @keyframes border-shine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
        
        .glitter-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(186,104,200,0.4) 70%, transparent 100%);
          border-radius: 50%;
          filter: blur(1px);
          animation: glitter-move 4s linear infinite;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        .animated-border {
          position: relative;
        }
        
        .animated-border::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(45deg, #9333ea, #a855f7, #d8b4fe, #9333ea, #a855f7);
          background-size: 400% 400%;
          border-radius: 10px;
          z-index: -1;
          animation: border-shine 3s linear infinite;
          filter: blur(2px);
        }
      `}