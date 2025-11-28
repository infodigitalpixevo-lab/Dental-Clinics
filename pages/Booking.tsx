import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

export const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking with Teba Dental Center. Our reception team will contact you shortly to confirm your appointment time.
          </p>
          <button onClick={() => setSubmitted(false)} className="text-teal-600 font-semibold hover:underline">
            Book another appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-teal-50 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-teal-600 p-8 text-white text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
          <p className="text-teal-100">Choose your preferred date, time, and service.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
              <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="+974 ..." />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input required type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" placeholder="john@example.com" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Service</label>
               <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white">
                 <option>General Consultation</option>
                 <option>Cosmetic Dentistry</option>
                 <option>Orthodontics</option>
                 <option>Dental Implants</option>
                 <option>Root Canal</option>
                 <option>Pediatric Care</option>
               </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input required type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Dentist (Optional)</label>
               <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white">
                 <option value="">Any Specialist</option>
                 <option>Dr. Mohammed (Ortho)</option>
                 <option>Dr. Sara (Cosmetic)</option>
                 <option>Dr. Ahmed (Implants)</option>
               </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" rows={3} placeholder="Tell us about your concern..."></textarea>
          </div>

          <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-lg mt-4">
            Confirm Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};