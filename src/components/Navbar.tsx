import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Menu, X, Facebook } from 'lucide-react';
import Logo from '@/assets/logo-name.png';
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.toLowerCase().replace(' ', '-'));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = ['Home', 'About', 'Projects', 'Tech Stack', 'Contact'];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Ty-168" },
    { Icon: Facebook, href: "https://www.facebook.com/kity.lim.5/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/kity-lim-8a4313378/" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-white/10" 
          : "bg-transparent py-6 md:py-8",
        isMobileMenuOpen && "bg-transparent border-transparent shadow-none backdrop-blur-none"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <a href='#home' className="flex items-center gap-1 cursor-pointer group z-50">
          <img 
            src={Logo} 
            alt='logo' 
            className={cn(
              "object-cover transition-all duration-300",
              isScrolled ? "h-12 w-12 md:h-16 md:w-16" : "h-16 w-16 md:h-24 md:w-24"
            )}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 font-bold text-lg text-[#2D3342]">
          {navLinks.map((item) => {
            const linkId = item.toLowerCase().replace(' ', '-');
            const isActive = activeSection === linkId;
            
            return (
              <a 
                key={item} 
                href={`#${linkId}`}
                className={cn(
                  "transition-colors relative group py-1",
                  isActive ? "text-[#D97706]" : "hover:text-[#D97706]"
                )}
              >
                {item}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-[#D97706] transition-all duration-300 ease-out",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </a>
            );
          })}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <a 
              key={index}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#2D3342] hover:text-[#D97706] hover:scale-110 transition-all duration-300 transform"
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#2D3342] hover:text-[#D97706] transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-[#E3D9B6] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col items-center gap-8 font-bold text-2xl text-[#2D3342]">
            {navLinks.map((item) => {
              const linkId = item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === linkId;

              return (
                <a 
                  key={item} 
                  href={`#${linkId}`}
                  className={cn(
                    "transition-colors",
                    isActive ? "text-[#D97706]" : "hover:text-[#D97706]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-8 mt-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2D3342] hover:text-[#D97706] transition-colors"
              >
                <Icon className="w-8 h-8" strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};
