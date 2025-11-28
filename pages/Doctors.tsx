import React from 'react';

const doctors = [
  { 
    name: "Dr. Mohammed", 
    role: "Specialist Orthodontist", 
    edu: "Masters in Orthodontics | 15+ Years Exp", 
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Dr. Sara", 
    role: "Cosmetic Dentist", 
    edu: "Advanced Certification in Aesthetic Dentistry", 
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Dr. Ahmed", 
    role: "Implant Specialist", 
    edu: "Fellowship in Implantology | Europe Trained", 
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Dr. Fatima", 
    role: "Pediatric Dentist", 
    edu: "Certified Pediatric Dentistry Specialist", 
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Dr. Khalid", 
    role: "Endodontist", 
    edu: "Post-graduate Endodontics | Microscopic RCT", 
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
  },
];

export const Doctors: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team consists of specialists holding Post-graduate, Master’s, and Doctoral degrees (PhD) from internationally recognized institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img 
                  src={doc.img}
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                <p className="text-teal-600 font-medium mb-2">{doc.role}</p>
                <div className="h-px bg-gray-100 w-16 mx-auto my-3"></div>
                <p className="text-sm text-gray-500">{doc.edu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};