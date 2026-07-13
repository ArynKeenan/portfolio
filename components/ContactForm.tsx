"use client"
import { useState } from 'react'

export default function ContactForm(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async () => {
        setStatus('sending')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })

            if (res.ok) {
                setStatus('sent')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return(
        <div className="border-2 border-slate-900 p-8 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-4 border-2 border-slate-900 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    className="px-10 py-4 bg-blue-500 text-white font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all uppercase tracking-wider disabled:opacity-50"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'sent' && (
                    <p className="text-green-600 font-medium">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
                )}
            </div>
        </div>
    )
}