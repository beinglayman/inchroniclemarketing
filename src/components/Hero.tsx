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
      domains: ["Backend Development", "Database Architecture"],
      achievements: "Improved system performance metrics by 40%, exceeding quarterly goal of 25%",
      impact: "Reduced page load time for 15,000+ daily users, decreasing bounce rate by 12%",
      collaborators: ["Backend Team", "DevOps"],
      stakeholders: ["Product Manager", "CTO", "Customer Success"],
      profession: "Software Developer",
      workContent: (
        <div className="h-full flex flex-col bg-white">
          <div className="flex items-center bg-gray-100 px-3 py-2 border-b border-gray-200">
            <div className="h-3 w-3 bg-red-500 rounded-full mr-1"></div>
            <div className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></div>
            <div className="h-3 w-3 bg-green-500 rounded-full mr-1"></div>
            <div className="ml-2 text-xs font-medium">Database Performance Dashboard</div>
          </div>
          <div className="flex-1 p-3 overflow-auto">
            <div className="text-xs font-medium mb-2">Query Performance Metrics</div>
            <div className="h-32 bg-gray-50 rounded border border-gray-200 p-2 mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs">Customer Dashboard Query:</span>
                <span className="text-xs font-medium text-green-600">-40% Response Time</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: `${60 + animationStep * 10}%`}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Before: 170ms</span>
                <span>After: 102ms</span>
              </div>
              <div className="mt-3 text-xs text-gray-700">
                <div className="flex justify-between mb-1">
                  <span>Query Cache Hit Rate:</span>
                  <span className="font-medium">{85 + animationStep}%</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Index Utilization:</span>
                  <span className="font-medium">{90 + animationStep * 2}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Server CPU Load:</span>
                  <span className="font-medium text-green-600">{30 - animationStep * 5}%</span>
                </div>
              </div>
            </div>
            <div className="text-xs font-medium mb-1">Optimization Summary</div>
            <div className="text-xs text-gray-600 mb-2">
              ✓ Added composite index for frequently queried columns<br/>
              ✓ Implemented query result caching with 10-minute TTL<br/>
              ✓ Refactored joins to reduce table scans<br/>
              {animationStep > 1 && "✓ Deployed to production environment"}
            </div>
            {animationStep > 2 && (
              <div className="text-xs bg-green-100 text-green-800 p-2 rounded border border-green-200">
                All performance tests passed. Changes deployed successfully.
              </div>
            )}
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
        <div className="h-full flex flex-col bg-white">
          <div className="flex items-center justify-between bg-gray-100 px-3 py-2 border-b border-gray-200">
            <div className="text-xs font-medium">Q2 Financial Analysis.pptx</div>
            <div className="text-xs text-gray-500">Slide 4 of 12</div>
          </div>
          <div className="flex-1 p-3 overflow-auto bg-blue-50">
            <div className="bg-white rounded shadow-sm p-2 mb-2">
              <div className="text-center text-sm font-bold text-blue-800 mb-2">Q2 Revenue Growth: +15%</div>
              <div className="h-28 flex items-end justify-between px-2">
                {['Q1', 'Q2', 'Q3 (Proj)', 'Q4 (Proj)'].map((quarter, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-12 bg-blue-500 rounded-t" style={{
                      height: i === 0 ? '60px' : 
                             i === 1 ? '90px' : 
                             i === 2 ? `${80 + animationStep * 5}px` : 
                             `${70 + animationStep * 7}px`
                    }}></div>
                    <div className="text-xs mt-1">{quarter}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <div className="bg-white rounded shadow-sm p-2 flex-1">
                <div className="text-xs font-medium text-blue-800 mb-1">Cost Reduction</div>
                <div className="text-lg font-bold text-green-600">-8.5%</div>
                <div className="text-xs text-gray-500">Year-over-Year</div>
              </div>
              <div className="bg-white rounded shadow-sm p-2 flex-1">
                <div className="text-xs font-medium text-blue-800 mb-1">Profit Margin</div>
                <div className="text-lg font-bold">{22 + animationStep}%</div>
                <div className="text-xs text-gray-500">+3% from Q1</div>
              </div>
            </div>
            <div className="bg-white rounded shadow-sm p-2">
              <div className="text-xs font-medium text-blue-800 mb-1">Key Insights</div>
              <ul className="text-xs text-gray-700 list-disc pl-4">
                <li>New product line contributed 18% of Q2 revenue</li>
                <li>International markets grew by 24%</li>
                {animationStep > 1 && <li>Digital initiative reduced operational costs by 12%</li>}
                {animationStep > 2 && <li>Updated Q3 forecast shows additional 5% growth potential</li>}
              </ul>
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
        <div className="h-full flex flex-col bg-white">
          <div className="flex items-center justify-between bg-gray-100 px-3 py-2 border-b border-gray-200">
            <div className="text-xs font-medium">A/B Test Results - Landing Page</div>
            <div className="flex items-center">
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Live Test Running</div>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-gray-50 p-2">
            <div className="flex gap-2 mb-3">
              <div className="flex-1 bg-white border border-gray-200 rounded p-2">
                <div className="text-xs text-gray-500 mb-1">Variant A (Control)</div>
                <div className="h-24 bg-gray-100 rounded relative mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded mb-1"></div>
                      <div className="w-16 h-2 bg-gray-300 rounded mb-1"></div>
                      <div className="w-12 h-2 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs mb-2">
                  <div className="flex justify-between mb-1">
                    <span>Visitors:</span>
                    <span className="font-medium">2,458</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Sign-ups:</span>
                    <span className="font-medium">344</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion:</span>
                    <span className="font-medium">14%</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white border border-green-200 rounded p-2 shadow-sm">
                <div className="text-xs text-green-600 font-medium mb-1">Variant B (Winner)</div>
                <div className="h-24 bg-green-50 rounded relative mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-200 rounded-full mb-1"></div>
                      <div className="w-20 h-2 bg-green-300 rounded mb-1"></div>
                      <div className="w-16 h-4 bg-green-400 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs mb-2">
                  <div className="flex justify-between mb-1">
                    <span>Visitors:</span>
                    <span className="font-medium">2,412</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Sign-ups:</span>
                    <span className="font-medium">{432 + animationStep * 10}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion:</span>
                    <span className="font-medium text-green-600">{18 + animationStep * 2}%</span>
                  </div>
                </div>
                {animationStep > 1 && (
                  <div className="text-xs bg-green-100 text-green-800 p-1 rounded text-center">
                    +{28 + animationStep}% improvement
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2">
              <div className="text-xs font-medium mb-1">Key Findings</div>
              <ul className="text-xs text-gray-700 list-disc pl-4">
                <li>Simplified form with fewer fields improved completion rate</li>
                <li>Social proof elements increased trust signals</li>
                {animationStep > 1 && <li>Clear call-to-action button increased click rate by 45%</li>}
                {animationStep > 2 && <li>Statistical significance achieved at 99% confidence</li>}
              </ul>
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
        <div className="h-full flex flex-col bg-white">
          <div className="flex items-center justify-between bg-gray-100 px-3 py-2 border-b border-gray-200">
            <div className="text-xs font-medium">Client Meeting Notes</div>
            <div className="text-xs text-gray-500">Global Enterprises Inc.</div>
          </div>
          <div className="flex-1 p-3 overflow-auto">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs mr-2">GE</div>
              <div>
                <div className="text-xs font-medium">Contract Renewal Discussion</div>
                <div className="text-xs text-gray-500">with Sarah Chen (CTO) and Financial Team</div>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-xs font-medium mb-1">Contract Progress</div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: `${25 + animationStep * 25}%`}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Initial Proposal</span>
                <span>Terms Negotiation</span>
                <span>Final</span>
              </div>
            </div>
            
            <div className="text-xs border border-gray-200 rounded p-2 mb-3">
              <div className="font-medium mb-1">Key Terms</div>
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Duration:</td>
                    <td className="py-1 font-medium">3 Years</td>
                    <td className="py-1 text-green-600">(+1 year)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Contract Value:</td>
                    <td className="py-1 font-medium">${1.45 + animationStep * 0.05}M</td>
                    <td className="py-1 text-green-600">(+12%)</td>
                  </tr>
                  <tr>
                    <td className="py-1">Service Level:</td>
                    <td className="py-1 font-medium">Premium</td>
                    <td className="py-1 text-blue-600">(Maintained)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-xs mb-3">
              <div className="font-medium mb-1">Discussion Notes</div>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Addressed concerns about implementation timeline</li>
                <li>Proposed quarterly business reviews for better alignment</li>
                {animationStep > 1 && <li>Offered additional training sessions for new team members</li>}
                {animationStep > 2 && <li>Secured verbal commitment pending final legal review</li>}
              </ul>
            </div>
            
            {animationStep > 2 && (
              <div className="bg-green-100 text-green-800 p-2 text-xs rounded border border-green-200">
                Contract draft sent to legal for final review. Client has indicated intent to sign by end of week.
              </div>
            )}
          </div>
        </div>
      )
    }
  ];-2 bg-gray-200 rounded-full mb-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: `${25 + animationStep * 25}%`}}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Initial Proposal</span>
                <span>Terms Negotiation</span>
                <span>Final</span>
              </div>
            </div>
            
            <div className="text-xs border border-gray-200 rounded p-2 mb-3">
              <div className="font-medium mb-1">Key Terms</div>
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Duration:</td>
                    <td className="py-1 font-medium">3 Years</td>
                    <td className="py-1 text-green-600">(+1 year)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-1">Contract Value:</td>
                    <td className="py-1 font-medium">${1.45 + animationStep * 0.05}M</td>
                    <td className="py-1 text-green-600">(+12%)</td>
                  </tr>
                  <tr>
                    <td className="py-1">Service Level:</td>
                    <td className="py-1 font-medium">Premium</td>
                    <td className="py-1 text-blue-600">(Maintained)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-xs mb-3">
              <div className="font-medium mb-1">Discussion Notes</div>
              <ul className="list-disc pl-4 text-gray-600">
                <li>Addressed concerns about implementation timeline</li>
                <li>Proposed quarterly business reviews for better alignment</li>
                {animationStep > 1 && <li>Offered additional training sessions for new team members</li>}
                {animationStep > 2 && <li>Secured verbal commitment pending final legal review</li>}
              </ul>
            </div>
            
            {animationStep > 2 && (
              <div className="bg-green-100 text-green-800 p-2 text-xs rounded border border-green-200">
                Contract draft sent to legal for final review. Client has indicated intent to sign by end of week.
              </div>
            )}
          </div>
        </div>
      )
    }
  ];
  
  // Simple validation responses
  const validations = [
    { name: "Sarah Chen", role: "Team Lead", message: "Verified" },
    { name: "Miguel R.", role: "Manager", message: "Confirmed" },
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
            {/* Left side - Professional work happening */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200">
                <h3 className="text-center text-base font-semibold text-gray-700">
                  {workActivities[animationStep].profession} at Work
                </h3>
              </div>
              
              <div className="h-[300px] sm:h-[350px] overflow-hidden">
                {workActivities[animationStep].workContent}
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
                <div className="text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 150" 
                    id="desktop-logo"
                    style={{ height: "32px", width: "auto", margin: "0 auto" }}
                    className="h-8"
                  >
                    <rect x="50" y="50" width="180" height="100" stroke="#5D259F" strokeWidth="3" fill="#5D259F" />
                    <text x="225" y="140" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" textAnchor="end">IN</text>
                    <text x="235" y="140" fontFamily="Arial, sans-serif" fontSize="120" fill="#333333">CHRONICLE</text>
                  </svg>
                </div>
              </div>
              
              <div className="p-4 h-[300px] sm:h-[350px] overflow-auto">
                <div className="text-xs font-medium text-primary mb-3">Today's Chronicle</div>
                
                {/* Enhanced chronicle entry with all requested elements */}
                <div className="border-l-4 border-primary pl-3 pb-3">
                  {/* Title and timestamp */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-medium text-sm">{workActivities[animationStep].title}</div>
                    <div className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</div>
                  </div>
                  
                  {/* Description */}
                  <div className="mt-2 text-xs text-gray-600 mb-3">
                    {workActivities[animationStep].description}
                  </div>
                  
                  {/* Work domains */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Domains:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].domains.map((domain, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{domain}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Professional achievement */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Achievement:</div>
                    <div className="text-xs text-gray-600">
                      {workActivities[animationStep].achievements}
                    </div>
                  </div>
                  
                  {/* Project impact */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Impact:</div>
                    <div className="text-xs text-gray-600">
                      {workActivities[animationStep].impact}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Skills:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Collaborators */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Collaborated with:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].collaborators.map((collaborator, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs">{collaborator}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stakeholders */}
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Key Stakeholders:</div>
                    <div className="flex flex-wrap gap-1">
                      {workActivities[animationStep].stakeholders.map((stakeholder, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{stakeholder}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Validation requests and responses */}
                  <div className={`mt-4 ${animationStep > 0 ? "" : "opacity-0"}`}>
                    <div className="text-xs font-medium text-primary mb-2">Validation Requests:</div>
                    <div className="flex flex-col gap-2">
                      {validations.slice(0, animationStep).map((validation, index) => (
                        <div key={index} className="flex justify-between items-center bg-green-50 px-3 py-2 rounded">
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
            <div className="flex items-center bg-white px-4 py-2 rounded-md shadow">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Clock className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm font-medium">Real-time Documentation</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-md shadow">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm font-medium">Peer-Validated</span>
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
