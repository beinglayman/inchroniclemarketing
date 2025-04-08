import React from 'react';
import { CheckCircle, BarChart, History, Users } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Verified credentials',
    description: 'Access candidates with validated work histories'
  },
  {
    icon: BarChart,
    title: 'Authentic skill assessment',
    description: 'See real, proven expertise in action'
  },
  {
    icon: History,
    title: 'Reliable work history',
    description: 'Review documented, time-stamped achievements'
  },
  {
    icon: Users,
    title: 'Team collaboration insights',
    description: 'Understand how candidates work with others'
  }
];

const ForEmployers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">References Built Into Every Milestone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access candidates with verified work histories. Every project, skill, and achievement in an InChronicle 
            profile has been validated by real colleagues in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-primary p-6 rounded-lg shadow-md text-white"
              >
                <div className="bg-white/10 p-3 rounded-full w-fit mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;