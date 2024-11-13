import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./project-card.module.scss";
import Link from "next/link";
import { ProjectCardProps } from "@/types/project";

type Props = {
  project: ProjectCardProps;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`projects/${project.url}`} className={styles.projectCardRoot}>
      <Image
        className={styles.coverImage}
        src={project.coverImage as string}
        alt={project.title}
      />
      <p className={styles.projectTitle}>
        {project.title} ({project.date})
      </p>
    </Link>
  );
};
