import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
                <h2 className="text-4xl font-bold text-slate-900">About</h2>
                <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Who I am</span>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <Image
                        src="/HeroImage.png"
                        alt="Aryn Keenan"
                        width={400}
                        height={400}
                        className="border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] object-cover w-full"
                    />
                </div>
                <div className="flex-1">
                <p className="text-slate-600 leading-relaxed mb-4">
                    I'm Aryn, an Embedded Software Engineer based in County Down, Northern Ireland. 
                    Currently in my final year of a BSc (Hons) Computing Science degree at Ulster 
                    University, I balance full-time development at Laser Electronic Systems Ltd with 
                    building my own projects from the ground up.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                At Laser I work across the full stack — from low-level hardware interfacing on 
                Raspberry Pi to Spring Boot backends and React frontends. I've built systems that 
                bridge the physical and digital world, including Red Hot Monitor, an IoT platform 
                that tracks real-time data from casino machine PCBs through to a live web dashboard.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    I'm driven by the craft of building things that actually work — clean architecture, 
                    thoughtful design, and software that solves real problems. Outside of code you'll 
                    find me hiking the Mourne Mountains or working on my next side project.
                    </p>
                </div>
            </div>
        </section>
    )
}