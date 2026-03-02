import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">jaisri </span>
            from <span className="purple">Tamil Nadu, India.</span>
            <br />
            An individual of exceptional character, exhibiting unwavering dedication and unparalleled work ethic,pursued
            <br />
            my passion for Computer Science Engineering(B.E. CSE ), SRMMCET 
            <br />
            delving into the intricacies of technology and innovation. 
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            <b>Achieve </b>to attain a desired end or aim!{" "}
            <br/>
            become successful.
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
