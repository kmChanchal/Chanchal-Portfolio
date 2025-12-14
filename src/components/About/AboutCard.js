import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Chanchal Bundela</span>{" "}
            from <span className="purple">Delhi, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">UdrCrafts</span>.
            <br />I hold an Integrated MCA Degree{" "}
            <span className="purple">Master of Computer Applications</span> from{" "}
            <span className="purple">JIMS-Jagan Institute of Management Studies(Delhi)</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chanchal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
