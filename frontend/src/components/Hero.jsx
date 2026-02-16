import React from 'react';
import { Calendar, Award, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = ({ onBookingClick }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-teal-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                ✨ Premium Dental Care in Zirakpur
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Perfect Smile
              <span className="block mt-2 bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience world-class dental care with our expert team. From routine check-ups to advanced cosmetic procedures, we're committed to your oral health.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onBookingClick}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
              >
                Our Services
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-pink-500 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Certified</p>
                <p className="text-xs text-gray-500">Professionals</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto text-teal-500 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Safe &</p>
                <p className="text-xs text-gray-500">Hygienic</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto text-pink-500 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Emergency</p>
                <p className="text-xs text-gray-500">Care</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto text-teal-500 mb-2" />
                <p className="text-sm font-semibold text-gray-700">Easy</p>
                <p className="text-xs text-gray-500">Booking</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_e06482ed-027d-4917-8fe0-1aef6c7e988f/artifacts/uei3jt1k_my-dentist-clinic-zirakpur-dentists-uh4k8tpv3w.jpg"
                alt="My Dentist Clinic"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Trusted by</p>
                    <p className="text-2xl font-bold text-gray-900">5000+ Patients</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-pink-300 border-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-teal-400 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-xl font-bold text-gray-900">4.9/5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
