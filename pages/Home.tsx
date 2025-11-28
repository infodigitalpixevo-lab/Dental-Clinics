import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-semibold rounded-full mb-4">
              World-Class Dental Care in Qatar
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Exceptional Care with Highly Qualified <span className="text-teal-600">Specialists</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Delivering advanced, patient-focused dental treatments using the latest technology and internationally trained expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200">
                Book Appointment
              </Link>
              <Link to="/services" className="bg-white text-teal-700 border border-teal-200 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition">
                View Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://www.turkeydentalclinic.com/wp-content/uploads/2024/11/dentist-turkey-antalya.jpg" 
              alt="Dentist treating patient" 
              className="rounded-3xl shadow-2xl relative z-10 object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20">
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
              </div>
              <p className="font-bold text-gray-800">Trusted by 10,000+ Patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Teba Dental?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team combines experience, precision, and genuine care to ensure every patient enjoys a healthy, confident smile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Qualified Specialists', desc: 'Dentists with post-graduate degrees from prestigious global institutions.' },
              { title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise diagnosis and painless treatments.' },
              { title: 'Patient-Focused', desc: 'Personalized treatment plans in a comfortable, safe environment.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
              <p className="text-gray-400">Comprehensive care for the whole family.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-teal-400 hover:text-teal-300">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Cosmetic Dentistry', 'Orthodontics (Braces)', 'Dental Implants', 'Root Canal Treatment', 'Pediatric Dentistry', 'Gum Treatment'].map((service, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition border border-gray-700">
                <h3 className="text-lg font-bold mb-2">{service}</h3>
                <p className="text-gray-400 text-sm mb-4">Expert care delivered by specialized professionals.</p>
                <Link to="/services" className="text-sm text-teal-500 hover:text-teal-400 font-medium">Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Smile Deserves Expert Care</h2>
          <p className="text-teal-100 text-lg mb-8">Book your appointment today and experience the difference of specialized dental care.</p>
          <Link to="/booking" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};