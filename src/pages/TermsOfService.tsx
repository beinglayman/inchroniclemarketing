import React from 'react';
import { FileText, Shield, Users, Scale, Globe } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
          <p className="text-lg text-white/90 text-center">Effective Date: April 5, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              Welcome to InChronicle. These Terms of Service ("Terms") govern your access to and use of the InChronicle platform and services. By using InChronicle, you agree to these Terms.
            </p>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">1. Account Registration</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">1.1 Account Creation</h3>
              <p className="text-gray-600 mb-4">
                You must create an account to use most features of InChronicle. You agree to provide accurate, current, and complete information and to update this information to keep it accurate, current, and complete.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">1.2 Account Security</h3>
              <p className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">2. Core Services</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">2.1 Professional Chronicle</h3>
              <p className="text-gray-600 mb-4">
                InChronicle allows you to document your professional experiences, skills, and achievements in real-time and have them verified by colleagues and supervisors.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">2.2 Verification Process</h3>
              <p className="text-gray-600 mb-4">
                You may request verification from other users who can attest to your professional activities. Verifications are timestamped and cannot be backdated.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">2.3 Profile Generation</h3>
              <p className="text-gray-600">
                You can create professional profiles and portfolios based on your verified experiences for sharing with potential employers or your network.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">3.1 Accurate Information</h3>
              <p className="text-gray-600 mb-4">
                You agree to provide truthful and accurate information about your professional experiences, skills, and achievements.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">3.2 Verification Requests</h3>
              <p className="text-gray-600 mb-4">
                You agree to only request verification from individuals who genuinely witnessed or can attest to your professional activities.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">3.3 Verification Responses</h3>
              <p className="text-gray-600">
                When verifying others' professional activities, you agree to provide honest assessments based on your firsthand knowledge.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">4. Legal Matters</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">4.1 Intellectual Property</h3>
              <p className="text-gray-600 mb-4">
                The InChronicle platform, including its design, features, and content created by us, is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">4.2 Your Content</h3>
              <p className="text-gray-600 mb-4">
                You retain rights to the content you create on InChronicle, but grant us a license to use it for operating and improving our services.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">4.3 Termination</h3>
              <p className="text-gray-600">
                We may suspend or terminate your account for violations of these Terms, illegal activities, or if required by law.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">5. Additional Terms</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">5.1 Service Provided "As Is"</h3>
              <p className="text-gray-600 mb-4">
                InChronicle is provided on an "as is" and "as available" basis without warranties of any kind.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">5.2 Limitation of Liability</h3>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">5.3 Governing Law</h3>
              <p className="text-gray-600">
                These Terms are governed by the laws of Indian Jurisdiction, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have questions about these Terms, please contact us at{' '}
                <a href="mailto:hello@inchronicle.com" className="text-primary hover:underline">
                  hello@inchronicle.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;