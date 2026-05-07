import ProjectCard from './ProjectCard'

const projects = [
  { title: 'AJ-CCTalk & AJ-P', description: 'While I was working at Laser Electronics I developed a software which was nicknamed the "AJ". This software was designed to work inside their Poker machines so that it can track data from the machine and email the owners the data when needed.', progress: 'Finished', completionDate: new Date("2022-08"), technologiesUsed: ["Python", "Raspberry Pi", "CCTalk"] },
  { title: 'Skill-Up', description: 'A chrome extension that I built for 2nd and 4th year students find placements/grad roles that match there ...', progress: 'Finished', completionDate: new Date("2026-04"), technologiesUsed: ["HTML", "CSS", "JavaScript"] },
  { title: 'The Story Of Arthfael', description: 'This was a 2D Java Game that I built.', progress: 'Stopped', completionDate: new Date("2022-10"), technologiesUsed: ["Java"] },
  { title: 'Red Hot Hub', description: 'After the "AJ" project was scrapped 5 years, Lasers decided we should reuse it. But the only thing that we kept was the design. It was rebuilt from the ground up using Java. Rather than sending an email with the informatin, we store the info to a DB, which then uses an API to send the data to a website where the user can see the stats on all the machines.', progress: 'In Progress', completionDate: new Date("2026-05"), technologiesUsed: ["Java", "Raspberry Pi", "REST API"] },
]

export default function ProjectsGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}