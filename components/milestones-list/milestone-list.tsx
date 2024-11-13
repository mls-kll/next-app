import { MilestoneFields } from "@/types/about";
import styles from "./milestone-list.module.scss";

type Props = {
  listTitle: string;
  milestones: MilestoneFields[];
};
export const MilestoneList = ({ milestones, listTitle }: Props) => {
  return (
    <div>
      <h2 className={styles.listTitle}>{listTitle}</h2>
      <ul className={styles.list}>
        {milestones?.map((item) => (
          <li key={item.description}>
            <span className={styles.date}>{item.date}</span>
            <span className={styles.text}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
