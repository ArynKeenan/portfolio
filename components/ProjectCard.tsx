// components/ProjectCard.tsx

type ProjectCardProps = {
    title: string
    description: string
    progress: string
    completionDate: Date
    technologiesUsed: string[]
  }
  
  export default function ProjectCard({ title, description, progress, completionDate, technologiesUsed }: ProjectCardProps) {
    return (
      <div style={{ border: '1px solid rgb(0, 0, 0)', padding: '24px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
            <b>Completion Date:</b>{" "}
            {completionDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
            })}
        </div>
        <div><b>Progress:</b> {progress}</div>
        <div><b>Technologies Used:</b> {technologiesUsed.join(", ")}</div>
      </div>
    )
  }