import { ImageContainer } from "@/components/image-container/image-container";
import { getProjectDataById } from "@/utils/get-content";
import { Col, Row } from "react-bootstrap";
import styles from "./projects.module.scss";

type Params = {
  id: string;
};
export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = await getProjectDataById(id);

  return (
    <div>
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <h2>{project?.title as string}</h2>
          <div className={styles.projectDescription}>
            {project?.description as string}
          </div>
        </Col>
      </Row>
      <ImageContainer images={project?.images || []} />
    </div>
  );
}
