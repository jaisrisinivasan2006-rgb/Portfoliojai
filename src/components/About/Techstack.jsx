import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative ,TbBrandFigma} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandFigma/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
