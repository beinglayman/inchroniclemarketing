import React from 'react';
import { Users, Heart, Globe, TrendingUp, Lock, Award, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Truth in Professional Representation",
      description: "We believe in the power of honest professional narratives and work to create a system where authenticity is both possible and rewarded."
    },
    {
      icon: Heart,
      title: "Collaboration Over Competition",
      description: "We see professional development as a collaborative journey, where peers help validate and strengthen each other's credentials."
    },
    {
      icon: Globe,
      title: "Accessibility and Inclusivity",
      description: "We're committed to creating a platform that works for professionals across industries, career stages, and backgrounds."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in documenting the entire professional journey—including challenges and learning experiences—not just the highlights."
    },
    {
      icon: Lock,
      title: "Privacy and Control",
      description: "While verification is our cornerstone, we ensure that professionals maintain control over their data and how it's shared."
    }
  ];

  const teamMembers = [
    {
      name: "Honey Arora",
      role: "Founder",
      bio: "18+ years in Software development, Product management, and Management consulting roles. Ex EY, Ex Infoedge",
      image: "/src/img/honey.jpeg"
    },
    {
      name: "Ashish Gupta",
      role: "Co-Founder",
      bio: "14+ years in software development and product management roles. Ex FinancePeer, Ex ICICI",
      image: "/src/img/ashish.jpeg"
    },
    {
      name: "Pawan Kumar Yadav",
      role: "Head of Technology",
      bio: "14+ years in software development and product management roles. Ex Uber, Ex Microsoft",
      image: "/src/img/pawan.jpeg"
    },
    {
      name: "Anshuman Kumar",
      role: "Head of Data Science and AI",
      bio: "5+ Years in data science and AI Development. Ex Deloitte, Ex Meta",
      image: "/src/img/anshuman.jpeg"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 via-white to-primary/5">
      {/* Hero Section with Improved Visual Appeal */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">About InChronicle</h1>
          <p className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto">
            Rebuilding trust in professional credentials through real-time verification
          </p>
          <div className="flex justify-center mt-10">
            <div className="bg-white/20 backdrop-blur-sm py-2 px-6 rounded-full text-white text-sm font-medium tracking-wider">
              TRUTH • COLLABORATION • GROWTH
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Visual Enhancement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary/30"></div>
            <h2 className="text-primary font-medium mx-4">OUR PURPOSE</h2>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            InChronicle exists to rebuild trust in professional credentials by creating a platform where career achievements are documented in real-time and verified by those who witnessed them.
          </p>
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Authentic</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Verified</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Better Typography and Spacing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary/30"></div>
            <h2 className="text-primary font-medium mx-4">OUR JOURNEY</h2>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              InChronicle was born from a simple observation: the traditional resume system is fundamentally broken. Job seekers feel pressured to exaggerate their experiences, employers struggle to verify claims, and the entire hiring process becomes an exercise in uncertainty. We realized that the problem wasn't just about dishonesty—it was about a system that relied on retrospective documentation, making verification nearly impossible.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The solution was clear: what if professional experiences could be documented as they happened and immediately verified by colleagues who were there? What if your professional history was built day by day, with each achievement timestamped and validated in real-time?
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With InChronicle we plan to transform this vision into reality. We're building a new foundation of trust for professional credentials—one verified entry at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Card Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary/30"></div>
            <h2 className="text-primary font-medium mx-4">WHAT DRIVES US</h2>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section with Team Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary/30"></div>
            <h2 className="text-primary font-medium mx-4">MEET THE TEAM</h2>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-24 h-24 mb-4 md:mb-0 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-0 md:ml-6 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Rebuilding Trust</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of the movement to transform how professional credentials are verified and shared.
          </p>
          <button className="bg-white text-primary font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;