import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="mb-6 bg-white w-fit p-3 rounded-xl">
             <Logo />
          </div>
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            Leading dental care provider in Qatar, offering world-class treatments by internationally trained specialists.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-teal-500 transition"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-teal-500 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-500 transition">Our Services</Link></li>
            <li><Link to="/doctors" className="hover:text-teal-500 transition">Doctors</Link></li>
            <li><Link to="/booking" className="hover:text-teal-500 transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Cosmetic Dentistry</li>
            <li>Orthodontics</li>
            <li>Dental Implants</li>
            <li>Pediatric Dentistry</li>
            <li>Root Canal Treatment</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-teal-500 shrink-0" size={18} />
              <span>Doha, Qatar (Exact Address Here)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-teal-500 shrink-0" size={18} />
              <span>+974 XXXXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-teal-500 shrink-0" size={18} />
              <span>info@tebadental.qa</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Teba Specialized Dental Center. All rights reserved.
      </div>
    </footer>
  );
};