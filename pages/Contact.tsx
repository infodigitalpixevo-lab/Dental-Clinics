import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-gray-600 mb-10 text-lg">
              We’re here to help you achieve the perfect smile. Contact us for appointments or inquiries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                  <p className="text-gray-600">+974 XXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600">info@tebadental.qa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Working Hours</h3>
                  <p className="text-gray-600">Sat–Thu: 9:00 AM – 9:00 PM</p>
                  <p className="text-gray-600">Friday: Closed</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Location</h3>
                  <p className="text-gray-600">Building 123, Street 456, Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                 <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                 <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
              </div>
              <textarea rows={4} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">Send Message</button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "Do you accept walk-in patients?", a: "Yes, walk-in patients are welcome, but appointments are recommended to reduce waiting time." },
              { q: "Do you offer painless treatments?", a: "Our specialists use modern techniques and advanced anesthesia to ensure maximum comfort." },
              { q: "Are your dentists certified?", a: "Yes, all our dentists hold post-graduate, master, or doctoral qualifications from leading institutions." },
              { q: "Do you treat children?", a: "Yes, we have certified pediatric dentists specializing in gentle care for children." },
              { q: "What payment methods do you accept?", a: "We accept cash, credit cards, and valid insurance cards." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-teal-300 transition">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};