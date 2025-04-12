import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Code, Users, Award, FileCheck, Clock, Check, Lock } from 'lucide-react';

const Hero = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  
  // Simple validation responses
  const validations = [
    { name: "Sarah Chen", role: "Team Lead", message: "Verified" },
    { name: "Miguel R.", role: "Manager", message: "Confirmed" },
  ];

  // Work activities that will be "chronicled" in real-time
  const workActivities = [
    {
      title: "Optimized database query response time by 40%",
      description: "Used indexing strategy and query caching to improve database performance for our customer dashboard. Reduced average query time from 170ms to 102ms.",
      skills: ["SQL Optimization", "Database Indexing", "Performance Tuning"],
      domains: ["Backend Development", "Database Architecture"],
      achievements: "Improved system performance metrics by 40%, exceeding quarterly goal of 25%",
      impact: "Reduced page load time for 15,000+ daily users, decreasing bounce rate by 12%",
      collaborators: ["Backend Team", "DevOps"],
      stakeholders: ["Product Manager", "CTO", "Customer Success"],
      profession: "Software Developer",
      workContent: (
        <div className="h-full flex flex-col items-center justify-center bg-white p-8">
          <div className="w-full max-w-[240px] mx-auto">
            {/* Artistic code/database illustration */}
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Database cylinder */}
              <ellipse cx="120" cy="40" rx="50" ry="15" fill="#E6E6FF" stroke="#5D259F" strokeWidth="2" />
              <path d="M70 40 L70 130 C70 138.3 92.4 145 120 145 C147.6 145 170 138.3 170 130 L170 40" fill="none" stroke="#5D259F" strokeWidth="2" />
              <ellipse cx="120" cy="130" rx="50" ry="15" fill="#E6E6FF" stroke="#5D259F" strokeWidth="2" />
              
              {/* Query lines */}
              <path d="M70 65 L170 65" stroke="#5D259F" strokeWidth="2" strokeDasharray="5,3" />
              <path d="M70 95 L170 95" stroke="#5D259F" strokeWidth="2" strokeDasharray="5,3" />
              
              {/* Speed indicator */}
              <circle cx="200" cy="85" r="25" fill={animationStep > 1 ? "#9BF2B8" : "#F2C09B"} stroke="#5D259F" strokeWidth="2" />
              <text x="200" y="90" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#5D259F">40%</text>
              
              {/* Performance arrow */}
              <path d="M160 85 L180 85" stroke="#5D259F" strokeWidth="2" />
              <path d="M180 85 L175 80 L180 85 L175 90" fill="none" stroke="#5D259F" strokeWidth="2" />
            </svg>
            
            <div className="mt-6 text-center">
              <div className="text-sm font-medium text-primary">Performance Optimization</div>
              <div className="text-xs text-gray-600 mt-2">Response time improved from 170ms to 102ms</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Presented quarterly financial analysis to executive team",
      description: "Delivered comprehensive financial review highlighting 15% revenue growth, cost-saving initiatives, and updated projections for upcoming quarters.",
      skills: ["Financial Analysis", "Executive Communication", "Data Visualization"],
      domains: ["Corporate Finance", "Strategic Planning"],
      achievements: "Received executive approval for all proposed financial strategies and Q3 budget allocation",
      impact: "Identified $2.4M in cost-saving opportunities while supporting 15% projected growth",
      collaborators: ["Finance Team", "Business Intelligence"],
      stakeholders: ["CEO", "Executive Board", "Department Heads"],
      profession: "Financial Analyst",
      workContent: (
        <div className="h-full flex flex-col items-center justify-center bg-white p-8">
          <div className="w-full max-w-[240px] mx-auto">
            {/* Artistic chart illustration */}
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Background grid */}
              <rect x="40" y="30" width="160" height="100" fill="#F0F7FF" stroke="#AECDFF" strokeWidth="1" />
              <path d="M40 50 L200 50" stroke="#AECDFF" strokeWidth="1" />
              <path d="M40 70 L200 70" stroke="#AECDFF" strokeWidth="1" />
              <path d="M40 90 L200 90" stroke="#AECDFF" strokeWidth="1" />
              <path d="M40 110 L200 110" stroke="#AECDFF" strokeWidth="1" />
              
              {/* Axes */}
              <path d="M40 30 L40 130 L200 130" stroke="#5D259F" strokeWidth="2" />
              
              {/* Bar chart */}
              <rect x="60" y="90" width="20" rx="2" ry="2" height="40" fill="#5D259F" opacity="0.3" />
              <rect x="100" y="70" width="20" rx="2" ry="2" height="60" fill="#5D259F" opacity="0.6" />
              <rect x="140" y={90 - animationStep * 10} width="20" rx="2" ry="2" height={40 + animationStep * 10} fill="#5D259F" opacity="0.8" />
              <rect x="180" y={100 - animationStep * 15} width="20" rx="2" ry="2" height={30 + animationStep * 15} fill="#5D259F" opacity="1" />
              
              {/* Growth indicator */}
              <circle cx="180" cy="40" r="20" fill="#9BF2B8" stroke="#5D259F" strokeWidth="2" />
              <text x="180" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5D259F">+15%</text>
              
              {/* Trend line */}
              <path d="M70 85 L110 70 L150 60 L190 50" fill="none" stroke="#5D259F" strokeWidth="2" strokeDasharray="3,2" />
            </svg>
            
            <div className="mt-6 text-center">
              <div className="text-sm font-medium text-primary">Financial Analysis</div>
              <div className="text-xs text-gray-600 mt-2">Q2 Revenue Growth: 15% | Cost Reduction: 8.5%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Designed and executed A/B test for landing page redesign",
      description: "Created two variant designs and implemented testing strategy that led to 28% improvement in conversion rate for our product signup process.",
      skills: ["A/B Testing", "UX Design", "Conversion Optimization"],
      domains: ["Digital Marketing", "User Experience"],
      achievements: "Delivered 28% conversion improvement, setting new department benchmark",
      impact: "Increased qualified leads by 45%, translating to estimated $380K annual revenue",
      collaborators: ["Design Team", "Web Development", "Analytics"],
      stakeholders: ["CMO", "Growth Team", "Sales Leadership"],
      profession: "Marketing Specialist",
      workContent: (
        <div className="h-full flex flex-col items-center justify-center bg-white p-8">
          <div className="w-full max-w-[240px] mx-auto">
            {/* Artistic A/B test illustration */}
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Split design */}
              <rect x="30" y="30" width="80" height="110" rx="4" ry="4" fill="#F5F5F5" stroke="#AAAAAA" strokeWidth="2" />
              <rect x="130" y="30" width="80" height="110" rx="4" ry="4" fill="#E6F7EF" stroke="#5D259F" strokeWidth="2" />
              
              {/* Design A elements */}
              <rect x="40" y="45" width="60" height="10" rx="2" ry="2" fill="#DDDDDD" />
              <rect x="40" y="65" width="60" height="10" rx="2" ry="2" fill="#DDDDDD" />
              <rect x="40" y="85" width="30" height="10" rx="2" ry="2" fill="#DDDDDD" />
              <rect x="40" y="105" width="60" height="20" rx="2" ry="2" fill="#BBBBBB" />
              
              {/* Design B elements */}
              <circle cx="170" cy="60" r="15" fill="#9BF2B8" />
              <rect x="140" y="85" width="60" height="10" rx="2" ry="2" fill="#AECDFF" />
              <rect x="140" y="105" width="60" height="20" rx="10" ry="10" fill="#5D259F" />
              
              {/* Conversion indicators */}
              <text x="70" y="155" textAnchor="middle" fontSize="12" fill="#666666">14%</text>
              <text x="170" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5D259F">{18 + animationStep * 2}%</text>
              
              {/* Improvement indicator */}
              <circle cx="200" cy="50" r="20" fill="#9BF2B8" stroke="#5D259F" strokeWidth="2" opacity={animationStep > 1 ? "1" : "0"} />
              <text x="200" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5D259F" opacity={animationStep > 1 ? "1" : "0"}>+28%</text>
            </svg>
            
            <div className="mt-6 text-center">
              <div className="text-sm font-medium text-primary">A/B Testing</div>
              <div className="text-xs text-gray-600 mt-2">Variant B increased conversion by 28%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Led successful negotiation of major client contract renewal",
      description: "Secured 3-year contract extension with 12% increased value while maintaining service level commitments and building stronger client relationship.",
      skills: ["Negotiation", "Client Management", "Contract Strategy"],
      domains: ["Sales", "Account Management"],
      achievements: "Closed largest renewal of the quarter at 12% higher value than original contract",
      impact: "Secured $1.7M in guaranteed revenue with potential for 25% expansion in year 2",
      collaborators: ["Legal Team", "Implementation Specialists", "Finance"],
      stakeholders: ["Client CTO", "Client Procurement", "VP of Sales"],
      profession: "Account Executive",
      workContent: (
        <div className="h-full flex flex-col items-center justify-center bg-white p-8">
          <div className="w-full max-w-[240px] mx-auto">
            {/* Artistic contract negotiation illustration */}
            <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Contract document */}
              <rect x="70" y="30" width="100" height="120" fill="#FFFFFF" stroke="#5D259F" strokeWidth="2" />
              <path d="M80 50 L160 50" stroke="#AAAAAA" strokeWidth="1" />
              <path d="M80 70 L160 70" stroke="#AAAAAA" strokeWidth="1" />
              <path d="M80 90 L160 90" stroke="#AAAAAA" strokeWidth="1" />
              
              {/* Signature area */}
              <path d="M90 115 C100 105, 110 125, 120 115" stroke="#5D259F" strokeWidth="2" fill="none" opacity={animationStep > 2 ? "1" : "0"} />
              
              {/* Handshake */}
              <circle cx="40" cy="90" r="20" fill="#E6E6FF" />
              <path d="M30 90 L50 90" stroke="#5D259F" strokeWidth="2" />
              <path d="M30 90 L25 85 M30 90 L25 95" stroke="#5D259F" strokeWidth="2" />
              
              <circle cx="200" cy="90" r="20" fill="#E6E6FF" />
              <path d="M190 90 L210 90" stroke="#5D259F" strokeWidth="2" />
              <path d="M210 90 L215 85 M210 90 L215 95" stroke="#5D259F" strokeWidth="2" />
              
              {/* Value increase indicator */}
              <circle cx="190" cy="40" r="20" fill="#9BF2B8" stroke="#5D259F" strokeWidth="2" />
              <text x="190" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5D259F">+12%</text>
              
              {/* Progress indicator */}
              <rect x="70" y="140" width="100" height="8" rx="4" ry="4" fill="#E6E6FF" />
              <rect x="70" y="140" width={25 + (animationStep * 25)} height="8" rx="4" ry="4" fill="#5D259F" />
            </svg>
            
            <div className="mt-6 text-center">
              <div className="text-sm font-medium text-primary">Contract Negotiation</div>
              <div className="text-xs text-gray-600 mt-2">3-year extension with 12% increased value</div>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  // Simplify animation - less frequent changes
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % workActivities.length);
    }, 6000); // Increased from 4000ms to 6000ms
    
    return () => clearInterval(timer);
  }, []);

  // Handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation for hero when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-animate');
            
            // Animate split screen elements
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-in');
              }, 200 + (index * 150));
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative pt-16 md:pt-24 flex flex-col justify-start bg-gradient-to-b from-primary/5 to-white overflow-hidden px-4 sm:px-6"
    >
      {/* Background embellishments */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto w-full py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 animate-fade-in leading-tight">
            <span className="inline-block animate-slide-up">Document Your Professional Journey</span>
            <span className="inline-block animate-slide-up delay-100">As It Happens</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto animate-fade-in opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            Turn your daily work into a verified professional story
          </p>
          
          {/* Split Screen Visualization */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 opacity-0 animate-fade-in" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            {/* Left side - Artistic representation of professional work */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200">
                <h3 className="text-center text-base font-semibold text-gray-700">
                  {workActivities[animationStep].profession} at Work
                </h3>
              </div>
              
              <div className="h-[300px] sm:h-[350px] overflow-hidden">
                {workActivities[animationStep].workContent}
              </div>
            </div>
            
            {/* Right side - InChronicle documentation */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200 text-left">
                <div className="flex items-center justify-between">
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
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mr-1">
                        <Clock className="w-2 h-2 text-primary" />
                      </div>
                      <span className="text-xs font-medium">Real-time</span>
                    </div>
                    <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mr-1">
                        <Check className="w-2 h-2 text-primary" />
                      </div>
                      <span className="text-xs font-medium">Validated</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 h-[300px] sm:h-[350px] overflow-auto">
                {/* Enhanced chronicle entry with all requested elements */}
                <div className="border-l-4 border-primary pl-3 pb-3">
                  {/* Title and date */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium text-sm">{workActivities[animationStep].title}</div>
                    <div className="text-xs text-gray-500">
                      {animationStep === 0 ? "April 10, 2025" : 
                       animationStep === 1 ? "April 8, 2025" : 
                       animationStep === 2 ? "April 6, 2025" : 
                       "April 3, 2025"}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mt-2 text-xs text-gray-600 mb-3 text-left">
                    {workActivities[animationStep].description}
                  </div>
                  
                  {/* Professional achievement */}
                  <div className="mb-3 text-left">
                    <div className="text-xs font-medium text-gray-700 mb-1">Achievement:</div>
                    <div className="text-xs text-gray-600">
                      {workActivities[animationStep].achievements}
                    </div>
                  </div>
                  
                  {/* Collaborators */}
                  <div className="mb-3 text-left">
                    <div className="text-xs font-medium text-gray-700 mb-1">Collaborated with:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].collaborators.map((collaborator, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs">{collaborator}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stakeholders and Validators (combined) */}
                  <div className="mb-3 text-left">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-700 mb-1">Key Stakeholders:</div>
                        <div className="flex flex-wrap gap-1">
                          {workActivities[animationStep].stakeholders.map((stakeholder, idx) => (
                            <span key={idx} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{stakeholder}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex-1 ml-2">
                        <div className="text-xs font-medium text-gray-700 mb-1">Validated by:</div>
                        <div className="flex flex-wrap gap-1">
                          {animationStep > 0 ? (
                            <>
                              <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">{validations[0].name}</span>
                              {animationStep > 1 && (
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">{validations[1].name}</span>
                              )}
                              {animationStep > 1 && (
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">+3 more</span>
                              )}
                            </>
                          ) : (
                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-400 text-xs">Pending validation</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills - moved to near the bottom */}
                  <div className="mb-3 text-left">
                    <div className="text-xs font-medium text-gray-700 mb-1">Skills:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project impact - moved to the very bottom */}
                  <div className="text-left">
                    <div className="text-xs font-medium text-gray-700 mb-1">Impact:</div>
                    <div className="text-xs text-gray-600">
                      {workActivities[animationStep].impact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg">
              Start Your Chronicle
            </button>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-md border-2 border-primary hover:bg-primary/5 transition-colors w-full sm:w-auto text-lg">
              Watch Demo
            </button>
          </div>
          
          {/* Trust indicators - simplified */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 animate-fade-in opacity-0" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
            {/* Removed trust indicators - now appearing in the header */}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS animations to add to your global styles
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

.hero-animate .animate-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.hero-animate .animate-element.animate-in {
  opacity: 1;
  transform: translateY(0);
}
`;

export default Hero;
