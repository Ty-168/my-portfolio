import { Hero } from './components/Hero'
import { TechSection } from './components/TechSection'
import Particles from './components/Particles'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#E3D9B6] font-sans text-[#2D3342] overflow-x-hidden relative">
      {/* Particles Background - Applied globally */}
      <div className="absolute inset-0 z-0 pointer-events-none fixed h-full w-full">
        <Particles
          particleColors={['#D97706', '#1F2937']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> 
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10">
        <section id="home"><Hero /></section>
        <section id="about"><AboutSection /></section>
        <section id="projects"><ProjectSection /></section>
        <section id="tech-stack"><TechSection /></section>
        <section id="contact"><ContactSection /></section>
      </div>
      <Footer />
    </div>
  )
}


export default App
