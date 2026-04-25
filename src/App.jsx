import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, User, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills'];
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
              {['home', 'about', 'experience', 'education', 'skills'].map((item) => (
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
          <a href="tel:+91 1234564890" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all">
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
            <p className="text-lg text-slate-700 leading-relaxed">
              I am a dedicated professional with a background in Information Technology and Computer Applications. 
              I am committed to working efficiently and effectively, always striving to deliver impactful results in 
              everything I do. My strong communication skills, combined with my ability to engage and inspire, 
              allow me to excel not only in technical roles but also in leadership and training environments. 
              Whether I am writing code or delivering motivational talks, my goal is to create a positive and lasting impact.
            </p>
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10">
            <GraduationCap className="w-8 h-8 text-indigo-600 mr-4" />
            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Degree 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Master's Degree in Computer Applications</h3>
              <p className="text-indigo-600 font-medium mb-4">June 2025 - Present</p>
              <div className="flex items-start text-slate-600 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-slate-400 shrink-0" />
                <span>Dev Sanskriti Vishwavidyalaya, Haridwar, Uttarakhand</span>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bachelor of Science Degree in Information Technology</h3>
              <p className="text-indigo-600 font-medium mb-4">June 2021 - May 2024</p>
              <div className="flex items-start text-slate-600 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-slate-400 shrink-0" />
                <span>Dev Sanskriti Vishwavidyalaya, Haridwar, Uttarakhand</span>
              </div>
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
                {['C / C++', 'HTML / CSS', 'Python', 'SQL', 'NoSQL'].map(skill => (
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
          <div className="flex space-x-6 mb-8">
            <a href="mailto:chouhanjayshree03@gmail.com" className="hover:text-white transition-colors flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              chouhanjayshree03@gmail.com
            </a>
            <a href="tel:+919343550547" className="hover:text-white transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +91 9343550547
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