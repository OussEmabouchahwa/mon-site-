import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png"; // Make sure this image is relevant or replace it
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <strong>Oussema Bouchahwa</strong>,
                A <span className="purple">Recent Graduate</span> in Computer Science Technologies from ISET DJerba
              <br />
              <br />I have hands-on experience building:
              <ul>
                <li><b className="purple">Mobile Applications</b> using <i>Flutter</i></li>
                <li><b className="purple">Web Applications</b> using <i>MERN Stack (MongoDB, Express, React, Node.js)</i></li>
                <li><b className="purple">Responsive Websites</b> using modern tools like WordPress & HTML/CSS</li>
              </ul>
              <br />
              My areas of interest include:
              <i>
                <b className="purple"> Full-stack Development, Mobile App Development </b>
              </i>
              and exploring new frameworks like <b className="purple">React.js</b> and <b className="purple">Next.js</b>.
              <br />
              <br />
              I am currently looking for an internship or apprenticeship opportunity to further develop my technical and professional skills.
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
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                                href="https://github.com/OussEmabouchahwa"
 // Replace with your GitHub
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                     href="https://x.com/oussema_boucha"  // Replace with your Twitter
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bouchahwa-oussema-0216b3264/" // Replace with your LinkedIn
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.instagram.com/ouss_ema_2001" // Replace with your Instagram
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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