import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold inline-block mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real people who trust us with their dental care
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-pink-200 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${
                index % 2 === 0 ? 'bg-pink-100' : 'bg-teal-100'
              } rounded-bl-full opacity-50`}></div>
              
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <Quote className={`w-10 h-10 mb-4 ${
                  index % 2 === 0 ? 'text-pink-300' : 'text-teal-300'
                }`} />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall rating card */}
        <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-pink-500 to-teal-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300 mx-1" />
            ))}
          </div>
          <p className="text-5xl font-bold mb-2">4.9 out of 5</p>
          <p className="text-xl opacity-90 mb-6">Based on 500+ reviews</p>
          <p className="text-lg opacity-80">
            Join thousands of satisfied patients who have transformed their smiles with us
          </p>
        </div>
      </div>
    </section>
  );
};
