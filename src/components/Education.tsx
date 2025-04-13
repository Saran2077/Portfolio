import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Book, Star } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  achievements?: string[];
  courses?: string[];
}

const educationData: Education[] = [
  {
    institution: "Sri Shakthi Institute of Engineering And Technology",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    period: "Oct 2021 - Present",
    location: "Coimbatore, Tamil Nadu",
    score: "7.5",
  },
  {
    institution: "Literacy Mission Matric Higher Secondary School",
    degree: "Secondary School Leaving Certificate",
    period: "2020 - 2021",
    location: "Tiruppur, Tamil Nadu",
    score: "91%"
  },
  {
    institution: "Literacy Mission Matric Higher Secondary School",
    degree: "Higher Secondary Education",
    period: "2018 - 2019",
    location: "Tiruppur, Tamil Nadu",
    score: "89%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gray-900 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-400 mt-1">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        Score: {edu.score}
                      </span>
                    </div>
                  </div>

                  {edu?.achievements && <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="flex items-center text-lg font-semibold text-white mb-2">
                        <Award className="w-5 h-5 text-purple-500 mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center">
                            <span className="text-purple-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center text-lg font-semibold text-white mb-2">
                        <Book className="w-5 h-5 text-green-500 mr-2" />
                        Key Courses
                      </h4>
                      <ul className="space-y-2">
                        {edu.courses.map((course, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center">
                            <span className="text-green-500 mr-2">•</span>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;