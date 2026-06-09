import TimelineItem from './TimelineItem'

const educationHistory = [
  {
    title: 'BSc (Hons) Computing Science',
    location: 'University of Ulster',
    yearStarted: new Date('2023-09'),
    description: 'With my time in Uni a did modules such as Network, Programming with Java, something else, etc',
  },
  {
    title: 'A-Levels',
    location: 'St Louis Grammer School',
    yearStarted: new Date('2021-09'),
    yearEnded: new Date('2023-06'),
    description: 'Business Studies - B, Technology & Design - A',
  },
  {
    title: 'GCSEs',
    location: 'St Louis Grammer School',
    yearStarted: new Date('2019-09'),
    yearEnded: new Date('2021-06'),
    description: 'GCSE grades range from C* to A*. English - C*, Maths - A',
  },
]

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
          <h2 className="text-4xl font-bold text-slate-900">Education History</h2>
          <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Add some text here</span>
      </div>
      {educationHistory.map((education) => (
        <TimelineItem key={education.title} {...education} />
      ))}
    </section>
  )
}
