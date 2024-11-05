import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";
import { projects } from "@/mocks/projects";
import { ProjectCard } from "@/components/project-card/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <Container fluid className={styles.projectContainer}>
        <Row xs={1} sm={2} md={3} lg={4}>
          {projects.map((project) => (
            <Col key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
