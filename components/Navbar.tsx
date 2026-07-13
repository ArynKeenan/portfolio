"use client"
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
          const sections = ['hero', 'about', 'projects', 'education', 'work-history', 'contact']
          
          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()  
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(section)
                break
              }
            }
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Education', id: 'education' },
        { label: 'Work History', id: 'work-history' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-900 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tight text-slate-900">Aryn Keenan</a>
                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                    {navLinks.map(({ label, id }) => (
                        <a key={id}
                            href={`#${id}`}
                            className={`transition-colors pb-1 ${
                                activeSection === id
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-slate-600 hover:text-blue-600'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <a href='#contact' className="px-5 py-2 border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                    Get in Touch
                </a>
            </div>
        </nav>
    )
}