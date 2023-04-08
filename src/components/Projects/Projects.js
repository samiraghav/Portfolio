import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Todo Application"
              description="Successfully built a todo app with React, Redux, Framer Motion, and React Icons that allows users to create, read, update, and delete their todos.Implemented Redux for state management, allowing for a centralized data store that can be accessed from any component in the application."
              ghLink="https://github.com/samiraghav/todo-crud-app"
              demoLink="https://samiraghav.github.io/todo-crud-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Color Palette Application"
              description="Developed and maintained a color palette application, allowing users to create and save custom color palettes for use in their design projects.Integrated the react-color library to enable users to select colors from a variety of input methods, including hex codes, RGB values, and a color picker."
              ghLink="https://github.com/samiraghav/color-paletteapplication"
              demoLink="https://color-paletteapplication.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Family Guy SoundBoard"
              description="Developed a custom soundboard application using ReactJS, allowing users to play a variety of sound effects and audio clips from family guy.Implemented responsive design principles using CSS and styled-components to ensure the soundboard application was optimized."
              ghLink="https://github.com/samiraghav/family-guy-soundboard"
              demoLink="https://familiy-guy-scoreboard.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
