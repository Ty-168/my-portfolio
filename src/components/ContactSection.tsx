import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo('.contact-trigger', 
            { 
                x: -50, 
                opacity: 0 
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play reverse play reverse',
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="contact" className="py-20 text-center">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]">
                <h2 className="contact-trigger text-4xl md:text-5xl font-bold text-secondary mb-4 tracking-tight">
                    For any questions please mail to:
                </h2>
                <a 
                    href="mailto:kitylim123@gmail.com" 
                    className="contact-trigger text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent/80 to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                    kitylim123@gmail.com
                </a>
            </div>
        </section>
    )
}