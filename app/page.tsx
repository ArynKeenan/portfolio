import ProjectsGrid from '@/components/ProjectsGrid'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Education from '@/components/Education'
import WorkHistory from '@/components/WorkHistory'
import ContactPage from '@/components/ContactPage'
import About from '@/components/About'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
    <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <ProjectsGrid />
        <Skills />
        <Education />
        <WorkHistory />
        <ContactPage />
      </main>
    <Footer />
    </div>
  );
}
