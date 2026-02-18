import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vignesh Ponnam</span>{" "}
            currently based in <span className="purple">Albany, New York</span>.
            <br />
            I’m pursuing a{" "}
            <span className="purple">Master’s in Computer Science</span> at{" "}
            <span className="purple">University at Albany (SUNY)</span>.
            <br />
            Previously, I worked as an{" "}
            <span className="purple">AI/ML Research Intern</span> at{" "}
            <span className="purple">AsterTech LLC</span>, where I contributed to
            building intelligent, data-driven systems and scalable ML workflows.
            I also served as a{" "}
            <span className="purple">Student Assistant</span> at UAlbany,
            supporting academic operations and collaboration within the department.
            <br />
            <br />
            My experience spans across{" "}
            <span className="purple">AI/ML development</span>,{" "}
            <span className="purple">LLM-based applications</span>,{" "}
            <span className="purple">cloud architectures</span>, and{" "}
            <span className="purple">full-stack software engineering</span>.
            I’m passionate about engineering intelligent systems that translate
            complex data into impactful real-world solutions.
          </p>
    
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI/ML Systems 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cloud & Scalable Architectures ☁️
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching Intelligent Automation 🧠
            </li>
          </ul>
    
          <p style={{ color: "rgb(155 126 172)" }}>
            "Designing technology that is intelligent, scalable, and impactful."
          </p>
          <footer className="blockquote-footer">Vignesh</footer>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
