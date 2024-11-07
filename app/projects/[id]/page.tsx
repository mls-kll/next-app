import { ImageContainer } from "@/components/image-container/image-container";
import { ProjectImage } from "@/types/types";
import getContent from "@/utils/get-content";
import { Asset } from "contentful-management/dist/typings/export-types";

type Params = {
  id: string;
};
export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const projectData = await getContent("projects", id);
  const projectItem = projectData?.[0]?.fields;
  const projectImages = (projectItem?.images as unknown as Asset[])?.map(
    (image) => ({
      src: image.fields.file.url,
      title: image.fields.title,
    })
  );

  return (
    <div>
      <h1>{projectItem?.title as string}</h1>
      <div>{projectItem?.description as string}</div>
      <ImageContainer
        images={(projectImages as unknown as ProjectImage[]) || []}
      />
    </div>
  );
}
