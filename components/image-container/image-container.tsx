"use client";

import { ProjectImage } from "@/types/types";
import Image from "react-bootstrap/Image";

import styles from "./image-container.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { CarouselModal } from "../carousel-modal/carousel-modal";

type Props = {
  images: ProjectImage[];
};

export const ImageContainer = ({ images }: Props) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleImageClick = () => {
    setShowCarousel(true);
  };

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {images.map((image, index) => (
            <Col key={index} className={styles.imageCol}>
              <Image
                className={styles.projectImage}
                src={image.src}
                alt={image.title}
                onClick={() => handleImageClick()}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {showCarousel && (
        <CarouselModal images={images} setShowCarousel={setShowCarousel} />
      )}
    </>
  );
};
