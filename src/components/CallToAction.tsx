import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Professional Chronicle Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Document, verify, and showcase your authentic career journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors">
              For Professionals
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors">
              For Employers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;