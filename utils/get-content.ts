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
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType}.`);
}
