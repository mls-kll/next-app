import React from "react";
import Image from "next/image";
import { Project } from "@/types/types";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div key={project.id}>
      <div key={project.title}>
        <Image
          src={project.coverImage}
          alt={project.title}
          width={200}
          height={150}
        />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div></div>
      </div>
    </div>
  );
};
