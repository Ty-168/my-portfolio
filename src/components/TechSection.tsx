import { useRef } from 'react';
import { SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiVuedotjs, SiNestjs, SiBootstrap, SiSpringboot, SiGit, SiGithub } from 'react-icons/si';
import { LogoLoop } from './LogoLoop';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiVuedotjs className="text-[#4FC08D]" />, title: "Vue.js", href: "https://vuejs.org" },
  { node: <SiNestjs className="text-[#E0234E]" />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap className="text-[#7952B3]" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiSpringboot className="text-[#6DB33F]" />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-[#181717]" />, title: "GitHub", href: "https://github.com" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
];

export const TechSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo('.tech-content', 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    }, { scope: containerRef });

  return (
    <section ref={containerRef} id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto w-full relative z-10 overflow-hidden">
      <div className="tech-content flex flex-col items-center justify-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight text-center">
          My Tech Stack
        </h2>
        <p className="text-xl md:text-2xl text-accent text-center font-medium">
          Technologies I've been working with recently
        </p>
      </div>

      <div className="tech-content w-full flex flex-col gap-10">
        <LogoLoop
          logos={techLogos}
          speed={100} 
          direction="left"
          logoHeight={80}
          gap={100}
          pauseOnHover={true}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#E3D9B6"
          ariaLabel="Technology partners"
        />

      </div>
    </section>
  );
};
