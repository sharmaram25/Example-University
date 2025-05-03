import React from 'react';
import { BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Example University
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sage">
            Shaping Tomorrow's Leaders Through Excellence in Education
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition">
              Apply Now
            </button>
            <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-navy transition">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sage to-transparent"></div>
    </div>
  );
};

export default Hero;