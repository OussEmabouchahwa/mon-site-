import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oussema Bouchahwa</span>, 
            a recent graduate in <span className="purple">Computer Science Technologies</span> 
            from <span className="purple">ISET Djerba, Tunisia.</span>
            <br />
            <br />
            I have hands-on experience building:
            <ul>
              <li><b>MERN Stack Applications</b> (MongoDB, Express, React, Node.js)</li>
              <li><b>Mobile Apps</b> using Flutter</li>
              <li><b>Responsive Websites</b> using WordPress and HTML/CSS</li>
            </ul>
            <br />
            I'm currently looking for an internship or apprenticeship opportunity to further develop my technical and professional skills.
            <br />
            <br />
            Outside of coding, here are some things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open source
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech innovations
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build meaningful solutions through code and creativity!"{" "}
          </p>
          <footer className="blockquote-footer">Oussema</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;