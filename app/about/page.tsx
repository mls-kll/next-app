import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <div>
      <h2 className={styles.listTitle}>Group Exhibitions</h2>
      <ul className={styles.list}>
        <li>
          <span className={styles.date}>2024</span>
          <span className={styles.text}>
            Photobook Workshop Exhibition, Budapest, Lehetőségek Tere
          </span>
        </li>
        <li>
          <span className={styles.date}>2024</span>
          <span className={styles.text}>
            MOME Open - Autumn Workshop Exhibition, Budapest, Moholy-Nagy
            University of Art and Design
          </span>
        </li>
        <li>
          <span className={styles.date}>2023 – 2024</span>
          <span className={styles.text}>
            Homecoming: Biennial Exhibition, Rochester, NY, RIT City Art Space
          </span>
        </li>
        <li>
          <span className={styles.date}>2023</span>
          <span className={styles.text}>
            METU Photography Graduation Exhibition, Budapest, FUGA Budapest
            Center of Architecture
          </span>
        </li>
      </ul>
      <h2 className={styles.listTitle}>Publications</h2>
      <ul className={styles.list}>
        <li>
          <span className={styles.date}>2024</span>
          <span className={styles.text}>
            Zone Magazine Collective Book - 4.
          </span>
        </li>
        <li>
          <span className={styles.date}>2023</span>
          <span className={styles.text}>Homecoming 2022 & 2023 Catalog</span>
        </li>
        <li>
          <span className={styles.date}>2023</span>
          <span className={styles.text}>Zoink: Milos Kallai - Weekend</span>
        </li>
      </ul>
    </div>
  );
}
