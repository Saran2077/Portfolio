import React from 'react';
import {
  Code2,
  Database,
  Github as Git,
  Terminal,
  Laptop,
  Brain,
  Globe,
  Layers,
  Settings,
  Box,
  Cpu,
  Users,
  Workflow,
  TestTube,
  MessageSquare,
  Lightbulb,
  Cloud,
} from 'lucide-react';
import { SiBitbucket } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: <Code2 className="w-4 h-4 text-blue-400" /> },
        { name: 'JavaScript', icon: <Globe className="w-4 h-4 text-yellow-400" /> },
        { name: 'HTML5', icon: <Box className="w-4 h-4 text-orange-400" /> },
        { name: 'CSS3', icon: <Layers className="w-4 h-4 text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <Settings className="w-4 h-4 text-cyan-400" /> },
      ],
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <Terminal className="w-4 h-4 text-green-400" /> },
        { name: 'Express', icon: <Box className="w-4 h-4 text-gray-400" /> },
        { name: 'Python', icon: <Settings className="w-4 h-4 text-yellow-400" /> },
        { name: 'RESTful APIs', icon: <Cpu className="w-4 h-4 text-blue-400" /> },
      ],
      icon: <Terminal className="w-6 h-6 text-purple-500" />,
      color: 'from-purple-500/20 to-purple-500/5',
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: <Database className="w-4 h-4 text-green-400" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4 text-blue-400" /> },
        { name: 'PostgreSQL', icon: <Database className="w-4 h-4 text-cyan-400" /> },
      ],
      icon: <Database className="w-6 h-6 text-green-500" />,
      color: 'from-green-500/20 to-green-500/5',
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: <Git className="w-4 h-4 text-orange-400" /> },
        { name: 'BitBucket', icon: <SiBitbucket className="w-4 h-4 text-blue-400" /> },
      ],
      icon: <Git className="w-6 h-6 text-orange-500" />,
      color: 'from-orange-500/20 to-orange-500/5',
    },
    {
      category: 'Development',
      items: [
        { name: 'Agile', icon: <Users className="w-4 h-4 text-blue-400" /> },
        { name: 'SDLC', icon: <Workflow className="w-4 h-4 text-purple-400" /> },
        { name: 'Testing', icon: <TestTube className="w-4 h-4 text-green-400" /> },
        { name: 'Debugging', icon: <Settings className="w-4 h-4 text-red-400" /> },
      ],
      icon: <Laptop className="w-6 h-6 text-red-500" />,
      color: 'from-red-500/20 to-red-500/5',
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Problem Solving', icon: <Lightbulb className="w-4 h-4 text-yellow-400" /> },
        { name: 'Team Collaboration', icon: <Users className="w-4 h-4 text-blue-400" /> },
        { name: 'Communication', icon: <MessageSquare className="w-4 h-4 text-green-400" /> },
      ],
      icon: <Brain className="w-6 h-6 text-yellow-500" />,
      color: 'from-yellow-500/20 to-yellow-500/5',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="relative p-6 rounded-lg bg-gray-900 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-800/80 rounded-lg group-hover:bg-gray-800 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{skill.category}</h3>
                </div>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li 
                      key={item.name} 
                      className="text-gray-400 flex items-center space-x-2 group-hover:text-gray-300 transition-colors"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;