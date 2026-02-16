import React from 'react';
import { Heart, Users, Trophy, Star } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Trophy, value: '10+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Heart, value: '100%', label: 'Care & Dedication' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_e06482ed-027d-4917-8fe0-1aef6c7e988f/artifacts/51hldder_my-dentist-chandigarh-1484314970-5878d95ae776f.jpg"
                alt="Dental Treatment Room"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold inline-block mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Where Expertise Meets
                <span className="block mt-2 bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
                  Compassionate Care
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At My Dentist, we believe that everyone deserves a healthy, beautiful smile. Located in the heart of Zirakpur, our state-of-the-art clinic combines advanced dental technology with a warm, welcoming environment.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced dental professionals is dedicated to providing personalized care tailored to your unique needs. From routine check-ups to complex procedures, we ensure every visit is comfortable and stress-free.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <IconComponent className={`w-8 h-8 mb-3 ${
                      index % 2 === 0 ? 'text-pink-500' : 'text-teal-500'
                    }`} />
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Why choose us */}
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-bold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Modern equipment & advanced techniques',
                  'Experienced & caring dental professionals',
                  'Comfortable & hygienic environment',
                  'Affordable pricing with flexible payment options'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-teal-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
