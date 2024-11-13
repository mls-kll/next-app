import { AboutData } from "@/types/about";
import { Project } from "@/types/project";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export default async function getContent(contentType: string, url?: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    ...(url && { "fields.url[in]": url }),
  });
  return entries.items || [];
}

export const getAboutData = async () => {
  const data = await getContent("about");

  return (data as AboutData[]).map((about) => ({
    title: about.fields.title,
    milestones: about.fields.mileStone
      ? about.fields.mileStone?.map((milestone) => ({
          date: milestone.fields.date,
          description: milestone.fields.description,
        }))
      : [],
  }));
};

export const getProjectCardData = async () => {
  const data = await getContent("projects");
  return (data as Project[]).map((project) => ({
    title: project.fields.title,
    description: project.fields.description,
    date: project.fields.date,
    url: project.fields.url,
    coverImage: project.fields.cover.fields.file.url,
  }));
};

// get projectById
