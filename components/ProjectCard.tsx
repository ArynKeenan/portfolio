type ProjectCardProps = {
    title: string
    description: string
    progress: string
    completionDate: Date
    technologiesUsed: string[]
  }
  
  export default function ProjectCard({ title, description, progress, completionDate, technologiesUsed }: ProjectCardProps) {
    return (
      <div className="border-2 border-slate-900 p-6 bg-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:translate-y-[-2px]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 px-2 py-1">
                {progress}
              </span>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 mb-6 line-clamp-3">
              {description}
            </p>
            <div><b>Technologies Used:</b> {technologiesUsed.join(", ")}</div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 px-2 py-1">
                {completionDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                })}
              </span>
          </div>
    )
  }