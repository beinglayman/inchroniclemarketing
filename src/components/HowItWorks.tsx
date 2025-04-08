import React from 'react';
import { PenLine, UserCheck, Clock } from 'lucide-react';

const steps = [
  {
    icon: PenLine,
    title: 'Log your work as it happens',
    description: 'Document your achievements, projects, and milestones in real-time'
  },
  {
    icon: UserCheck,
    title: 'Get verification from colleagues',
    description: 'Colleagues and supervisors validate your contributions instantly'
  },
  {
    icon: Clock,
    title: 'Build your chronicle over time',
    description: 'Create a verified, tamper-proof record of your professional journey'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to building your verified professional chronicle
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 transform -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg">
                    <div className="bg-primary p-4 rounded-full">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;