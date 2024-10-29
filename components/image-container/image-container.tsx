import { ProjectImage } from "@/types/types";
import Image from "next/image";

import styles from "./image-container.module.scss";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  images: ProjectImage[];
};

export const ImageContainer = ({ images }: Props) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {images.map((image, index) => (
          <Col key={index} className={styles.imageCol}>
            <Image
              className={styles.projectImage}
              src={image.src}
              alt={image.altText}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
