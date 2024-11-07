import React from "react";
import Image from "react-bootstrap/Image";

import styles from "./project-card.module.scss";
import Link from "next/link";
import { IProjectsFields } from "@/types/generated/contentful";

type Props = {
  project: IProjectsFields;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`projects/${project.url}`}>
      <Image
        className={styles.coverImage}
        src={project.cover.fields.file?.url as string}
        alt={project.title}
      />
      <h3>{project.title}</h3>
      <div></div>
    </Link>
  );
};
