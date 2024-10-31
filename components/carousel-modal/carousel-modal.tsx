import { Button, Carousel, Image } from "react-bootstrap";

import { ProjectImage } from "@/types/types";
import styles from "./carousel-modal.module.scss";

type Props = {
  images: ProjectImage[];
  setShowCarousel: (show: boolean) => void;
};

export const CarouselModal = ({ images, setShowCarousel }: Props) => {
  return (
    <div className={styles.carouselModalRoot}>
      <div className={styles.carouselHeader}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowCarousel(false)}
        >
          Close
        </Button>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel fade indicators={false} interval={null}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image.src}
                alt={image.altText}
                className="d-block w-100"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
