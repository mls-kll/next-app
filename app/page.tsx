import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";
import { ProjectCard } from "@/components/project-card/project-card";
import { getProjectCardData } from "@/utils/get-content";

export default async function ProjectsPage() {
  const projectData = await getProjectCardData();

  return (
    <div>
      <Container fluid className={styles.projectContainer}>
        <Row xs={1} sm={2} md={3} lg={4}>
          {projectData?.map((project) => (
            <Col key={project.title}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
