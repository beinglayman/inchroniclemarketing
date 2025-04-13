import React, { useState, useEffect, useRef } from 'react';
import { Calendar, CheckCircle, ChevronRight, Users, Award, FileText, X, Clock, Check } from 'lucide-react';

const Hero = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const heroRef = useRef(null);
  
  // Sample content for comparison
  const comparisonData = [
    {
      title: "E-commerce Platform Performance Optimization",
      date: "February 2025",
      status: "Completed",
      role: "Senior Developer",
      company: "TechCorp Inc, 2023-2025",
      skills: ["React.js", "TypeScript"],
      cvEntry: "Led the optimization of our company's e-commerce platform, working with cross-functional teams to improve overall site performance. Implemented various technical improvements and collaborated with team members to identify and resolve performance bottlenecks. The project was completed on schedule and received positive feedback from management.",
      impact: "Improved site loading speed by 65% and reduced bounce rate by 28%, resulting in 15% increase in conversion rate",
      relatedEntries: [
        "Performance audit and bottleneck identification",
        "React component optimization implementation",
        "Load testing and final optimization"
      ],
      collaborators: [
        { name: "Emily Chen", role: "Frontend Developer" },
        { name: "Alex Wong", role: "UX Designer" }
      ],
      reviewers: [
        { name: "Sarah Johnson", role: "Tech Lead" },
        { name: "Marcus Williams", role: "Engineering Manager" }
      ]
    },
    {
      title: "Q3 Brand Awareness Campaign",
      date: "November 2024",
      status: "Completed",
      role: "Marketing Manager",
      company: "GlobalBrands Ltd, 2022-Present",
      skills: ["Campaign Strategy", "Social Media", "Analytics"],
      cvEntry: "Developed and executed comprehensive brand awareness campaign across multiple channels, focusing on our target demographic of 25-45 year old professionals. Coordinated with external agencies for creative production and managed internal team for content distribution. Presented campaign results to executive team and incorporated learnings into future campaign strategies.",
      impact: "Achieved 3.2M impressions with 4.8% engagement rate, increased brand recall by 27%, and generated 4,500+ qualified leads at 22% below target CPA",
      relatedEntries: [
        "Market research and audience segmentation",
        "Channel strategy and budget allocation",
        "Performance analysis and optimization"
      ],
      collaborators: [
        { name: "Jason Kim", role: "Content Strategist" },
        { name: "Elena Rodriguez", role: "Media Buyer" }
      ],
      reviewers: [
        { name: "Victoria Lee", role: "CMO" },
        { name: "Robert Chen", role: "Brand Director" }
      ]
    },
    {
      title: "Customer Support System Integration",
      date: "October 2024",
      status: "Completed",
      role: "Customer Success Manager",
      company: "ServiceNow Solutions, 2021-Present",
      skills: ["API Integration", "Zendesk", "Salesforce"],
      cvEntry: "Spearheaded the integration of our customer support systems with existing CRM infrastructure to streamline service operations. Coordinated with multiple departments to ensure seamless transition with minimal disruption to ongoing customer support. Developed comprehensive documentation and conducted training sessions for support staff on the new integrated system.",
      impact: "Reduced ticket resolution time by 42% and improved CSAT scores from 7.6 to 9.2",
      relatedEntries: [
        "Requirements gathering and vendor selection",
        "Data migration and system configuration",
        "Team training and process documentation"
      ],
      collaborators: [
        { name: "James Wilson", role: "Solution Architect" },
        { name: "Sophia Lee", role: "Integration Specialist" }
      ],
      reviewers: [
        { name: "Michael Brown", role: "VP Customer Success" },
        { name: "Aisha Khan", role: "IT Director" }
      ]
    },
    {
      title: "Annual Financial Planning & Analysis Restructuring",
      date: "January 2025",
      status: "Completed",
      role: "Finance Director",
      company: "Innovex Enterprises, 2020-Present",
      skills: ["Financial Modeling", "Forecasting", "Budgeting"],
      cvEntry: "Led the restructuring of our company's financial planning and analysis processes to improve accuracy of forecasts and streamline budget development. Worked with department heads to align financial goals with strategic objectives and implemented new reporting methodologies. Enhanced transparency in financial communications across the organization.",
      impact: "Reduced budget variance by 65%, cut planning cycle time by 3 weeks, and identified $4.2M in cost optimization opportunities",
      relatedEntries: [
        "Process analysis and gap identification",
        "Forecasting model development",
        "Cross-departmental budget alignment"
      ],
      collaborators: [
        { name: "Thomas Chen", role: "FP&A Manager" },
        { name: "Lisa Washington", role: "Business Analyst" }
      ],
      reviewers: [
        { name: "Jordan Martinez", role: "CFO" },
        { name: "Priya Sharma", role: "COO" }
      ]
    },
    {
      title: "Clinical Trial Phase II Completion",
      date: "March 2025",
      status: "Completed",
      role: "Clinical Research Director",
      company: "BioAdvance Pharmaceuticals, 2018-Present",
      skills: ["Clinical Protocols", "Data Analysis", "Regulatory Compliance"],
      cvEntry: "Managed Phase II clinical trial for our leading therapeutic candidate, overseeing patient recruitment, study protocols, and data collection across 12 research sites. Collaborated with regulatory affairs to ensure compliance with all applicable standards and reporting requirements. Prepared comprehensive documentation for review by internal committees and external stakeholders.",
      impact: "Completed trial 45 days ahead of schedule with 96% patient retention rate and identified statistically significant efficacy markers for advancing to Phase III",
      relatedEntries: [
        "Protocol development and site preparation",
        "Data collection and interim analysis",
        "Final report preparation and submission"
      ],
      collaborators: [
        { name: "Dr. Samantha Wu", role: "Principal Investigator" },
        { name: "Mark Johnson", role: "Biostatistician" }
      ],
      reviewers: [
        { name: "Dr. Alan Friedman", role: "Chief Medical Officer" },
        { name: "Diana Torres", role: "VP Regulatory Affairs" }
      ]
    }
  ];

  // Animation for cycling through examples
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % comparisonData.length);
    }, 8000); // Slower cycling for better readability
    
    return () => clearInterval(timer);
  }, []);

  // Animation for hero when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-animate');
            
            // Animate elements
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
            <span className="inline-block animate-slide-up">Build trust through your professional journal</span><br/>
            <span className="inline-block animate-slide-up delay-100">Not Resume</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto animate-fade-in opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            Let InChronicle tell your professional story through professional timeline that speaks louder than words in your CV
          </p>
          
          {/* Comparison Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 opacity-0 animate-fade-in" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            {/* Left side - Traditional CV */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
              <div className="relative bg-gray-100 p-3 border-b border-gray-200 text-left">
                <h3 className="text-base font-semibold text-gray-700">
                  Traditional Resume Entry
                </h3>
              </div>
              
              <div className="p-5 text-left">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <h4 className="font-medium text-lg mb-1">{comparisonData[animationStep].role}</h4>
                  <div className="text-sm text-gray-600">{comparisonData[animationStep].company}</div>
                </div>
                
                <div className="text-sm text-gray-700 leading-relaxed mb-6">
                  {comparisonData[animationStep].cvEntry}
                </div>
                
                <div className="mt-6 bg-red-50 rounded p-3 border border-red-100">
                  <div className="text-xs text-red-500 font-medium mb-2">Problems With Traditional Resumes</div>
                  <div className="text-sm text-gray-700">
                    <div className="flex items-start mb-1.5">
                      <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Generic descriptions without specifics or metrics</span>
                    </div>
                    <div className="flex items-start mb-1.5">
                      <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unverifiable claims and accomplishments</span>
                    </div>
                    <div className="flex items-start mb-1.5">
                      <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>No breakdown of actual contributions</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Missing validation from collaborators</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - InChronicle Entry */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden animate-element">
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
              
              <div className="p-5 text-left">
                {/* Project header with trophy icon */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">{comparisonData[animationStep].title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{comparisonData[animationStep].date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {comparisonData[animationStep].status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {comparisonData[animationStep].skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{skill}</span>
                  ))}
                </div>
                
                {/* Impact */}
                <div className="mt-4 bg-gray-50 p-3 rounded-md">
                  <div className="text-sm font-medium text-gray-700 mb-1">Impact:</div>
                  <div className="text-sm text-gray-600">
                    {comparisonData[animationStep].impact}
                  </div>
                </div>
                
                {/* Related Journal Entries */}
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Related Journal Entries</div>
                  <div className="space-y-2">
                    {comparisonData[animationStep].relatedEntries.map((entry, idx) => (
                      <div key={idx} className="flex items-center text-sm border-b border-gray-100 pb-2">
                        <FileText className="w-4 h-4 text-gray-400 mr-2" />
                        <span>{entry}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Collaborators */}
                <div className="mt-4">
                  <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Collaborators</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {comparisonData[animationStep].collaborators.map((person, idx) => (
                      <div key={idx} className="flex items-center bg-blue-50 px-2 py-1 rounded-md">
                        <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-xs mr-1">
                          {person.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-medium">{person.name}</div>
                          <div className="text-xs text-gray-500">{person.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Reviewers */}
                <div className="mt-3">
                  <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Validated by</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {comparisonData[animationStep].reviewers.map((person, idx) => (
                      <div key={idx} className="flex items-center bg-green-50 px-2 py-1 rounded-md">
                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-xs mr-1">
                          {person.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-medium">{person.name}</div>
                          <div className="text-xs text-gray-500">{person.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {comparisonData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${animationStep === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => setAnimationStep(index)}
                aria-label={`Example ${index + 1}`}
              />
            ))}
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
