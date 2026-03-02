import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../assets/Projects/Ecommerce.png";
import reactnative from "../../assets/Projects/reactnative.jpg";
import summtext from "../../assets/Projects/summtext.jpeg"
import chatify from "../../assets/Projects/chatify.png";



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
              title="Chatify"
              description="Personal Chat Room or Workspace to  hangout with friends build with MERN. Have features which allows user for realtime messaging  as well as supports reactions on messages."
              // ghLink="https://github.com/Abinayasrinivasan305/mern-chat-app"
              // demoLink="https://mern-chat-app-jvy8.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="A Ecommerce website is developed using MERN with backend,frontend,admin panel.Using admin panel admin can add new products and its prices,categories...Each time it update with website and database."
              // ghLink="https://github.com/Abinayasrinivasan305/Ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summtext}
              isBlog={false}
              title="Text summarizer"
              description="This is a tool to extract key points from Long text,Notes books and research.it help us to get a optimized text.It help us to save time and summarizes the key points."
              // ghLink="https://github.com/Abinayasrinivasan305/React-Native-Sample-projects"
              // demoLink="https://expo.dev/accounts/abinayaparameswari"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
