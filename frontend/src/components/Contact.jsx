import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { businessInfo, faqs } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';

export const Contact = ({ onBookingClick }) => {
  const handleWhatsAppClick = () => {
    window.open(businessInfo.whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and schedule your appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact info & Map */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {businessInfo.address}<br />
                      {businessInfo.addressLine2}<br />
                      {businessInfo.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
                    <div className="flex items-center space-x-3">
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="text-teal-600 font-semibold text-lg hover:underline"
                      >
                        {businessInfo.phone}
                      </a>
                      <Button
                        onClick={handleWhatsAppClick}
                        size="sm"
                        className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Call or chat for immediate assistance</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-pink-600 font-semibold hover:underline"
                    >
                      {businessInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Send us your queries</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-semibold">Mon - Fri:</span> {businessInfo.hours.weekdays}</p>
                      <p><span className="font-semibold">Saturday:</span> {businessInfo.hours.saturday}</p>
                      <p><span className="font-semibold">Sunday:</span> {businessInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1234567890!2d76.8201234567890!3d30.6401234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzI0LjQiTiA3NsKwNDknMTIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Dentist Location"
              ></iframe>
            </div>
          </div>

          {/* Right - FAQ */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-xl px-6 bg-white">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 p-6 bg-gradient-to-br from-pink-500 to-teal-400 rounded-2xl text-white text-center">
                <p className="text-lg mb-4">Still have questions?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={onBookingClick}
                    className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                  >
                    Book a Consultation
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
