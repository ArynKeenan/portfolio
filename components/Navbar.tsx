"use client"
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('projects')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'skills', 'education', 'experience', 'contact']
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
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Education', id: 'education' },
        { label: 'Work History', id: 'experience' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-900">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tight text-slate-900">Aryn Keenan</a>

                {/* Desktop Links */}
                <div className="hidden xl:flex gap-8 items-center text-sm font-medium">
                    {navLinks.map(({ label, id }) => (
                        <a
                            key={id}
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

                <div className="flex items-center gap-4">
                    <button className="hidden xl:block px-5 py-2 border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                        Get in Touch
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="xl:hidden p-2 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        {menuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="xl:hidden border-t-2 border-slate-900 bg-white px-6 py-4 flex flex-col gap-4">
                    {navLinks.map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            className={`text-sm font-bold uppercase tracking-widest py-2 border-b border-slate-100 transition-colors ${
                                activeSection === id ? 'text-blue-600' : 'text-slate-600'
                            }`}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 px-5 py-3 bg-slate-900 text-white font-bold text-center uppercase tracking-widest"
                    >
                        Get in Touch
                    </a>
                </div>
            )}
        </nav>
    )
}