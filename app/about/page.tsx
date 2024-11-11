import { MilestoneList } from "@/components/milestones-list/milestone-list";
import { AboutData } from "@/types/about";
import getContent from "@/utils/get-content";

export default async function AboutPage() {
  const aboutData = await getContent("about");
  return (
    <>
      {(aboutData as AboutData[])?.map((about: AboutData) => (
        <MilestoneList
          key={about.fields.title}
          listTitle={about.fields.title}
          milestones={about.fields}
        />
      ))}
    </>
  );
}
