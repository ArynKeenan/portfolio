export default function Skills() {
    const languages = ['Java', 'TypeScript', 'Python', 'JavaScript']

    const environments = ['Raspberry Pi', 'Linux', 'AWS', 'Vercel', 'Railway']

    const proficiencies = [
        'Embedded Systems & GPIO',
        'Full Stack Web Development',
        'IoT & Hardware Interfacing',
        'REST API Design',
        'Database Architecture',
    ]

    const tooling = [
        { category: 'Frameworks', tools: 'Spring Boot, Next.js, React, LibGDX' },
        { category: 'Databases', tools: 'PostgreSQL, NoSQL' },
        { category: 'Tools & Platforms', tools: 'Git, GitHub, Docker, Ghidra, ImHex' },
    ]

    return (
        <section id="skills" className="py-20">
            <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
                <h2 className="text-4xl font-bold text-slate-900">Skills & Expertise</h2>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">What I work with</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Programming Languages */}
                <div className="bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Programming Languages</h3>
                    <div className="flex flex-wrap gap-3">
                        {languages.map((lang) => (
                            <span
                                key={lang}
                                className="px-3 py-1 border-2 border-slate-900 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-700"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Operating Systems & Environments */}
                <div className="bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Environments & Platforms</h3>
                    <div className="flex flex-wrap gap-3">
                        {environments.map((env) => (
                            <span
                                key={env}
                                className="px-3 py-1 border-2 border-slate-900 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-700"
                            >
                                {env}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Technical Proficiencies */}
                <div className="bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Proficiencies</h3>
                    <ul className="space-y-3">
                        {proficiencies.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-slate-600">
                                <span className="w-2 h-2 bg-blue-600 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Developer Tooling */}
                <div className="bg-white border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Developer Tooling</h3>
                    <div className="space-y-4">
                        {tooling.map(({ category, tools }) => (
                            <div key={category}>
                                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{category}</p>
                                <p className="text-slate-600">{tools}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}