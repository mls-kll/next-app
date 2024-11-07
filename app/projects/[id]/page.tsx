import { ImageContainer } from "@/components/image-container/image-container";
import { ProjectImage } from "@/types/types";
import getContent from "@/utils/get-content";
import { Asset } from "contentful-management/dist/typings/export-types";
import { Col, Row } from "react-bootstrap";
import styles from "./projects.module.scss";

type Params = {
  id: string;
};
export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const projectData = await getContent("projects", id);
  const projectItem = projectData?.[0]?.fields;
  const projectImages = (projectItem?.images as unknown as Asset[])?.map(
    (image) => ({
      src: image.fields.file.url,
      title: image.fields.title,
    })
  );

  return (
    <div>
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
          <h2>{projectItem?.title as string}</h2>
          <div className={styles.projectDescription}>
            {projectItem?.description as string}
          </div>
        </Col>
      </Row>
      <ImageContainer
        images={(projectImages as unknown as ProjectImage[]) || []}
      />
    </div>
  );
}
