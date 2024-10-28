import { ProjectCard } from "@/components/project-card/project-card";
import { Project } from "@/types/types";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./page.module.scss";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Project 1",
      id: "1",
      description: "This is project 1",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 2",
      id: "2",
      description: "This is project 2",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 3",
      id: "3",
      description: "This is project 3",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 4",
      id: "4",
      description: "This is project 4",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 5",
      id: "5",
      description: "This is project 5",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
      title: "Project 6",
      id: "6",
      description: "This is project 6",
      coverImage: "/placeholder-cover.jpg",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  ];

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
