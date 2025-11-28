import React from 'react';

const servicesList = [
  { title: "Cosmetic Dentistry", desc: "Enhance your smile with procedures like teeth whitening, veneers, smile makeovers, and cosmetic bonding. Achieve naturally beautiful results with expert precision." },
  { title: "Orthodontics", desc: "We offer metal braces, ceramic braces, and clear aligner systems like Invisalign to correct misaligned teeth and improve bite function." },
  { title: "Dental Implants", desc: "Long-lasting, natural-looking implants to replace missing teeth and restore full functionality and confidence." },
  { title: "Root Canal Treatment", desc: "Pain-free and advanced endodontic treatments performed by experienced specialists to save natural teeth." },
  { title: "Pediatric Dentistry", desc: "Compassionate dental care for children in a friendly environment. We focus on preventive care and cavity treatment with gentle techniques." },
  { title: "Gum & Periodontal Care", desc: "Specialized treatment for gum disease, bleeding gums, deep cleaning, scaling, and periodontal therapy." },
  { title: "Oral Surgery", desc: "Tooth extractions, wisdom tooth removal, and minor surgical procedures performed safely and comfortably." },
  { title: "Preventive Dentistry", desc: "Routine checkups, professional cleaning, digital X-rays, fluoride treatment, and more to maintain long-term oral health." }
];

const dentalImages = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1598256989306-088c60147bed?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80"
];

export const Services: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive range of dental treatments using cutting-edge technology and evidence-based procedures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={dentalImages[idx % dentalImages.length]}
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};