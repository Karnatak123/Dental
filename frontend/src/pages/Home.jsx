import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Toaster } from '../components/ui/sonner';

export const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onBookingClick={handleBookingClick} />
      <Hero onBookingClick={handleBookingClick} />
      <Services onBookingClick={handleBookingClick} />
      <About />
      <Gallery />
      <Testimonials />
      <Contact onBookingClick={handleBookingClick} />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Home;
