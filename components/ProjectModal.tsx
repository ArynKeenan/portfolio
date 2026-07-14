"use client"

type Outcome = {
    label: string
    value: string
}

type ModalData = {
    category: string
    challenge: string
    solution: string
    outcomes: Outcome[]
    stack: string[]
    metadata: {
        date: string
        role: string
        status: string
    }
}

type ProjectModalProps = {
    title: string
    liveUrl: string | null
    modal: ModalData
    onClose: () => void
}

export default function ProjectModal({ title, liveUrl, modal, onClose }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm">
            <section className="bg-white border-2 border-slate-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex flex-col relative">
                
                {/* Header */}
                <header className="sticky top-0 z-10 bg-white border-b-2 border-slate-900 px-8 py-4 flex justify-between items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{modal.category}</span>
                        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold"
                    >
                        ✕
                    </button>
                </header>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        
                        {/* Challenge */}
                        <section>
                            <h4 className="text-lg font-bold border-b-2 border-blue-600 inline-block mb-4 text-slate-900">The Challenge</h4>
                            <p className="text-slate-600 leading-relaxed">{modal.challenge}</p>
                        </section>

                        {/* Solution */}
                        <section>
                            <h4 className="text-lg font-bold border-b-2 border-blue-600 inline-block mb-4 text-slate-900">The Solution</h4>
                            <p className="text-slate-600 leading-relaxed">{modal.solution}</p>
                        </section>

                        {/* Outcomes */}
                        <section className="bg-slate-50 p-6 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">Key Outcomes</h4>
                            <div className="grid grid-cols-3 gap-4">
                                {modal.outcomes.map(({ label, value }) => (
                                    <div key={label} className="bg-white border-2 border-slate-900 p-4">
                                        <span className="text-2xl font-bold text-blue-600 block">{value}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-slate-50 border-2 border-slate-900 p-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col gap-4">
                            
                            {/* Metadata */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Project Metadata</span>
                                <div className="flex flex-col gap-2">
                                    {Object.entries(modal.metadata).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-2 border-b border-slate-200">
                                            <span className="font-semibold text-slate-900 capitalize">{key}</span>
                                            <span className={`text-sm ${key === 'status' ? 'text-blue-600 font-bold' : 'text-slate-600'}`}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Tech Stack</span>
                                <div className="flex flex-wrap gap-2">
                                    {modal.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-white border-2 border-slate-900 text-xs font-bold uppercase tracking-widest text-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Live URL button — only shown if project has one */}
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    className="w-full bg-blue-600 border-2 border-slate-900 text-white px-4 py-3 font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all text-center text-sm block"
                                >
                                    View Live Project
                                </a>
                            )}
                        </div>
                    </aside>
                </div>

                {/* Footer */}
                <footer className="bg-slate-50 px-8 py-4 border-t-2 border-slate-900 mt-auto">
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-widest text-sm"
                        >
                            Close
                        </button>
                    </div>
                </footer>
            </section>
        </div>
    )
}