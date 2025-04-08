import React from 'react';
import { CheckCircle, Zap, Users } from 'lucide-react';

const Network = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Verified Work Samples",
      description: "Every connection includes validated project samples and contributions that demonstrate real expertise."
    },
    {
      icon: Zap,
      title: "Skill-Based Matching",
      description: "Our algorithm pairs professionals based on complementary abilities, creating opportunities for growth."
    },
    {
      icon: Users,
      title: "Collaboration Focus",
      description: "Built for meaningful professional relationships, not superficial connections or promotional content."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Professional Connections
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A Professional Network Based On Real Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with professionals sharing authentic work samples and detailed experience profiles.
            Discover talent based on real contributions, not just self-promotion.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary py-8 px-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Why Our Network Is Different
              </h3>
              <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="p-8 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-4 rounded-full mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                Join thousands of professionals who've discovered the power of authentic connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;