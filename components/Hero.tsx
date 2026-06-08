export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="inline-block px-3 py-1 border border-blue-600 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 bg-blue-50">
                Embedded Software Engineer
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Aryn Keenan
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-lg">
                Specializing in building resilient, scalable backend infrastructures and high-speed web interfaces. I turn complex technical bottlenecks into streamlined competitive advantages.
                </p>
                <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all">
                    GET IN CONTACT
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all">
                    VIEW MY CV
                </button>
                </div>
            </div>
            <div className="relative">
                <div className="border-2 border-slate-900 p-2 bg-white shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                <img src="placeholder-ui.png" alt="Photo of Me" className="w-full grayscale contrast-125 opacity-80" />
                </div>
            </div>
        </section>
    )
}