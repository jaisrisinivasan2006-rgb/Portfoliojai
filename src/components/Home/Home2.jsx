import React from "react";
import { Container, Row, Col } from "react-bootstrap"

import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming because it allows me to turn ideas into reality. Every day, I make sure to learn something new and improve my problem-solving skills
              <br />
              <br />I am good in classics like
              <i>
                <b className="purple"> Java,Python and Data Structures </b>
              </i>
              
              
              <br />
              <br />
              Currently, I am actively working on real-world projects, participating in hackathons, and exploring the field of Artificial Intelligence. I am especially interested in building AI-powered applications that solve real-world problems.
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/jaisrisinivasan2006-rgb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.linkedin.com/in/jaisri-bs-972361378"
      
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

             <li className="social-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jaisrisinivasan2006@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineMail size={25} />
              </a>
            </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
