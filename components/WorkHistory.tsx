import TimelineItem from './TimelineItem'

const workHistory = [
  {
    title: 'Founder',
    location: 'Eyretel Labs',
    yearStarted: new Date('2026-07'),
    description: 'Founded Eyretel Labs, a sole trader company operating two divisions. AJ Studio focuses on web design for local businesses across County Down, offering brochure websites and monthly retainer packages. Empire Gaming is the software division, currently building Empire Poker, a full recreation of a legacy casino poker machine rebuilt from the ground up in Java and LibGDX, targeting Raspberry Pi hardware.'
  },
  {
    title: 'Embedded Software Engineer',
    location: 'Laser Electronic Systems Ltd',
    yearStarted: new Date('2026-05'),
    description: 'Working as an Embedded Software Engineer at Laser Electronic Systems Ltd, a family-owned casino gaming machine business operating across Ireland. My work spans the full stack, from low-level hardware interfacing on Raspberry Pi via GPIO, to Spring Boot backends and Next.js dashboards. Key projects include Red Hot Monitor, a real-time IoT monitoring platform that reads pulse data from gaming machine PCBs and displays live stats on a web dashboard.',
  },
  {
    title: 'Technology Analyst',
    location: 'CitiBank',
    yearStarted: new Date('2025-06'),
    yearEnded: new Date('2026-05'),
    description: 'Completed a Technology Analyst placement at Citi, working across both frontend and backend teams. On the frontend I worked with React and TypeScript, and on the backend I used Java, Spring Boot, Kafka and Oracle DB. Gained experience working in a large scale enterprise environment with rigorous engineering standards and agile practices.',
  },
  {
    title: 'Hardware & Software Engineer',
    location: 'Laser Electronic Systems Ltd',
    yearStarted: new Date('2025-05'),
    yearEnded: new Date('2022-07'),
    description: 'My first role at Laser, taken on at age 16. Worked on gaming machine hardware and software, gaining hands-on experience with embedded systems from a very early age. This role sparked my passion for the intersection of hardware and software engineering and led directly to the AJ-CCTalk and AJ-PW monitoring projects built for a client across Ireland.',
  },
]

export default function WorkHistory() {
  return (
    <section id="work-history" className="max-w-7xl mx-auto px-6 pt-20">
      <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
          <h2 className="text-4xl font-bold text-slate-900">Work History</h2>
          <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Professional Experience</span>
      </div>
      {workHistory.map((education) => (
        <TimelineItem key={education.title} {...education} />
      ))}
    </section>
  )
}
