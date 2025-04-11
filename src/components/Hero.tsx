import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Code, Users, Award, FileCheck, Clock, Check, Lock } from 'lucide-react';

const Hero = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  
  // Work activities that will be "chronicled" in real-time
  const workActivities = [
    {
      title: "Optimized database query response time by 40%",
      description: "Used indexing strategy and query caching to improve database performance for our customer dashboard. Reduced average query time from 170ms to 102ms.",
      skills: ["SQL Optimization", "Database Indexing", "Performance Tuning"],
      code: `// Working on database optimization
function optimizeQuery(params) {
  const result = [];
  const query = buildOptimizedQuery(params);
  // Performance improvement logic
  for (let i = 0; i < data.length; i++) {
    if (data[i].matches(query)) {
      result.push(data[i]);
    }
  }
  return result;
}
// Testing response time
const startTime = performance.now();
const results = optimizeQuery(testParams);
const endTime = performance.now();
// Time: ${10 + animationStep * 5}ms (40% faster than previous)
`
    },
    {
      title: "Led cross-functional team meeting for new product launch",
      description: "Facilitated discussion between design, engineering, and marketing to align on launch timeline and feature priorities for Q2 product release.",
      skills: ["Team Leadership", "Product Strategy", "Cross-functional Coordination"],
      code: `// Product roadmap planning
class ProductLaunch {
  constructor(teams, timeline) {
    this.teams = teams;
    this.timeline = timeline;
    this.milestones = [];
    this.risks = [];
  }
  
  addMilestone(date, description, owner) {
    this.milestones.push({ date, description, owner });
  }
  
  identifyRisks() {
    // Risk assessment logic
    return this.teams.map(team => ({
      team: team.name,
      risks: this.assessRisks(team)
    }));
  }
}
// New launch plan created with 4 teams`
    },
    {
      title: "Resolved critical customer support ticket within SLA",
      description: "Identified root cause of payment processing error affecting enterprise customer. Implemented fix and verified solution with customer within 4 hours of ticket creation.",
      skills: ["Problem Solving", "Customer Support", "Debugging"],
      code: `// Debugging payment processing issue
async function troubleshootPayment(transactionId) {
  console.log("Investigating failed transaction:", transactionId);
  
  // Trace transaction flow
  const transaction = await getTransactionDetails(transactionId);
  const paymentLogs = await getPaymentLogs(transaction.paymentId);
  
  // Identify failure point
  const errorPoint = findErrorInLogs(paymentLogs);
  console.log("Error identified:", errorPoint);
  
  // Apply fix based on error type
  const fix = determineFixStrategy(errorPoint);
  const result = await applyFix(transaction.paymentId, fix);
  
  return { fixed: result.success, solution: fix.description };
}`
    },
    {
      title: "Completed wireframes for mobile app redesign",
      description: "Delivered final wireframes for mobile app redesign based on user testing feedback. Focused on improving navigation flow and accessibility.",
      skills: ["UI Design", "Wireframing", "User Experience"],
      code: `/* Mobile app redesign
 * Component: Navigation Menu
 */
class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      activeItem: 'dashboard',
      accessibilityEnabled: true
    };
  }
  
  render() {
    // New navigation structure with improved a11y
    return (
      <nav className="mobile-nav" aria-label="Main Navigation">
        <ul role="menubar">
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}`
    }
  ];
  
  // Validation responses
  const validations = [
    { name: "Sarah Chen", role: "Team Lead", message: "Confirmed ✓" },
    { name: "Miguel Rodriguez", role: "Product Manager", message: "Verified ✓" },
    { name: "Priya Sharma", role: "CTO", message: "Endorsed ✓" }
  ];

  // Handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cycle through work activities
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % workActivities.length);
    }, 4000);
    
    return () => clearInterval(timer);
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
      
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in leading-tight">
            <span className="inline-block animate-slide-up">Document Your Professional Journey</span>
            <span className="inline-block animate-slide-up delay-100">As It Happens</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto animate-fade-in opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            Turn your daily work into a verified professional story that speaks for itself
          </p>
          
          {/* Split Screen Visualization */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            {/* Left side - Work happening */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200">
                <div className="absolute top-3 left-3 flex items-center">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-1"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-center text-base font-semibold text-gray-700 mt-1">Professional at Work</h3>
              </div>
              
              <div className="p-4 h-[300px] sm:h-[350px] overflow-hidden">
                {/* Code editor mockup */}
                <div className="h-full bg-gray-900 rounded-md p-4 font-mono text-xs sm:text-sm text-green-400 overflow-auto">
                  <pre className="whitespace-pre-wrap">
                    {workActivities[animationStep].code}
                  </pre>
                  <div className={`mt-2 ${animationStep >= 2 ? "bg-green-900 text-white p-1 rounded inline-block" : "hidden"}`}>
                    Task completed successfully ✓
                  </div>
                </div>
              </div>
              
              <div className="px-4 pb-4 flex items-center justify-between">
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Active session</span>
                </div>
                <div className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</div>
              </div>
            </div>
            
            {/* Right side - InChronicle documentation */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">IN</div>
                    <span className="ml-2 font-bold text-gray-800 text-sm">CHRONICLE</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs">🔔</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 h-[300px] sm:h-[350px] overflow-auto">
                <div className="text-xs font-medium text-primary mb-2">Today's Chronicle</div>
                
                {/* Entry that appears to be written in real-time */}
                <div className="border-l-4 border-primary pl-3 pb-3 mb-3">
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-sm">{workActivities[animationStep].title}</div>
                    <div className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</div>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-600">
                    {workActivities[animationStep].description}
                  </div>
                  
                  <div className="mt-2 flex flex-wrap items-center">
                    <div className="text-xs font-medium text-primary mr-2">Skills:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Validation requests and responses */}
                  <div className={`mt-3 ${animationStep > 0 ? "" : "opacity-0"}`}>
                    <div className="text-xs font-medium text-primary mb-1">Validation Requests:</div>
                    <div className="flex flex-col gap-2">
                      {validations.slice(0, animationStep).map((validation, index) => (
                        <div key={index} className="flex justify-between items-center bg-green-50 px-2 py-1 rounded">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center text-xs mr-2">
                              {validation.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-xs font-medium">{validation.name}</div>
                              <div className="text-xs text-gray-500">{validation.role}</div>
                            </div>
                          </div>
                          <div className="text-xs text-green-700 font-medium">{validation.message}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Previous entries */}
                <div className="border-l-4 border-gray-300 pl-3 pb-3 mb-3 opacity-50">
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-sm">Created API documentation for partner integration</div>
                    <div className="text-xs text-gray-500">10:15 AM</div>
                  </div>
                  <div className="mt-1 text-xs text-gray-600">
                    Documented authentication flow and endpoints for our partner API using OpenAPI spec.
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 pl-3 pb-3 opacity-50">
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-sm">Weekly team status report</div>
                    <div className="text-xs text-gray-500">9:30 AM</div>
                  </div>
                  <div className="mt-1 text-xs text-gray-600">
                    Compiled and delivered progress updates for engineering team.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            <button className="px-6 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Start Your Chronicle
            </button>
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-md border-2 border-primary hover:bg-primary/5 transition-colors w-full sm:w-auto">
              Watch How It Works
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in opacity-0" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
            <div className="flex items-center bg-white px-3 py-2 rounded-full shadow">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Clock className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs font-medium">Real-time Documentation</span>
            </div>
            <div className="flex items-center bg-white px-3 py-2 rounded-full shadow">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs font-medium">Peer-Validated</span>
            </div>
            <div className="flex items-center bg-white px-3 py-2 rounded-full shadow">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Lock className="w-3 h-3 text-primary" />
              </div>
              <span className="text-xs font-medium">Tamper-Proof</span>
            </div>
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

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}

@keyframes pulse-glow {
  0% { box-shadow: 0 0 5px 0 rgba(93,37,159,0.3); }
  50% { box-shadow: 0 0 15px 5px rgba(93,37,159,0.4); }
  100% { box-shadow: 0 0 5px 0 rgba(93,37,159,0.3); }
}
`;

export default Hero;
