import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Adya',
      period: 'July 2024 - Present',
      location: 'Remote/Hyderabad',
      responsibilities: [
        'Frontend development for the Vanij platform using React, MUI and Tailwind CSS',
        'Full-stack development on aiSDR proof-of-concept',
        'Debugging and enhancing existing features',
        'Participating in Agile meetings and sprint planning',
        'Task prioritization and management',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center">
                    <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                    {exp.title} at {exp.company}
                  </h3>
                  <p className="text-gray-400 flex items-center mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period} | {exp.location}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;