import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20">
                <img
                  src="src/assets/saran.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I'm Saran M – a creative and driven full stack developer from Coimbatore, Tamil Nadu. I specialize in building innovative web applications using modern technologies like React, Node.js, Tailwind CSS, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;