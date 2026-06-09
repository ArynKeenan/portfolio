import TimelineItem from './TimelineItem'

const workHistory = [
  {
    title: 'Embedded Software Engineer',
    location: 'Laser Electronic Systems Ltd',
    yearStarted: new Date('2026-05'),
    description: 'While here I designed a system called Red Hot Monitor. This software was designed to work in the companys poker machines. It read the pulses from the PCB and recorded them on a Raspberry Pi.',
  },
  {
    title: 'Technology Analyst',
    location: 'Citi',
    yearStarted: new Date('2025-06'),
    yearEnded: new Date('2026-05'),
    description: 'Worked in the frontend and backend team. While at the frontend team, we used React and TypeScript. In the backend I used Java, Spring Boot, Kafka and Oracle Db',
  },
  {
    title: 'Hardware & Software Engineer',
    location: 'Laser Electronic Systems Ltd',
    yearStarted: new Date('2015-05'),
    yearEnded: new Date('2022-07'),
    description: 'Worked on Poker Machines',
  },
]

export default function WorkHistory() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">
      <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
          <h2 className="text-4xl font-bold text-slate-900">Work History</h2>
          <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Add some text here</span>
      </div>
      {workHistory.map((education) => (
        <TimelineItem key={education.title} {...education} />
      ))}
    </section>
  )
}
