import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Trophy, BookOpen } from 'lucide-react';

const carouselItems = [
  {
    textBefore: "",
    buttonText: "InChronicle",
    textAfter: " your incredible journey.",
    icon: BookOpen,
    color: "text-yellow-300"
  },
  {
    textBefore: "Did something incredible? ",
    buttonText: "InChronicle",
    textAfter: " it.",
    icon: Star,
    color: "text-blue-300"
  },
  {
    textBefore: "Achieved something great? ",
    buttonText: "InChronicle",
    textAfter: " it.",
    icon: Trophy,
    color: "text-green-300"
  },
  {
    textBefore: "Had a hard day at work? ",
    buttonText: "InChronicle",
    textAfter: " your struggles.",
    icon: Award,
    color: "text-purple-300"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-20 overflow-hidden flex items-center justify-center">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : index === (currentIndex - 1 + carouselItems.length) % carouselItems.length
                  ? 'opacity-0 -translate-y-8'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center space-x-3">
                  {/* Icon with subtle float animation */}
                  <div className="animate-pulse">
                    <item.icon className={`${item.color} w-8 h-8 md:w-10 md:h-10`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white text-center flex items-center flex-wrap justify-center">
                    <span>{item.textBefore}</span>
                    <button className="mx-1 px-3 py-1 bg-white text-primary rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center">
                      {item.buttonText}
                    </button>
                    <span> &npsp; {item.textAfter}</span>
                  </h2>
                </div>
                {/* Underline animation */}
                <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-white to-transparent w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows - only visible on hover or larger screens */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden sm:block">
          <button 
            onClick={goToPrevious}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden sm:block">
          <button 
            onClick={goToNext}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
