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
    { icon: <ShieldCheck className="text-[#ffb86c]" />, name: 'Mocha / TestNG' },
    { icon: <FaPython className="text-[#A678DE]" />, name: 'Python (Automation)' },

    // Backend & Database
    { icon: <Database className="text-[#336791]" />, name: 'SQL / PostgreSQL' },
    { icon: <TerminalSquare className="text-[#ff6347]" />, name: 'APIs & Backend Logic' },

    // Tools & Cloud
    { icon: <GitBranch className="text-[#F1502F]" />, name: 'Git & GitHub' },
    { icon: <Cloud className="text-[#FF9900]" />, name: 'Cloud / Vercel' },
    { icon: <Figma className="text-[#F24E1E]" />, name: 'Figma (UI Collaboration)' },
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
              
              {/* 🔥 Strong Hook */}
              <p className="text-lg font-semibold text-gray-800">
                I build reliable, automated, and scalable web systems — combining development, testing, and AI.
              </p>

              <p>
                I’m Aditya Sharma — a QA Engineer, Automation Specialist, and Full-Stack Developer who builds systems that don’t just work, but are tested, stable, and production-ready from day one.
              </p>

              <p>
                My background in software testing gives me a unique edge — I think like a tester while building like a developer. I’ve worked extensively with Playwright, Selenium, and Python to automate complex workflows, reduce manual effort, and improve product quality.
              </p>

              <p>
                On the development side, I create fast, modern web applications using React, Node.js, and APIs — focusing not just on UI, but performance, reliability, and real-world usability.
              </p>

              <p>
                I’ve built products like <strong>SmartCompare</strong> (a grocery comparison PWA) and delivered automation solutions for international clients, helping them save hours of repetitive work.
              </p>

              <p>
                Currently, I’m exploring AI-powered automation, workflow tools like n8n, and building intelligent systems that merge development, testing, and AI into one seamless workflow.
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
