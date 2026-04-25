import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, User, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="font-bold text-xl tracking-tight text-indigo-700">JC.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 capitalize ${
                    activeSection === item ? 'text-indigo-700 border-b-2 border-indigo-700' : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
               {/* Mobile menu could be implemented here */}
               <span className="text-sm font-medium text-indigo-700">Jayshree Chouhan</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-6 border border-indigo-100">
          IT Professional & Motivational Speaker
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Jayshree Chouhan</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Committed to working efficiently and effectively, always striving to deliver impactful results. I combine strong technical foundations with the ability to engage and inspire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:chouhanjayshree03@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/1nEdX-JqY16Ocsq405fToH8-OefWwkZDk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 shadow-sm transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Resume
          </a>
          <a href="tel:+911234567890" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all">
            <Phone className="w-5 h-5 mr-2" />
            +91 1234567890
          </a>
        </div>
        <div className="mt-16 animate-bounce text-slate-400">
          <ChevronDown className="w-8 h-8 cursor-pointer" onClick={() => scrollTo('about')} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <User className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am a dedicated professional with a background in Information Technology and Computer Applications. 
              I am committed to working efficiently and effectively, always striving to deliver impactful results in 
              everything I do. My strong communication skills, combined with my ability to engage and inspire, 
              allow me to excel not only in technical roles but also in leadership and training environments. 
              Whether I am writing code or delivering motivational talks, my goal is to create a positive and lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/jayshrichouhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jayshri-chouhan-46150b304/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg hover:bg-[#084e96] transition-colors font-medium shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <Briefcase className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Experience 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="font-bold text-xl text-slate-900">Trainer, Volunteer</h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">17th Dec 2025</span>
                </div>
                <div className="text-slate-500 font-medium mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Shantikunj, Gayatrikunj • Shirpur, Maharashtra
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Spearheaded the design and delivery of high-impact motivational presentations centered on personal growth and strategic leadership. By facilitating dynamic audience engagement activities and interactive Q&A sessions, I fostered an immersive environment that significantly amplified the core message and resonated with diverse participants.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="font-bold text-xl text-slate-900">Trainer, Volunteer</h3>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">28th Dec 2024</span>
                </div>
                <div className="text-slate-500 font-medium mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Shantikunj, Gayatrikunj • Koraput, Odisha
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Assisted in crafting and delivering motivational talks, focusing on personal development and leadership. Conducted audience engagement activities, including Q&A and interactive discussions, to enhance session impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-600 mr-4">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">30 Projects on CRUD Operations</h3>
                <a href="https://github.com/jayshrichouhan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-600 mb-6 flex-grow">
                A comprehensive collection of 30 distinct projects demonstrating proficiency in Create, Read, Update, and Delete (CRUD) operations across various tech stacks and databases.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['CRUD', 'Database', 'Web Dev', 'Flask', 'Django'].map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* View More on Github Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all text-white flex flex-col justify-center items-center text-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 text-indigo-200">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
              <p className="text-indigo-100 mb-6 max-w-sm">
                Check out my GitHub profile for more projects, code repositories, and contributions.
              </p>
              <a 
                href="https://github.com/jayshrichouhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              >
                View All Projects
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-white rounded-t-3xl md:rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12 justify-center md:justify-start">
            <Code className="w-8 h-8 text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Tech Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-b border-slate-700 pb-2">Software & Web</h3>
              <div className="flex flex-wrap gap-3">
                {['C / C++', 'HTML / CSS', 'Python', 'SQL', 'NoSQL', 'Flask', 'Django'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-200 border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-b border-slate-700 pb-2">Creative</h3>
              <div className="flex flex-wrap gap-3">
                {['Content Writing', 'Graphic Designing', 'Canva'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-200 border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-indigo-300 border-b border-slate-700 pb-2">Professional</h3>
              <div className="flex flex-wrap gap-3">
                {['Problem-Solving', 'Project Management', 'Team Management', 'Coordination', 'Communication'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-200 border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-6">Jayshree Chouhan</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:chouhanjayshree03@gmail.com" className="hover:text-white transition-colors flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              chouhanjayshree03@gmail.com
            </a>
            <a href="tel:+911234567890" className="hover:text-white transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +91 1234567890
            </a>
            <a href="https://www.linkedin.com/in/jayshri-chouhan-46150b304/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Jayshree Chouhan. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;