import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Intro */}
      <div className="bg-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Teba Specialized Dental Center</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Dedicated to providing comprehensive and specialized dental services in Qatar based on excellence, trust, and international standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Teba Specialized Dental Center is a premier healthcare facility committed to reshaping the dental experience in Qatar. We believe that world-class dental care requires a combination of highly specialized knowledge, cutting-edge technology, and a compassionate environment.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our clinic was founded with a clear vision: to bring together a team of dentists who hold the highest level of academic and clinical qualifications—Master’s and Doctoral degrees—from leading global universities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Clinic Interior" className="rounded-2xl shadow-lg mt-8 object-cover h-full" />
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Doctor Consultation" className="rounded-2xl shadow-lg object-cover h-full" />
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
            <Target className="w-10 h-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional dental care through specialized knowledge, advanced technology, and a patient-centered approach.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
             <Heart className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as Qatar’s most trusted and specialized dental center that transforms smiles and enriches lives.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Award className="w-10 h-10 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Core Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Excellence</li>
              <li>• Professionalism</li>
              <li>• Compassion</li>
              <li>• Integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};