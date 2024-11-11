import { AboutFields } from "@/types/about";
import styles from "./milestone-list.module.scss";

type Props = {
  listTitle: string;
  milestones: AboutFields;
};
export const MilestoneList = ({ milestones }: Props) => {
  return (
    <div>
      <h2 className={styles.listTitle}>{milestones?.title}</h2>
      <ul className={styles.list}>
        {milestones?.mileStone?.map((item) => (
          <li key={item.fields.description}>
            <span className={styles.date}>{item.fields.date}</span>
            <span className={styles.text}>{item.fields.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
