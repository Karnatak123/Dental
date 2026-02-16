import React from 'react';
import { Sparkles, Stethoscope, Smile, Activity, Crown, Zap, Scissors, Shield, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { services } from '../data/mock';

const iconMap = {
  Sparkles,
  Stethoscope,
  Smile,
  Activity,
  Crown,
  Zap,
  Scissors,
  Shield,
  Calendar
};

export const Services = ({ onBookingClick }) => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From preventive care to advanced treatments, we offer a full range of dental services
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isHighlight = index === 0 || index === 8;
            
            return (
              <Card
                key={service.id}
                className={`group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-pink-200 ${
                  isHighlight ? 'bg-gradient-to-br from-pink-50 to-teal-50' : ''
                }`}
                onClick={onBookingClick}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-pink-100 to-pink-200' 
                      : 'bg-gradient-to-br from-teal-100 to-teal-200'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${
                      index % 2 === 0 ? 'text-pink-600' : 'text-teal-600'
                    }`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="pt-2">
                    <span className="text-sm text-pink-500 font-semibold group-hover:underline">
                      Book Now →
                    </span>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button
            onClick={onBookingClick}
            className="text-pink-500 font-semibold hover:text-pink-600 transition-colors text-lg"
          >
            Contact us for specialized treatments →
          </button>
        </div>
      </div>
    </section>
  );
};
