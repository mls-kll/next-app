import { ProjectCard } from "@/components/project-card/project-card";
import { Project } from "@/types/types";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Project 1",
      id: "1",
      description: "This is project 1",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 2",
      id: "2",
      description: "This is project 2",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 3",
      id: "3",
      description: "This is project 3",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 4",
      id: "4",
      description: "This is project 4",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
