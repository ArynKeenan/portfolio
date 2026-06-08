export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-slate-900 bg-slate-50 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                <span className="text-2xl font-bold tracking-tight text-slate-900 text-center md:text-left">
                    Aryn Keenan
                </span>
                <p className="text-center text-sm text-slate-500 font-medium">
                    © 2026 Aryn Keenan. Built with precision.
                </p>
                <div className="flex justify-center md:justify-end gap-8 items-center text-sm font-bold uppercase tracking-wider">
                    <a href="https://github.com/ArynKeenan" target="_blank" className="text-slate-600 hover:text-blue-600 underline underline-offset-4 decoration-2 transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/aryn-keenan-b1b5b6252/" target="_blank" className="text-slate-600 hover:text-blue-600 underline underline-offset-4 decoration-2 transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    )
  }