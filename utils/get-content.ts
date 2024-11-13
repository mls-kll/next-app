import { AboutData } from "@/types/about";
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
  return (entries.items as AboutData[]) || [];
}

export const getAboutData = async () => {
  const data = await getContent("about");

  return data.map((about) => ({
    title: about.fields.title,
    milestones: about.fields.mileStone
      ? about.fields.mileStone?.map((milestone) => ({
          date: milestone.fields.date,
          description: milestone.fields.description,
        }))
      : [],
  }));
};

// get projects

// get projectById
