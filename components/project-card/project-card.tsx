import React from "react";
import Image from "react-bootstrap/Image";
import { Project } from "@/types/types";

import styles from "./project-card.module.scss";
import Link from "next/link";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`projects/${project.slug}`}>
      <Image
        className={styles.coverImage}
        src={project.coverImage}
        alt={project.title}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div></div>
    </Link>
  );
};
