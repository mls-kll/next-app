import { MilestoneList } from "@/components/milestones-list/milestone-list";
import { getAboutData } from "@/utils/get-content";

export default async function AboutPage() {
  const aboutData = await getAboutData();
  return (
    <>
      {aboutData?.map((about) => (
        <MilestoneList
          key={about.title}
          listTitle={about.title}
          milestones={about.milestones}
        />
      ))}
    </>
  );
}
