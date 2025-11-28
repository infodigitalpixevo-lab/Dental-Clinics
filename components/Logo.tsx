import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col items-end leading-none">
        <span className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide font-sans">TEBA</span>
        <span className="text-sm md:text-lg font-bold text-blue-900 font-serif -mt-1">طيبة</span>
      </div>
      <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Abstract Tooth Shape - Blue Base */}
          <path d="M25 35C25 20 35 15 50 15C65 15 75 20 75 35V55C75 75 60 85 50 85C40 85 25 75 25 55V35Z" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
          
          {/* Teal Swoosh/Leaf Element */}
          <path d="M50 85C50 85 85 75 85 45C85 30 75 20 65 20" stroke="#0d9488" strokeWidth="6" strokeLinecap="round"/>
          
          {/* Internal Detail */}
          <path d="M35 35C35 35 40 45 50 45C60 45 65 35 65 35" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
};