import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import UserImage from '@/assets/hero-image.jpg'
import { Navbar } from './Navbar';
import ProfileCard from './ProfileCard';
import Logo from '@/assets/logo-name.png';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

    tl.from('.hero-text-item', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .from('.hero-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5'); // Start slightly before the text animation ends
    }, { scope: containerRef });
    
  return (
    <div ref={containerRef} id='home' className="min-h-screen flex flex-col relative w-full pt-32">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 max-w-7xl mx-auto w-full pb-20 gap-12 relative z-10">
        
        {/* Left Content - Typography */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2 md:space-y-4">
          <div className="hero-text-item flex items-center gap-3 text-5xl md:text-7xl lg:text-[4rem] font-bold tracking-tight leading-none text-[#1F2937]">
            <h1>Hi</h1>
            <span className="animate-wave origin-bottom-right inline-block hover:animate-spin cursor-default">👋</span>
            <h1>,</h1>
          </div>
          
          <h1 className="hero-text-item text-5xl md:text-7xl lg:text-[4rem] font-bold tracking-tight leading-none text-[#1F2937]">
            My name is
          </h1>
          
          <h1 className="hero-text-item text-5xl md:text-7xl lg:text-[4rem] font-bold tracking-tight leading-none text-[#D97706] drop-shadow-sm">
            Kity
          </h1>
          
          <h1 className="hero-text-item text-5xl md:text-7xl lg:text-[4rem] font-bold tracking-tight leading-none text-[#1F2937]">
            I build things for web
          </h1>
        </div>

        {/* Right Content - Profile Card */}
        <div className="hero-image w-full md:w-1/2 flex justify-center md:justify-end relative items-center">
          <ProfileCard
            avatarUrl={UserImage}
            miniAvatarUrl={UserImage}
            name="Kity Lim"
            title="Computer Science Student"
            handle="kitylim"
            status="Available"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt
            iconUrl={Logo}
            onContactClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </main>
      
      {/* Decorative gradient overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};
export default Hero;
