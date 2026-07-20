"use client"
import { useState } from 'react'

type FormErrors = {
    name?: string
    email?: string
    message?: string
}

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required'
        } else if (message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validate()) return

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
                setErrors({})
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="border-2 border-slate-900 p-8 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            if (errors.name) setErrors({ ...errors, name: undefined })
                        }}
                        className={`w-full p-4 border-2 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.name ? 'border-red-500' : 'border-slate-900'
                        }`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{errors.name}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email) setErrors({ ...errors, email: undefined })
                        }}
                        className={`w-full p-4 border-2 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.email ? 'border-red-500' : 'border-slate-900'
                        }`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{errors.email}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                            if (errors.message) setErrors({ ...errors, message: undefined })
                        }}
                        className={`w-full p-4 border-2 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all ${
                            errors.message ? 'border-red-500' : 'border-slate-900'
                        }`}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{errors.message}</p>
                    )}
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    className="px-10 py-4 bg-blue-500 text-white font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-[-2px] transition-all uppercase tracking-wider disabled:opacity-50"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && (
                    <p className="text-green-600 font-bold uppercase tracking-widest text-xs">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600 font-bold uppercase tracking-widest text-xs">Something went wrong. Please try again.</p>
                )}
            </div>
        </div>
    )
}