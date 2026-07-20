import TimelineItem from './TimelineItem'

const educationHistory = [
  {
    title: 'BSc (Hons) Computing Science',
    location: 'University of Ulster',
    yearStarted: new Date('2023-09'),
    description: 'Currently in my final year studying Computing Science at Ulster University. Modules have covered a broad range of topics including Networks, Software Engineering, Database Systems, Programming with Java, Web Development, and Algorithms & Data Structures. Alongside my studies I have been working full time as an Embedded Software Engineer at Laser Electronic Systems Ltd, applying what I learn directly to real-world projects.',
  },
  {
    title: 'A-Levels',
    location: 'St Louis Grammar School',
    yearStarted: new Date('2021-09'),
    yearEnded: new Date('2023-06'),
    description: 'Studied Business Studies (B) and Technology & Design (A), alongside a  Distinction* in BTEC Level 3 Extended Certificate in Information Technology. The BTEC in particular deepened my interest in software and systems, setting the foundation for my Computing Science degree at Ulster University.',
  },
  {
    title: 'GCSEs',
    location: 'St Louis Grammar School',
    yearStarted: new Date('2019-09'),
    yearEnded: new Date('2021-06'),
    description: 'Achieved grades ranging from C* to A* across a range of subjects including English (C*) and Maths (A).',
  },
]

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 pt-20">
      <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
          <h2 className="text-4xl font-bold text-slate-900">Education History</h2>
          <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">A Foundation Built on Curiosity</span>
      </div>
      {educationHistory.map((education) => (
        <TimelineItem key={education.title} {...education} />
      ))}
    </section>
  )
}
