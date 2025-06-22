import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import chatify from "../../Assets/Projects/chatify.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import emotion from "../../Assets/Projects/emotion.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Hiring Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hiring Website"
              description="A system that allows users to manage employee data easily.
              🔹 Key Features:
              - Add, update, delete, and view employee information
              - Secure login and access control
              - Simple and user-friendly design"
              ghLink="https://github.com/OussEmabouchahwa/projet-angular-" 
            />
          </Col>

          {/* Education Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Education"
              description="Education Management System designed to simplify and digitalize the daily operations of private educational institutions. Built with:
              React.js (frontend) | Node.js & Express (backend) | MongoDB (database)"
              ghLink="https://github.com/OussEmabouchahwa/Education-" 
            
            />
          </Col>

          {/* Figma Design */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Figma Design"
              description="A modern, interactive Figma prototype for a pub website with intuitive navigation, vibrant menu display, and upcoming events section."
              ghLink="https://www.figma.com/file/BuaU21YZ7mgyYmu27bUtPv/Untitled?type=design&node-id=0%3A1&mode=design&t=2dNLImdDnQw9QGQO-1"
            />
          </Col>

          {/* Slot Machine Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Slot Machine Game"
              description="A fun JavaScript-based slot machine game built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/OussEmabouchahwa/jeux-avec-java-script/tree/master/JavaProject"
            />
          </Col>

          {/* Hotel Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Website"
              description="A responsive and visually appealing WordPress website designed to showcase hotel rooms, amenities, services, and facilitate online booking."
              ghLink="https://github.com/OussEmabouchahwa/hotel-wordpress-site"
            />
          </Col>

          {/* APP Ramadhan (Updated) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="APP Ramadhan"
              description="A mobile application developed using Flutter to help users engage with Islamic practices during Ramadan. It includes features like:
              🔹 Quran recitation and memorization
              🔹 Daily duas and athkar tracking
              🔹 Prayer times and Taraweeh reminder
              🔹 Ramadan calendar and motivational content"
              ghLink="https://github.com/OussEmabouchahwa/application-athkar"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;