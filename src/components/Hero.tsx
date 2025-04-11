import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Info, Users, Award, FileCheck } from 'lucide-react';

const milestones = [
  {
    year: '2022',
    label: 'Project Lead',
    title: 'Project Lead Role',
    description: 'Led cross-functional team of 8 on a critical client project',
    verifier: 'Sarah Chen, CTO',
    verifierIcon: <Info className="w-4 h-4 text-primary" />,
    date: 'May 2022'
  },
  {
    year: '2023',
    label: 'AWS Certified',
    title: 'AWS Certification',
    description: 'Achieved AWS Solutions Architect Professional certification',
    verifier: 'AWS Certification Authority',
    verifierIcon: <FileCheck className="w-4 h-4 text-primary" />,
    date: 'January 2023'
  },
  {
    year: '2023',
    label: 'DB Migration',
    title: 'Database Migration',
    description: 'Successfully led migration of 6TB database with zero downtime',
    verifier: '3 team members',
    verifierIcon: <Users className="w-4 h-4 text-primary" />,
    date: 'August 2023'
  },
  {
    year: '2024',
    label: 'API Optimization',
    title: 'API Performance Enhancement',
    description: 'Optimized API response time by 40% through caching and query refinements',
    verifier: 'Engineering Manager',
    verifierIcon: <FileCheck className="w-4 h-4 text-primary" />,
    date: 'March 2024'
  },
  {
    year: '2025',
    label: 'Senior Dev',
    title: 'Senior Developer Promotion',
    description: 'Promoted to Senior Developer after exceeding performance metrics',
    verifier: 'HR & Department Head',
    verifierIcon: <Award className="w-4 h-4 text-primary" />,
    date: 'January 2025'
  }
];

const Hero = () => {
  const timelineRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation for timeline when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-animate');
            
            // Animate each node sequentially
            const nodes = entry.target.querySelectorAll('.milestone-node');
            nodes.forEach((node, index) => {
              setTimeout(() => {
                node.classList.add('animate-in');
              }, 200 + (index * 250));
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveNode(activeNode === index ? null : index);
      e.preventDefault();
    } else if (e.key === 'Escape' && activeNode !== null) {
      setActiveNode(null);
      e.preventDefault();
    } else if (e.key === 'ArrowRight' && index < milestones.length - 1) {
      document.getElementById(`milestone-${index + 1}`).focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      document.getElementById(`milestone-${index - 1}`).focus();
      e.preventDefault();
    }
  };

>

          {/* Timeline Section */}
          <div 
            ref={timelineRef}
            className={`mt-8 sm:mt-12 md:mt-16 relative opacity-0 transition-all duration-1000 timeline-container ${isMobile ? 'timeline-mobile' : ''}`}
            aria-label="Career timeline visualization"
          >
            {/* Timeline line */}
            <div 
              className={`absolute ${isMobile ? 'left-0 top-0 w-[3px] h-full' : 'top-1/2 left-0 w-full h-[3px] -translate-y-1/2'} bg-primary/30`} 
            />
            <div 
              className={`absolute ${isMobile ? 'left-0 top-0 w-[3px] h-0' : 'top-1/2 left-0 w-0 h-[3px] -translate-y-1/2'} bg-primary timeline-line transition-all duration-1500 ease-out`} 
              style={{transitionDelay: '300ms'}}
            />

            {/* Timeline nodes */}
            <div className={`relative ${isMobile ? 'flex flex-col justify-between h-[400px] pl-4' : 'flex justify-between items-center px-4'}`}>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  id={`milestone-${index}`}
                  className={`relative milestone-node opacity-0 transform ${isMobile ? 'mb-8' : ''} cursor-pointer`}
                  tabIndex="0"
                  role="button"
                  aria-expanded={activeNode === index}
                  aria-label={`${milestone.year}: ${milestone.title}`}
                  onClick={() => setActiveNode(activeNode === index ? null : index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={() => setActiveNode(index)}
                  onMouseEnter={() => setActiveNode(index)}
                  onMouseLeave={() => setActiveNode(null)}
                  onBlur={() => setTimeout(() => setActiveNode(null), 100)}
                >
                  {/* Milestone node */}
                  <div className={`w-5 h-5 bg-white border-2 border-primary rounded-full relative z-10 transition-all duration-300 ${activeNode === index ? 'scale-150 bg-primary' : 'hover:scale-125'}`}>
                    {/* Checkmark circle */}
                    <div className={`absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(93,37,159,0.3)] transition-all duration-300 ${activeNode === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Year label */}
                  <div className={`absolute ${isMobile ? '-left-7 top-0' : '-top-8 left-1/2 transform -translate-x-1/2'} text-sm font-semibold text-primary`}>
                    {milestone.year}
                  </div>

                  {/* Milestone label */}
                  <div className={`absolute ${isMobile ? 'left-8 top-0 text-left' : '-bottom-8 left-1/2 transform -translate-x-1/2'} text-sm text-gray-600 whitespace-nowrap`}>
                    {milestone.label}
                  </div>

                  {/* Detailed popup */}
                  <div 
                    className={`absolute ${isMobile ? 'left-8 -top-2 translate-y-0' : 'bottom-full mb-6 left-1/2 transform -translate-x-1/2'} transition-all duration-300 z-20 ${activeNode === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    style={{
                      transitionDelay: activeNode === index ? '50ms' : '0ms',
                      [isMobile ? 'marginLeft' : 'marginBottom']: isMobile ? '8px' : '6px'
                    }}
                  >
                    <div className="rounded-lg shadow-xl text-left min-w-[200px] max-w-[250px] sm:min-w-[250px] sm:max-w-[300px] transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                      {/* Top section - Primary color */}
                      <div className="bg-primary p-3 sm:p-4">
                        {/* Title */}
                        <h3 className="font-bold text-white text-sm sm:text-base mb-1">{milestone.title}</h3>
                        
                        {/* Description */}
                        <p className="text-white/90 text-xs sm:text-sm mb-2">{milestone.description}</p>
                      </div>
                      
                      {/* Verification section - White background */}
                      <div className="bg-white p-2 sm:p-3 flex items-center">
                        <div className="mr-2">
                          {React.cloneElement(milestone.verifierIcon, { className: "w-4 h-4 text-primary" })}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Verified by:</p>
                          <p className="text-xs sm:text-sm font-medium text-gray-700">{milestone.verifier}</p>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">{milestone.date}</div>
                      </div>
                      
                      {/* Triangle pointer - now white to match the bottom section */}
                      <div className={`absolute ${isMobile ? 'top-4 -left-2 translate-y-0 rotate-45' : 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45'} w-3 h-3 bg-white`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these CSS animations to your global CSS file
const globalStyles = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.timeline-animate .timeline-line {
  width: 100%;
  height: 100%;
}

.milestone-node.animate-in {
  animation: node-appear 0.5s ease-out forwards;
}

@keyframes node-appear {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes pulse-glow {
  0% { box-shadow: 0 0 5px 0 rgba(93,37,159,0.3); }
  50% { box-shadow: 0 0 15px 5px rgba(93,37,159,0.4); }
  100% { box-shadow: 0 0 5px 0 rgba(93,37,159,0.3); }
}

.timeline-node-active {
  animation: pulse-glow 2s infinite;
}

.timeline-mobile {
  margin-left: 20px;
}
`;

export default Hero;
