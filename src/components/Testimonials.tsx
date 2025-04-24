import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "InChronicle has transformed how I document my career. Every achievement is now verified and meaningful.",
    author: "Sarah Chen",
    role: "Senior Software Engineer",
    image: "/img/photo1.jpeg"
  },
  {
    quote: "As a hiring manager, the verified achievements make it so much easier to evaluate candidates accurately.",
    author: "Michael Rodriguez",
    role: "Engineering Director",
    image: "/img/photo2.jpeg"
  },
  {
    quote: "Finally, a platform that values real work over self-promotion. This is the future of professional networking.",
    author: "Emily Thompson",
    role: "Product Manager",
    image: "/img/photo3.jpeg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who are building their verified career chronicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;