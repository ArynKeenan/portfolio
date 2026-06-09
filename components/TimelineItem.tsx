type TimelineItemProps = {
    title: string
    location: string
    yearStarted: Date
    yearEnded?: Date | null
    description: string
  }

export default function TimelineItem({ title, location, yearStarted, yearEnded, description }: TimelineItemProps){
    const endLabel = yearEnded ? yearEnded.toLocaleDateString("en-US", { month: "long", year: "numeric" }): "PRESENT"
    
    const isCurrent = !yearEnded

    return (
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
            <div className="relative pl-8 border-l-2 border-slate-200 pb-5">
                <div className={`absolute -left-[7px] top-0 w-3 h-3 border border-slate-900 ${isCurrent ? "bg-blue-600" : "bg-slate-200"}`}/>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isCurrent ? "text-blue-600" : "text-slate-400"}`}>
                    {yearStarted.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                    })} — {endLabel}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{title}</h3>
                <p className="text-sm italic text-slate-500">{location}</p>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl">{description}</p>
            </div>
            </div>
        </div>
    )
}