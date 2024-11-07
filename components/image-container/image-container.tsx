"use client";

import { ProjectImage } from "@/types/types";
import Image from "react-bootstrap/Image";

import styles from "./image-container.module.scss";
import { Container } from "react-bootstrap";

type Props = {
  images: ProjectImage[];
};

export const ImageContainer = ({ images }: Props) => {
  return (
    <>
      <Container className={styles.scrollContainer}>
        {images.map((image) => (
          <Image
            key={image.title}
            className={styles.projectImage}
            src={image.src}
            alt={image.title}
          />
        ))}
      </Container>
    </>
  );
};
