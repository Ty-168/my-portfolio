
import { cn } from '@/lib/utils';
import { Github, Linkedin, Facebook } from 'lucide-react';
import Logo from '@/assets/logo-name.png'


export default function Footer() {
  return (
    <footer className="pt-20 pb-10 font-sans text-secondary">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
          
          {/* Logo */}
          <a href='#home' className="flex items-center">
            <img 
              src={Logo} 
              alt='logo' 
              className={cn(
                "object-cover h-24 w-24",
              )}
            />
          </a>

          {/* Contact Info & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="font-medium opacity-80">+855 95 854 910</span>
            <a href="mailto:kitylim123@gmail.com" className="font-medium opacity-80 hover:text-amber-700 transition-colors">
              kitylim123@gmail.com
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/Ty-168" className="p-2 hover:bg-slate-800 hover:text-white rounded-full transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.facebook.com/kity.lim.5/" className="p-2 hover:bg-slate-800 hover:text-white rounded-full transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kity-lim-8a4313378/" className="p-2 hover:bg-slate-800 hover:text-white rounded-full transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-slate-400/30 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base">
          
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 font-medium text-slate-700">
            <a href="#home" className="hover:text-amber-700 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-700 transition-colors">About</a>
            <a href="#projects" className="hover:text-amber-700 transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-amber-700 transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-slate-600 opacity-80">
            © 2026 Lim Kity. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
