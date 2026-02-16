import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../data/mock';

export const Header = ({ onBookingClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-pink-500">my</span>
              <span className="text-teal-500">Dentist</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Right side - Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center text-gray-700 hover:text-pink-500 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">{businessInfo.phone}</span>
            </a>
            <Button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">{businessInfo.phone}</span>
              </a>
              <Button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 text-white"
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
