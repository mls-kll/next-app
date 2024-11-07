import { MilestoneList } from "@/components/milestones-list/milestone-list";
import getContent from "@/utils/get-content";

export default async function AboutPage() {
  const aboutData = await getContent("about");

  return (
    <>
      {aboutData?.map((about) => (
        <MilestoneList
          key={about.fields.title as string}
          listTitle={about.fields.title as unknown as string}
          milestones={about.fields}
        />
      ))}
    </>
  );
}
