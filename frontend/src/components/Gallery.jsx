import React from 'react';
import { galleryImages } from '../data/mock';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold inline-block mb-4">
            Our Clinic
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Modern Facilities & Comfortable Environment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art dental clinic
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-br from-pink-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">Latest dental technology for precise treatments</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hygienic Standards</h3>
              <p className="text-gray-600">Maintaining highest levels of cleanliness</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comfortable Space</h3>
              <p className="text-gray-600">Relaxing environment for stress-free visits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
