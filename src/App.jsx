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

  // Reusable liquid glass class for cards
  const liquidGlassClass = "bg-[#0f172a]/40 backdrop-blur-[24px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]";

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-slate-100 font-sans selection:bg-pink-500/30 selection:text-white">
      <style>{`
        body {
          background-color: #2e1065; /* Matches theme to hide white overscroll bounce seamlessly */
          overflow-x: hidden;
        }
      `}</style>

      {/* Fixed Background Image - Placed in a div to prevent mobile scrolling bugs */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          /* Change this URL to '/Background.jpg' when you move to your local project! */
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#4c1d95'
        }}
      />
      
      {/* Subtle Background Overlay to deepen the contrast for the glass */}
      <div className="fixed inset-0 bg-black/20 z-0 pointer-events-none"></div>

      {/* Navigation - Floating Glass Pill */}
      <nav className="fixed top-0 w-full z-50 pt-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-16 px-6 transition-all duration-500 ${
            activeSection !== 'home' 
              ? 'bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-full' 
              : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-sm rounded-2xl'
          }`}>
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="font-bold text-2xl tracking-tight text-white drop-shadow-md">JC.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'projects', 'skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-sm font-medium transition-all duration-300 capitalize py-1 ${
                    activeSection === item 
                      ? 'text-white drop-shadow-md border-b-2 border-white' 
                      : 'text-white/60 hover:text-white hover:drop-shadow-md'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
               <span className="text-sm font-medium text-white drop-shadow-md">Hi, I'm Jayshree Chouhan</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Matching the Reference Image */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 px-4 max-w-6xl mx-auto">
        
        {/* Main Liquid Glass Card */}
        <div className={`w-full ${liquidGlassClass} rounded-[2.5rem] p-10 md:p-20 flex flex-col items-center text-center relative overflow-hidden group`}>
          
          {/* Subtle top reflection for glass effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl leading-tight">
            Hi, I'm Jayshree Chouhan
          </h1>
          
          <div className="mb-8 inline-block px-6 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-sm">
            <p className="uppercase tracking-[0.25em] text-sm md:text-base font-semibold text-white/90 drop-shadow-md">
              IT Professional & Motivational Speaker
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 leading-relaxed font-light drop-shadow-md">
            Committed to working efficiently and effectively, always striving to deliver impactful results. I combine strong technical foundations with the ability to engage and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a 
              href="mailto:chouhanjayshree03@gmail.com" 
              className="px-10 py-3.5 bg-[#f50057] hover:bg-[#c51162] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,0,87,0.4)] hover:shadow-[0_0_30px_rgba(245,0,87,0.6)] transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1nEdX-JqY16Ocsq405fToH8-OefWwkZDk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center text-white/90 font-medium hover:text-white transition-colors"
            >
              View Resume 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 animate-bounce text-white/50 hover:text-white transition-colors absolute bottom-10">
          <ChevronDown className="w-8 h-8 cursor-pointer" onClick={() => scrollTo('about')} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">About Me</h2>
            <div className="w-24 h-1 bg-[#f50057] rounded-full shadow-[0_0_10px_rgba(245,0,87,0.5)]"></div>
          </div>
          
          <div className={`${liquidGlassClass} rounded-3xl p-10 md:p-14`}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-light text-center md:text-left">
              I am a dedicated professional with a background in Information Technology and Computer Applications. 
              I am committed to working efficiently and effectively, always striving to deliver impactful results in 
              everything I do. My strong communication skills, combined with my ability to engage and inspire, 
              allow me to excel not only in technical roles but also in leadership and training environments. 
              Whether I am writing code or delivering motivational talks, my goal is to create a positive and lasting impact.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <a 
                href="https://github.com/jayshrichouhan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all shadow-lg font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jayshri-chouhan-46150b304/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-[#0A66C2]/80 hover:bg-[#0A66C2] backdrop-blur-md border border-[#0A66C2]/50 text-white rounded-xl transition-all shadow-lg font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3">
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
      <section id="experience" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-[#f50057] rounded-full shadow-[0_0_10px_rgba(245,0,87,0.5)]"></div>
          </div>
          
          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/30 before:to-transparent">
            
            {/* Experience 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#f50057] bg-[#0f172a] text-[#f50057] shadow-[0_0_15px_rgba(245,0,87,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${liquidGlassClass} p-8 rounded-3xl transition-transform hover:-translate-y-1`}>
                <div className="flex flex-col sm:flex-row justify-between mb-3">
                  <h3 className="font-bold text-2xl text-white">Trainer, Volunteer</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f50057] bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg w-fit mt-2 sm:mt-0 shadow-sm">Dec 2025</span>
                </div>
                <div className="text-white/70 font-medium mb-5 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Shantikunj, Gayatrikunj • Shirpur, Maharashtra
                </div>
                <p className="text-white/80 leading-relaxed font-light">
                  Spearheaded the design and delivery of high-impact motivational presentations centered on personal growth and strategic leadership. By facilitating dynamic audience engagement activities and interactive Q&A sessions, I fostered an immersive environment that significantly amplified the core message and resonated with diverse participants.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#f50057] bg-[#0f172a] text-[#f50057] shadow-[0_0_15px_rgba(245,0,87,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${liquidGlassClass} p-8 rounded-3xl transition-transform hover:-translate-y-1`}>
                <div className="flex flex-col sm:flex-row justify-between mb-3">
                  <h3 className="font-bold text-2xl text-white">Trainer, Volunteer</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f50057] bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg w-fit mt-2 sm:mt-0 shadow-sm">Dec 2024</span>
                </div>
                <div className="text-white/70 font-medium mb-5 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Shantikunj, Gayatrikunj • Koraput, Odisha
                </div>
                <p className="text-white/80 leading-relaxed font-light">
                  Assisted in crafting and delivering motivational talks, focusing on personal development and leadership. Conducted audience engagement activities, including Q&A and interactive discussions, to enhance session impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">Education</h2>
            <div className="w-24 h-1 bg-[#f50057] rounded-full shadow-[0_0_10px_rgba(245,0,87,0.5)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Degree 1 */}
            <div className={`${liquidGlassClass} rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group`}>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#f50057]/20 rounded-full blur-2xl group-hover:bg-[#f50057]/40 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Master's Degree in Computer Applications</h3>
              <p className="text-[#f50057] text-xs font-bold uppercase tracking-wider mb-5 bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-white/10">June 2025 - Present</p>
              <div className="flex items-start text-white/80">
                <GraduationCap className="w-5 h-5 mr-3 text-white/50 shrink-0" />
                <span className="font-light text-sm md:text-base">Dev Sanskriti Vishwavidyalaya, Haridwar, Uttarakhand</span>
              </div>
            </div>

            {/* Degree 2 */}
            <div className={`${liquidGlassClass} rounded-3xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden group`}>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#f50057]/20 rounded-full blur-2xl group-hover:bg-[#f50057]/40 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Bachelor of Science in Information Technology</h3>
              <p className="text-[#f50057] text-xs font-bold uppercase tracking-wider mb-5 bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-white/10">June 2021 - May 2024</p>
              <div className="flex items-start text-white/80">
                <GraduationCap className="w-5 h-5 mr-3 text-white/50 shrink-0" />
                <span className="font-light text-sm md:text-base">Dev Sanskriti Vishwavidyalaya, Haridwar, Uttarakhand</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">Projects</h2>
            <div className="w-24 h-1 bg-[#f50057] rounded-full shadow-[0_0_10px_rgba(245,0,87,0.5)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className={`${liquidGlassClass} rounded-3xl p-8 flex flex-col h-full hover:bg-white/10 transition-colors`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">30 Projects on CRUD</h3>
                <a href="https://github.com/jayshrichouhan" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors bg-white/5 p-2.5 rounded-xl border border-white/10 hover:border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
              <p className="text-white/80 font-light mb-8 flex-grow leading-relaxed">
                A comprehensive collection of 30 distinct projects demonstrating proficiency in Create, Read, Update, and Delete (CRUD) operations across various tech stacks and databases.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {['CRUD', 'Database', 'Web Dev', 'Flask', 'Django'].map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-white/10 border border-white/10 text-white px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* View More Card */}
            <div className={`${liquidGlassClass} rounded-3xl p-8 flex flex-col justify-center items-center text-center h-full relative overflow-hidden group hover:bg-white/10 transition-colors`}>
              {/* Decorative gradient orb behind text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <Code className="w-12 h-12 mb-6 text-white/50" />
                <h3 className="text-2xl font-bold mb-3 text-white">Want to see more?</h3>
                <p className="text-white/70 font-light mb-8 max-w-sm">
                  Check out my GitHub profile for more projects, code repositories, and open-source contributions.
                </p>
                <a 
                  href="https://github.com/jayshrichouhan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-3 bg-white text-[#0f172a] font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                  View All Projects
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-[#f50057] rounded-full shadow-[0_0_10px_rgba(245,0,87,0.5)]"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Tech Skills */}
            <div className={`${liquidGlassClass} p-8 rounded-3xl`}>
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Software & Web</h3>
              <div className="flex flex-wrap gap-3">
                {['C / C++', 'HTML / CSS', 'Python', 'SQL', 'NoSQL', 'Flask', 'Django'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-white/90 font-medium border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div className={`${liquidGlassClass} p-8 rounded-3xl`}>
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Creative</h3>
              <div className="flex flex-wrap gap-3">
                {['Content Writing', 'Graphic Designing', 'Canva'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-white/90 font-medium border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className={`${liquidGlassClass} p-8 rounded-3xl`}>
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Professional</h3>
              <div className="flex flex-wrap gap-3">
                {['Problem-Solving', 'Project Management', 'Team Management', 'Coordination', 'Communication'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-white/90 font-medium border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0f172a]/60 backdrop-blur-3xl border-t border-white/10 py-16 text-center">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight drop-shadow-md">Jayshree Chouhan</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:chouhanjayshree03@gmail.com" className="text-white/80 hover:text-white transition-colors flex items-center bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md shadow-sm">
              <Mail className="w-4 h-4 mr-3" />
              chouhanjayshree03@gmail.com
            </a>
            <a href="tel:+911234567890" className="text-white/80 hover:text-white transition-colors flex items-center bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md shadow-sm">
              <Phone className="w-4 h-4 mr-3" />
              +91 1234567890
            </a>
            <a href="https://www.linkedin.com/in/jayshri-chouhan-46150b304/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all flex items-center bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-3">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
          
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <p className="text-sm text-white/50 font-medium">
            © {new Date().getFullYear()} Jayshree Chouhan. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;