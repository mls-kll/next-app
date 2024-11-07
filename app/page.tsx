import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";
import { ProjectCard } from "@/components/project-card/project-card";
import getContent from "@/utils/get-content";
import { IProjectsFields } from "@/types/generated/contentful";

export default async function ProjectsPage() {
  const projectData = await getContent("projects");

  return (
    <div>
      <Container fluid className={styles.projectContainer}>
        <Row xs={1} sm={2} md={3} lg={4}>
          {projectData?.map((project) => (
            <Col key={project.fields.title as string}>
              <ProjectCard
                project={project.fields as unknown as IProjectsFields}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
