import React from 'react';
import { ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/50 via-gray-900/70 to-purple-900/50 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Saran M
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl relative">
          Innovative Full-Stack Developer Building the Future of Web Experiences
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce absolute left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-500 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;