import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useToast } from '../hooks/use-toast';

export const BookingModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    console.log('Booking submitted:', formData);
    
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text text-transparent">
              Book Your Appointment
            </span>
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you shortly to confirm your appointment
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center">
              <User className="w-4 h-4 mr-2 text-pink-500" />
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="border-2 focus:border-pink-500"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-teal-500" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9988556934"
                required
                className="border-2 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-pink-500" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="border-2 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                Preferred Date *
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="border-2 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                Preferred Time *
              </Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="border-2 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Select Service</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Choose a service</option>
              <option value="teeth-whitening">Teeth Whitening</option>
              <option value="checkup">Regular Check-up</option>
              <option value="cosmetic">Cosmetic Procedures</option>
              <option value="implants">Dental Implants</option>
              <option value="crowns">Crowns & Bridges</option>
              <option value="emergency">Emergency Care</option>
              <option value="extraction">Extractions</option>
              <option value="fillings">Fillings & Sealants</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2 text-teal-500" />
              Additional Notes
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific concerns or questions?"
              rows={4}
              className="border-2 focus:border-teal-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Request Appointment
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-8 py-6"
            >
              Cancel
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
