import React from 'react';
import { FileX, FileCheck } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring Is Broken</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resumes are filled with exaggerations, skills are inflated, and experiences are crafted in hindsight. 
            The professional world needs a new foundation of trust.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 max-w-md">
            <div className="flex items-center mb-4">
              <FileX className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-xl font-semibold">Traditional Resume</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Written in hindsight</li>
              <li>• Unverified claims</li>
              <li>• Subjective descriptions</li>
              <li>• Easy to exaggerate</li>
            </ul>
          </div>

          <div className="bg-primary p-8 rounded-lg shadow-lg w-full md:w-1/2 max-w-md text-white">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-white mr-3" />
              <h3 className="text-xl font-semibold">InChronicle Timeline</h3>
            </div>
            <ul className="space-y-3">
              <li>• Real-time documentation</li>
              <li>• Peer-verified achievements</li>
              <li>• Objective evidence</li>
              <li>• Tamper-proof records</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;