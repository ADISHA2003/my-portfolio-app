import React from 'react';
import { Code, Laptop, Monitor, GitBranch, Github, Figma, Server } from 'lucide-react';
import { FaPython } from 'react-icons/fa';

export default function About() {
  const skills = [
    { icon: <Code className="text-[#e44d26]" />, name: 'HTML & CSS' },
    { icon: <Laptop className="text-[#f0db4f]" />, name: 'JavaScript' },
    { icon: <FaPython className="text-[#A678DE]" />, name: 'Python' },
    { icon: <Monitor className="text-[#61DBFB]" />, name: 'React' },
    { icon: <Server className="text-[#68A063]" />, name: 'Node.js' },
    { icon: <GitBranch className="text-[#F1502F]" />, name: 'Git' },
    { icon: <Github className="text-black" />, name: 'Github' },
    { icon: <Figma className="text-[#F24E1E]" />, name: 'Figma' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <img
              src="https://avatars.githubusercontent.com/u/157511091?v=4"
              alt="Profile"
              className="w-48 h-48 rounded-full shadow-lg"
            />
            <div className="text-gray-600 space-y-4">
              <p>
                I'm Aditya Sharma, a web developer specializing in creating beautiful, functional websites for small businesses. I focus on building responsive, user-friendly sites that connect businesses with their audience, driving success. My approach blends creativity and precision to reflect each client's vision.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}