export default function ContactForm(){
    return(
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
    )
}