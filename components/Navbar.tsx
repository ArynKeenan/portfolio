export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-900 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <span className="text-2xl font-bold tracking-tight text-slate-900">Aryn Keenan</span>
                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                <a href="#projects" className="text-blue-600 border-b-2 border-blue-600 pb-1">Projects</a>
                <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
                </div>
                <button className="px-5 py-2 border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Get in Touch
                </button>
            </div>
        </nav>
    )
}