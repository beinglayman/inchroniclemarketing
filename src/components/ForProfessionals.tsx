import React from 'react';
import { BookOpen, Award, Brain, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Comprehensive work log',
    description: 'Never lose track of your projects and achievements'
  },
  {
    icon: Award,
    title: 'Verified achievements',
    description: 'Build credibility with peer-validated accomplishments'
  },
  {
    icon: Brain,
    title: 'Skills documentation',
    description: 'Track and showcase your growing expertise'
  },
  {
    icon: Briefcase,
    title: 'Project portfolio',
    description: 'Create a detailed, verified project history'
  }
];

const ForProfessionals = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Authentic Career Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never lose track of your professional journey again. Whether it was the XMPP libraries you used in 2010, 
            the Elastic search optimization project you led 6 years back, or the wireframe you created last week - 
            every accomplishment is preserved and verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;