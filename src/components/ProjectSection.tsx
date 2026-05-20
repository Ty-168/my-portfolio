import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import Project1 from '@/assets/project1.png'
import Project2 from '@/assets/project2.png'
import Project3 from '@/assets/project3.png'
import Project4 from '@/assets/project4.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  codeLink: string;
  detailedDescription?: string;
  responsibilities?: string[];
  badge?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Bin",
    description: "An IoT-based smart waste management system with real-time monitoring on web application.",
    image: Project1,
    techStack: ["Vue.js", "Tailwind CSS", "NestJS", "MongoDB", "MQTT", "WebSocket", "ESP32"],
    liveLink: "https://smartbin.gic26.tech/",
    codeLink: "https://github.com/SmartBin-Project",
    detailedDescription: "This project addresses the inefficiency of traditional waste collection methods. By utilizing IoT sensors (ESP32) in bins, we can monitor fill levels in real-time. The data is transmitted via MQTT to a NestJS backend and visualized on a Vue.js dashboard. This allows for optimized route planning for waste collection trucks, reducing fuel consumption and operational costs.",
    responsibilities: [
      "Design UX/UI for Web Application",
      "Implement real-time data using Websocket in NestJS",
      "Integrated MQTT (HiveMQ) for communication between ESP32 devices and backend server"
    ],
    badge: "Team Project"
  },
  {
    id: 2,
    title: "School Supply E-Commerce",
    description: "A full-stack e-commerce web application for purchasing school supplies online.",
    image: Project2,
    techStack: ["Vue.js", "Tailwind CSS", "Spring Boot", "MongoDB"],
    liveLink: "#",
    codeLink: "https://github.com/E-Commerce-School-Supply",
    detailedDescription: "A comprehensive e-commerce platform catered to students and parents. It features a responsive design, secure authentication using JWT, and a robust product management system. The backend is built with Spring Boot for scalability, while MongoDB handles the flexible product data structures.",
    responsibilities: [
      "Designed and developed the user interface",
      "Integrated frontend with RESTful APIs",
      "Implemented backend features and functionalities",
    ],
    badge: "Team Project"
  },
  {
    id: 3,
    title: "GIC PAMS",
    description: "A web application that serves as a platform for managing and showcasing projects and skills",
    image: Project3,
    techStack: ["Vuejs", "Tailwind CSS", "NestJs", "TypeScript", "MongoDB"],
    liveLink: "#",
    codeLink: "https://github.com/GIC-ITC",
    detailedDescription: "GIC PAMS (Project Archive Management System) is a web application designed to help users manage and showcase their projects and skills effectively. The platform allows users to create detailed profiles, add projects with descriptions, tech stacks, and links, and display their skills in an organized manner. It serves as a personal portfolio for developers to highlight their work and expertise.",
    responsibilities: [
      "Design UX/UI for the System",
      "Consume REST APIs using Axios",
      "Manage application state using Pinia",
      "Implement responsive design for mobile and desktop",
      "Develop reusable Vue components"
    ],
    badge: "Team Project"
  },
  {
    id: 4,
    title: "Student Part-Time Job Portal",
    description: "A web application connecting students with part-time job opportunities.",
    image: Project4,
    techStack: ["Vue.js", "Tailwind CSS", "NestJS", "PostgresDB"],
    liveLink: "https://find-job.gic26.tech/",
    codeLink: "https://github.com/Ty-168/Frontend_IP2",
    detailedDescription: "A web application designed to connect students with part-time job opportunities. The platform features a user-friendly interface for job seekers to browse and apply for positions, while employers can post job listings and manage applications.",
    responsibilities: [
      "Worked on both frontend and backend development",
      "Deployed the frontend application using Cloudflare",
      "Hosted and maintained the backend server",
    ],
    badge: "Team Project"
  }

];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate Header
    gsap.fromTo('.project-header', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.project-header',
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play reverse play reverse'
            }
        }
    );

    // Animate Grid Items Staggered
    const cards = gsap.utils.toArray('.project-card');
    cards.forEach((card: any) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%', // Trigger when the top of the card hits 85% of viewport height
                    end: 'bottom 10%',
                    toggleActions: 'play reverse play reverse',
                }
            }
        );
    });

  }, { scope: containerRef });


  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section ref={containerRef} id='projects' className="py-20 font-sans">
      <div className="container mx-auto px-4">
        <div 
                className="text-center mb-16 project-header">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight text-center">Projects</h2>
          <p className="text-xl md:text-2xl text-accent text-center font-medium">Projects I’ve contributed to</p>
        </div>

        <div className="project-content grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-200 mb-4 line-clamp-2 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                    <p className="text-slate-300 text-sm mb-2 font-medium">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                       {project.techStack.slice(0, 4).map(tech => (
                          <span key={tech} className="text-xs bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-md">
                            {tech}
                          </span>
                       ))}
                       {project.techStack.length > 4 && (
                          <span className="text-xs bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-md">
                            +{project.techStack.length - 4}
                          </span>
                       )}
                    </div>
                  </div>

                  <div className="flex gap-6 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                    <button 
                      className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-slate-100 transition-colors text-slate-800 z-10"
                >
                  <X size={24} />
                </button>
                <div className="h-64 md:h-80 w-full overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Overview</h4>
                    <p>{selectedProject.detailedDescription || selectedProject.description}</p>
                  </div>

                  {selectedProject.responsibilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">My Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.responsibilities.map((resp, i) => (
                           <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex gap-4 pt-4 border-t border-slate-100">
                     <a 
                      href={selectedProject.liveLink} 
                      className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Preview
                    </a>
                    <a 
                      href={selectedProject.codeLink} 
                      className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}