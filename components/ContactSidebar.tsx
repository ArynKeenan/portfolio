export default function ContactSidebar() {
    return (
        <div className="space-y-4">
            <div className="relative">
                <div className="border-2 border-slate-900 p-2 bg-white shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
                    <img src="/HeroImage.png" alt="Photo of Me" className="w-full grayscale contrast-125 opacity-80" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-slate-900 p-6 bg-slate-50 flex items-center gap-4 hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                <div className="text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" /></svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-blue-600">Connect</span>
                    <a href="https://www.linkedin.com/in/aryn-keenan-b1b5b6252/" className="text-sm font-bold text-slate-900">LinkedIn</a>
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
    )
}