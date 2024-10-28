import React from "react";
import Image from "next/image";
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
        width={0}
        height={0}
        sizes="100vw"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div></div>
    </Link>
  );
};
