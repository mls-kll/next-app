import { projects } from "@/mocks/projects";

type Params = {
  id: string;
};
export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const projectItem = projects.find((project) => project.slug === id);

  return (
    <div>
      <h1>{projectItem?.title}</h1>
      <div>{projectItem?.description}</div>
      <div>
        <div>image container</div>
      </div>
    </div>
  );
}
