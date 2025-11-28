import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600';

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Teba Specialized Dental Center - Qatar's Leading Dental Care</p>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1"><Phone size={14} /> +974 XXXXXXX</span>
             <span>Sat–Thu: 9:00 AM – 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/doctors" className={isActive('/doctors')}>Doctors</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            <Link to="/booking" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full transition flex items-center gap-2 font-medium shadow-md shadow-teal-100">
              <Calendar size={18} /> Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">About Us</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">Services</Link>
            <Link to="/doctors" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">Doctors</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded">Contact</Link>
            <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="bg-teal-600 text-white text-center p-3 rounded-lg font-medium">Book Appointment</Link>
          </div>
        </div>
      )}
    </header>
  );
};