"use client"


export default function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
            <div className="mb-12">
                <h2 className="text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                Ready to architect your next digital experience? Whether it's a complex cloud migration or a minimalist design system, I'm here to build it with precision.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="border-2 border-slate-900 p-8 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                <div className="space-y-6">
                    <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input type="text" placeholder="Enter your full name" className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/>
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" placeholder="example@domain.com" className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/>
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea rows={5} placeholder="Tell me about your project or inquiry..." className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"></textarea>
                    </div>
                    <button onClick={() => {}} className="w-full md:w-auto px-10 py-4 bg-blue-500 text-white font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all uppercase tracking-wider">
                    Send Message
                    </button>
                </div>
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <div className="border-2 border-slate-900 p-2 bg-white shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                            <img src="placeholder-ui.png" alt="Photo of Me" className="w-full grayscale contrast-125 opacity-80" />
                        </div>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 border-slate-900 p-6 bg-slate-50 flex items-center gap-4 hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <div className="text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-blue-600">Connect</span>
                        <span className="text-sm font-bold text-slate-900">LinkedIn</span>
                    </div>
                    </div>
                </div>
                <div className="bg-slate-900 text-white p-6 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(59,130,246,0.3)] flex items-center gap-4">
                    <div className="p-2 bg-blue-500 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Expected response time: Within 48 hours.</span>
                </div>
                </div>
            </div>
        </section>
    )
}