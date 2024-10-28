import { ProjectCard } from "@/components/project-card/project-card";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";
import { projects } from "@/mocks/projects";

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
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
