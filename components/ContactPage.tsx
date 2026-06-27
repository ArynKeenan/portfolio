"use client"
import ContactSidebar from '@/components/ContactSidebar'
import ContactForm from '@/components/ContactForm'


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
                
                <ContactForm />
                <ContactSidebar />               
            </div>
        </section>
    )
}