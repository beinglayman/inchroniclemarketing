import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Contact InChronicle</h1>
          <p className="text-lg text-white/90 text-center">We'd Love to Hear from You</p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-5">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Email</h3>
                <a href="mailto:hello@inchronicle.com" className="text-primary hover:underline">
                  hello@inchronicle.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-5">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Phone</h3>
                <a href="tel:+918827556905" className="text-primary hover:underline">
                  +91 (882) 2755-690
                  +91 (704) 2543-613
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-5">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Office Location</h3>
                <p className="text-gray-600">
                  Contact - Honey Arora<br/>
                  Sparklogics, 1503, Abil Imperial Atria,<br />
                  Baner, Pune, Maharashtra, India
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="bg-primary/10 p-4 rounded-full mb-5">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-3">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday:<br />9:00 AM - 7:00 PM IST<br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* Bottom Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Reach out to us directly via email at hello@inchronicle.com
          </p>
          <a 
            href="mailto:hello@inchronicle.com" 
            className="inline-block bg-white text-primary font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Email Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
