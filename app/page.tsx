import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";
import { ProjectCard } from "@/components/project-card/project-card";
import getContent from "@/utils/get-content";
import { Project } from "@/types/project";

export default async function ProjectsPage() {
  const projectData = await getContent("projects");

  return (
    <div>
      <Container fluid className={styles.projectContainer}>
        <Row xs={1} sm={2} md={3} lg={4}>
          {(projectData as Project[])?.map((project) => (
            <Col key={project.fields.title as string}>
              <ProjectCard project={project.fields} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
