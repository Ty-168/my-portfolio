import UserImage2 from '@/assets/profile.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe } from 'lucide-react';
import { SiFacebook } from 'react-icons/si';
import ITC from '@/assets/itc.jpg'
import BT from '@/assets/baktouk.jpg'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MyCV from '@/assets/Lim-kity-CV.pdf'


gsap.registerPlugin(ScrollTrigger);

interface EducationCardProps {
    school: string;
    description: string;
    period: string;
    socialLinkFB: string;
    socialLinkWeb?: string;
    imageSrc?: string;
}

function EducationCard({ school, description, period, socialLinkFB, socialLinkWeb, imageSrc = "/api/placeholder/400/320" }: EducationCardProps) {
    return (
        <div className="bg-accent rounded-2xl overflow-hidden p-6 md:p-8 text-white shadow-lg max-w-2xl transform transition hover:-translate-y-1 hover:shadow-xl duration-300">
            <div className="mb-4 h-48 w-full bg-white/20 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    {school}
                </div>
                <img 
                    src={imageSrc} 
                    alt={school} 
                    className="w-full h-full object-cover border-3 border-white rounded-xl opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-2xl font-bold mb-2">{school}</h3>
            <p className="text-white/90 mb-6">
                {description}
            </p>
            <div className="flex items-center justify-between text-sm font-medium text-white/80">
                <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    {period}
                </span>

                <div className="flex flex-row items-center gap-3">
                    <a href={socialLinkFB} target="_blank" rel="noopener noreferrer">
                        <SiFacebook className="w-5 h-5 text-white/80 hover:text-white transition-colors hover:scale-110 duration-500" />
                    </a>
                    <a href={socialLinkWeb} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-5 h-5 text-white/80 hover:text-white transition-colors hover:scale-110 duration-500" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function AboutSection() {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play reverse play reverse',
            }
        });

        tl.from('.about-tab-trigger', {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'all' // Clear properties after animation to avoid conflicts
        })
        .from('.about-content-area', {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all'
        }, '-=0.6');

    }, { scope: containerRef });

    return (
        <div ref={containerRef} id='about' className="w-full min-h-screen p-8 md:p-16 flex items-center justify-center">
            <Tabs defaultValue="me" orientation="vertical" className="w-full max-w-6xl flex flex-col md:flex-row gap-28">
                <TabsList className="flex flex-col h-auto bg-transparent gap-4 w-full md:w-64 shrink-0">
                    <TabsTrigger 
                        value="me" 
                        className="about-tab-trigger w-full justify-start text-lg md:text-2xl font-bold px-6 py-4 rounded-xl border-2 border-accent bg-[#E3D9B6] text-[#D97706]/70 data-[state=active]:bg-accent data-[state=active]:text-background transition-all shadow-sm hover:text-[#D97706]"
                    >
                        About Me
                    </TabsTrigger>
                    <TabsTrigger 
                        value="education" 
                        className="about-tab-trigger w-full justify-start text-lg md:text-2xl font-bold px-6 py-4 rounded-xl border-2 border-accent bg-[#E3D9B6] text-[#D97706]/70 data-[state=active]:bg-accent data-[state=active]:text-background transition-all shadow-sm hover:text-[#D97706]"
                    >
                        About Education 
                    </TabsTrigger>
                    <TabsTrigger 
                        value="volunteer" 
                        className="about-tab-trigger w-full justify-start text-lg md:text-2xl font-bold px-6 py-4 rounded-xl border-2 border-accent bg-[#E3D9B6] text-[#D97706]/70 data-[state=active]:bg-accent data-[state=active]:text-background transition-all shadow-sm hover:text-[#D97706]"
                    >
                        About Volunteer
                    </TabsTrigger>
                    <TabsTrigger 
                        value="cv" 
                        className="about-tab-trigger w-full justify-start text-lg md:text-2xl font-bold px-6 py-4 rounded-xl border-2 border-accent bg-[#E3D9B6] text-[#D97706]/70 data-[state=active]:bg-accent data-[state=active]:text-background transition-all shadow-sm hover:text-[#D97706]"
                    >
                        Download CV
                    </TabsTrigger>
                </TabsList>

                <div className="about-content-area flex-1 min-h-[400px]">
                    <TabsContent value="me" className="mt-0 h-full animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-secondary">About Me</h2>
                                <p className="text-lg text-secondary/80 leading-relaxed max-w-xl">
                                    My name is Kity Lim, a student from Cambodia. Currently, I am pursuing a Computer Science 
                                    major at the Institute of Technology of Cambodia.
                                </p>
                            </div>
                            <div className="relative w-52 h-52 md:w-60 md:h-60 shrink-0 rounded-full overflow-hidden border-4 border-[#D97706]/20 bg-[#D97706]/10 animate-float">
                                <img src={UserImage2} alt="Kity Lim" className="w-full h-full object-top object-cover rounded-full" />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="education" className="mt-0 h-full animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="space-y-8 max-w-5xl overflow-hidden relative">
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary">About Education</h2>
                            
                            <div className="relative group">
                                <div 
                                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory w-full" 
                                    style={{ 
                                        scrollbarWidth: 'none', 
                                        msOverflowStyle: 'none',
                                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 95%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 95%, transparent)'
                                    }}
                                >
                                    {/* Spacer for left fade */}
                                    <div className="min-w-[1px] md:min-w-[40px] snap-center shrink-0"></div>

                                        <div className="min-w-[350px] md:min-w-[600px] snap-center">
                                            <EducationCard 
                                                school="Institute of Technology of Cambodia" 
                                                description="Cambodia's top public university for engineering and technology. Focused on software engineering and full-stack development." 
                                                period="2023 - Now"
                                                imageSrc={ITC}
                                                socialLinkFB="https://www.facebook.com/itckh"
                                                socialLinkWeb='https://itc.edu.kh/about-institute-of-technology-of-cambodia-en/'
                                            />
                                        </div>
                                    
                                        <div className="min-w-[350px] md:min-w-[600px] snap-center">
                                            <EducationCard 
                                                school="Bak Touk High School" 
                                                description="Completed high school diploma with a focus on science and mathematics. Participated in various science fairs and coding clubs." 
                                                period="2016 - 2022"
                                                imageSrc={BT}
                                                socialLinkFB="https://www.facebook.com/baktouk.seip"
                                            />
                                        </div>
                                    
                                    {/* Spacer for right fade */}
                                    <div className="min-w-[1px] md:min-w-[40px] snap-center shrink-0"></div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="volunteer" className="mt-0 h-full animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary">About Volunteer</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">SangKran Techno</h3>
                                    <ul className="list-disc list-inside space-y-2 text-secondary/80 text-lg ml-2">
                                        <li>Position: Member - Entertainment and Stage Team</li>
                                        <li>Position: Assistance - Performance Team</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="cv" className="mt-0 h-full animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary">Download CV</h2>
                            <p className="text-lg text-secondary/80 leading-relaxed max-w-xl">
                                Interested in my work? Download my CV to learn more about my experience and skills.
                            </p>
                            <a 
                                href={MyCV} 
                                download="Kity_Lim_CV.pdf"
                                className="inline-flex px-8 py-4 bg-accent text-white text-lg font-bold rounded-xl hover:bg-accent/75 transition-colors shadow-lg items-center gap-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                                Download CV
                            </a>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}