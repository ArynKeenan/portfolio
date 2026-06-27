import ProjectsGrid from '@/components/ProjectsGrid'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Education from '@/components/Education'
import WorkHistory from '@/components/WorkHistory'
import ContactPage from '@/components/ContactPage'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Navbar />
      <main className="flex flex-1 w-full  flex-col items-center justify-between pt-8 pb-16 px-16 bg-white dark:bg-black sm:items-start">
          <Hero />
        <ProjectsGrid />
        <Education />
        <WorkHistory />
        <ContactPage />
      </main>
    <Footer />
    </div>
  );
}
