"use client"
import ContactSidebar from '@/components/ContactSidebar'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="mb-12">
                <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
                    <h2 className="text-4xl font-bold text-slate-900">Contact</h2>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Get in touch</span>
                </div>
                <p className="text-lg text-slate-600 max-w-2xl">
                    Ready to architect your next digital experience? Whether it's a complex cloud migration or a minimalist design system, I'm here to build it with precision.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <ContactForm />
                <ContactSidebar />               
            </div>
        </section>
    )
}