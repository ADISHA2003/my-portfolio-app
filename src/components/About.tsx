import React from 'react';
import {
  Code, Laptop, Monitor, GitBranch, Github, Figma, Server,
  Database, Cloud, ShieldCheck, TerminalSquare, MousePointerClick
} from 'lucide-react';
import { FaPython } from 'react-icons/fa';

export default function About() {
  const skills = [
    // Web Development
    { icon: <Code className="text-[#e44d26]" />, name: 'HTML & CSS' },
    { icon: <Laptop className="text-[#f0db4f]" />, name: 'JavaScript' },
    { icon: <Monitor className="text-[#61DBFB]" />, name: 'React.js' },
    { icon: <Server className="text-[#68A063]" />, name: 'Node.js & Express' },
    
    // Automation & Testing
    { icon: <ShieldCheck className="text-[#6e40c9]" />, name: 'Selenium' },
    { icon: <MousePointerClick className="text-[#aaccff]" />, name: 'Puppeteer' },
    { icon: <MousePointerClick className="text-[#45ba94]" />, name: 'Playwright' },
    { icon: <ShieldCheck className="text-[#ffb86c]" />, name: 'Mocha' },
    { icon: <FaPython className="text-[#A678DE]" />, name: 'Python (Automation)' },

    // Backend & Database
    { icon: <Database className="text-[#336791]" />, name: 'SQL' },
    { icon: <TerminalSquare className="text-[#ff6347]" />, name: 'APIs' },

    // Tools & Cloud
    { icon: <GitBranch className="text-[#F1502F]" />, name: 'Git & GitHub' },
    { icon: <Cloud className="text-[#FF9900]" />, name: 'Cloud' },
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
                I'm Aditya Sharma, a self-taught full-stack web developer and automation specialist. I build efficient, scalable applications using technologies like React, Node.js, and PostgreSQL.
              </p>
              <p>
                My expertise lies in automating browser tasks and data pipelines using tools like Selenium, Puppeteer, and Playwright. I’ve delivered freelance automation tools for foreign clients, helping them automate their manual workflow.
              </p>
              <p>
                I’m also the creator of <strong>SmartCompare</strong>, a grocery comparison PWA. I enjoy solving complex technical problems and continuously learning new technologies to push the limits of what’s possible.
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
