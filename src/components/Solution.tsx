import React from 'react';
import { Clock, UserCheck, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-time documentation',
    description: 'Record achievements and milestones as they happen'
  },
  {
    icon: UserCheck,
    title: 'Peer verification',
    description: 'Get validation from colleagues who witnessed your work'
  },
  {
    icon: Shield,
    title: 'Tamper-proof records',
    description: 'Blockchain-secured entries cannot be altered'
  },
  {
    icon: Gauge,
    title: 'Skill tracking',
    description: 'Monitor your professional growth over time'
  }
];

const Solution = () => {
  return (
    <section className="py-24 bg-[#5D259F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Building Trust Through Time
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            InChronicle is a verified diary of your career, where entries can only be made in real-time 
            and are validated by supervisors and colleagues who witnessed your work. Each achievement, 
            project, and skill creates an authentic, tamper-proof record of your growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full transform translate-x-6 -translate-y-6"></div>
                
                <div className="bg-white/20 p-4 rounded-full w-fit mb-5">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;