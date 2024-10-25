import Image from "next/image";

export default function ProjectsPage() {
  type Project = {
    title: string;
    description: string;
    coverImage: string;
    images: string[];
  }
  
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "This is project 1",
      coverImage: "/../../public/placeholder-cover.jpg",
      images: [
        "/../../public/placeholder.svg",
        "/../../public/placeholder.svg",
        "/../../public/placeholder.svg",
        "/../../public/placeholder.svg",
        "/../../public/placeholder.svg",
      ],
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.title}>
            <Image
              src={project.coverImage}
              alt={project.title}
              width={200}
              height={150}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
