import React from 'react';
import { Shield, Lock, Globe, FileCheck, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90 text-center">Effective Date: April 5, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              At InChronicle, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Name, email address, and contact details</li>
                <li>Professional information you choose to share</li>
                <li>Employment history and educational background</li>
                <li>Skills, certifications, and achievements</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Verification Information</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Identity of verifiers</li>
                <li>Verification timestamps and signatures</li>
                <li>Comments and endorsements from verifiers</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Log data and device information</li>
                <li>How you interact with our platform</li>
                <li>Features and pages you access</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Creating and maintaining your professional chronicle</li>
                <li>Facilitating verification processes</li>
                <li>Generating professional profiles and portfolios</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Service Improvement</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Analyzing usage patterns to enhance our platform</li>
                <li>Developing new features and capabilities</li>
                <li>Troubleshooting issues and optimizing performance</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Sending verification requests and notifications</li>
                <li>Providing updates about our services</li>
                <li>Responding to your inquiries and requests</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">With Your Consent</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Sharing with potential employers when you choose</li>
                <li>Displaying information to verifiers you select</li>
                <li>Publishing profiles according to your privacy settings</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Cloud hosting and storage providers</li>
                <li>Analytics and performance monitoring services</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Complying with applicable laws and regulations</li>
                <li>Responding to valid legal requests</li>
                <li>Protecting our rights and preventing misuse</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Access and download your information</li>
                <li>Update or correct inaccurate data</li>
                <li>Control privacy settings and sharing preferences</li>
                <li>Request deletion of your account and data</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your information, including encryption, access controls, and regular security assessments.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">International Data Transfers</h3>
              <p className="text-gray-600 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence, where data protection laws may differ.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Children's Privacy</h3>
              <p className="text-gray-600 mb-4">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Changes to This Policy</h3>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or via email.
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at{' '}
                <a href="mailto:privacy@inchronicle.com" className="text-primary hover:underline">
                  privacy@inchronicle.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;