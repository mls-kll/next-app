import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./project-card.module.scss";
import Link from "next/link";
import { ProjectFields } from "@/types/project";

type Props = {
  project: ProjectFields;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`projects/${project.url}`} className={styles.projectCardRoot}>
      <Image
        className={styles.coverImage}
        src={project.cover.fields.file?.url as string}
        alt={project.title}
      />
      <p className={styles.projectTitle}>{project.title}</p>
    </Link>
  );
};
