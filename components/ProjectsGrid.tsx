"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Empire Poker',
    description: 'A full rebuild of a legacy Z80-based poker gaming machine from scratch on Raspberry Pi using Java and LibGDX.',
    progress: 'IN PROGRESS',
    completionDate: new Date('2026-01-01'),
    technologiesUsed: ['Java', 'LibGDX', 'Raspberry Pi'],
    liveUrl: null,
    modal: {
        category: 'Embedded / Game Development',
        challenge: 'Laser Electronic Systems had a legacy Z80-based poker machine that was becoming impossible to maintain. The original assembly code was undocumented and the hardware was aging, so a full rebuild was needed to keep the machine in service.',
        solution: 'Built under Empire Gaming, a division of Eyretel Labs, I reverse-engineered the original machine using Ghidra and ImHex alongside original assembly listings to fully understand the game logic. I then rebuilt the entire game from scratch in Java using LibGDX, with a custom pixel-art font spritesheet system and tile-based renderer. The game runs natively on Raspberry Pi and replicates the original machine behaviour faithfully, including all game modes and payout logic.',
        outcomes: [
            { label: 'Division', value: 'Empire Gaming' },
            { label: 'Language', value: 'Java' },
            { label: 'Platform', value: 'Raspberry Pi' },
        ],
        stack: ['Java', 'LibGDX', 'Raspberry Pi', 'Ghidra', 'ImHex'],
        metadata: {
            date: 'January 2026',
            role: 'Sole Developer',
            status: 'In Progress',
        }
    }
},
  {
    title: 'Red Hot Monitor',
    description: 'After the "AJ" project was scrapped before it even went into production, Laser decided to bring it back. Rebuilt from the ground up using Java and Raspberry Pi.',
    progress: 'IN PROGRESS',
    completionDate: new Date('2026-05-01'),
    technologiesUsed: ['Java', 'Raspberry Pi', 'Spring Boot', 'PostgreSQL'],
    liveUrl: 'https://redhotmonitor.co.uk',
    modal: {
      category: 'IoT / Embedded Systems',
      challenge: 'Laser Electronic Systems needed a way to monitor their casino gaming machines in real time. The existing setup had no visibility into machine performance, payouts, or faults — everything was manual and reactive.',
      solution: 'I designed and built Red Hot Monitor end-to-end. A Raspberry Pi Zero 2 W sits inside each machine, reading electrical pulses from the PCB via GPIO. The data is sent to a Spring Boot backend hosted on Railway, which stores it in PostgreSQL. A Next.js dashboard at redhotmonitor.co.uk displays live machine stats including Money In, Hopper Payout, Countdown, and Balance.',
      outcomes: [
        { label: 'Machines Monitored', value: 'Live' },
        { label: 'Data Points', value: '4+' },
        { label: 'Latency', value: 'Real-time' },
      ],
      stack: ['Java', 'Raspberry Pi', 'Pi4J', 'Spring Boot', 'PostgreSQL', 'Next.js', 'TypeScript', 'Railway', 'Vercel'],
      metadata: {
        date: 'May 2026',
        role: 'Sole Developer',
        status: 'In Progress',
      }
    }
  },
  {
    title: 'Skill-Up',
    description: 'A Chrome extension that helps 2nd and 4th year students find placements and grad roles that match their tech stack.',
    progress: 'FINISHED',
    completionDate: new Date('2026-04-01'),
    technologiesUsed: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://chromewebstore.google.com/detail/skill-up',
    modal: {
      category: 'Browser Extension',
      challenge: 'Students at Ulster University struggled to quickly identify which job listings matched their current skill set, spending hours manually reading through requirements on job boards.',
      solution: 'I built Skill-Up as a Chrome extension that sits on top of job listing pages. The user inputs their tech skills once, and the extension scans each job description, calculating and displaying a match percentage directly on the page — no page reload needed.',
      outcomes: [
        { label: 'Platform', value: 'Chrome' },
        { label: 'Target Users', value: 'Students' },
        { label: 'Status', value: 'Published' },
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Chrome Extensions API'],
      metadata: {
        date: 'April 2026',
        role: 'Sole Developer',
        status: 'Published',
      }
    }
  },
  {
    title: 'AJ Studio',
    description: 'A local web design business targeting County Down businesses, offering brochure sites and monthly retainer packages.',
    progress: 'IN PROGRESS',
    completionDate: new Date('2026-03-01'),
    technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: null,
    modal: {
      category: 'Web Design / Business',
      challenge: 'Local businesses in County Down had little to no web presence, with no affordable local option for professional web design.',
      solution: 'I launched AJ Studio as a side business offering brochure websites priced at £200–350 with a £20–50/month retainer model. I designed a vintage stamp-style brand identity using Affinity Designer and have been targeting local businesses as first clients.',
      outcomes: [
        { label: 'Pricing From', value: '£200' },
        { label: 'Retainer', value: '£20–50/mo' },
        { label: 'Target', value: 'County Down' },
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'Affinity Designer'],
      metadata: {
        date: 'March 2026',
        role: 'Founder & Developer',
        status: 'Active',
      }
    }
  },
  {
    title: 'AJ-CCTalk & AJ-PW',
    description: 'The original machine monitoring system built at 16 for a client operating bookies across Ireland. Two versions — CCTalk via hex readout and Pulse via mechanical meters — both sending data via email through a Raspberry Pi.',
    progress: 'FINISHED',
    completionDate: new Date('2022-07-01'),
    technologiesUsed: ['Python', 'Raspberry Pi', 'CCTalk', 'GPIO'],
    liveUrl: null,
    modal: {
        category: 'IoT / Embedded Systems',
        challenge: 'A client operating a large number of bookmakers across Northern and Southern Ireland needed a way to remotely monitor the in/out data of their gaming machines without any existing infrastructure. Built at age 16, this was my first real client project.',
        solution: 'I built two versions of the system in Python on Raspberry Pi. AJ-CCTalk ran on a Pi 3B+ and connected to machines running CCTalk-compatible PCBs. When the attendant hit the readout button, the board sent hex data which my program intercepted and decoded. AJ-PW ran on a Pi Zero W and worked on any machine by reading pulses from the mechanical meters via GPIO, storing them locally and transmitting on startup or every 24 hours if the machine stayed on. Both versions sent data to the client via email. I also engineered a security system — a hidden image on the SD card containing hex-encoded Pi serial numbers. On boot, the program compared the stored serial against the actual hardware. If an SD card was cloned and moved to a different Pi, the mismatch triggered a security alert email to me and wiped the code from the unauthorised device.',
        outcomes: [
            { label: 'Client', value: 'Bookies' },
            { label: 'Age Built', value: '16' },
            { label: 'Versions', value: '2' },
        ],
        stack: ['Python', 'Raspberry Pi 3B+', 'Raspberry Pi Zero W', 'CCTalk', 'GPIO', 'SMTP Email'],
        metadata: {
            date: 'July 2022',
            role: 'Sole Developer',
            status: 'Completed',
        }
    }
}
]

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
      <section id="projects" className="py-20">
          <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-4">
              <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
              <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Selected Work</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                  <div key={project.title} onClick={() => setSelectedProject(project)} className="cursor-pointer">
                      <ProjectCard {...project} />
                  </div>
              ))}
          </div>

          {selectedProject && (
              <ProjectModal
                  title={selectedProject.title}
                  liveUrl={selectedProject.liveUrl}
                  modal={selectedProject.modal}
                  onClose={() => setSelectedProject(null)}
              />
          )}
      </section>
  )
}