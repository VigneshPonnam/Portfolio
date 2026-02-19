import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Intro */}
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Vignesh Ponnam</span> based in{" "}
            <span className="purple">Albany, New York</span>. I’m pursuing a{" "}
            <span className="purple">Master’s in Computer Science</span> with a
            focus on <span className="purple">AI/ML engineering</span>,{" "}
            <span className="purple">LLM-based applications</span>, and{" "}
            <span className="purple">scalable software systems</span>. I enjoy
            building end-to-end solutions—data pipelines, model development, and
            production-ready tooling—that translate complex data into measurable
            outcomes.
          </p>

          {/* Education */}
          <h5 style={{ marginTop: "18px" }}>
            <span className="purple">Education</span>
          </h5>
          <ul style={{ paddingLeft: "18px", marginBottom: "12px" }}>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> <b>M.S. Computer Science</b> —{" "}
              <span className="purple">University at Albany (SUNY)</span>
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> <b>Bachelor’s (Undergraduate)</b> —{" "}
              <span className="purple">Computer Science</span>
            </li>
          </ul>

          {/* Experience */}
          <h5 style={{ marginTop: "18px" }}>
            <span className="purple">Experience</span>
          </h5>

          {/* AsterTech */}
          <p style={{ marginBottom: "6px" }}>
            <b>AI/ML Developer</b> —{" "}
            <span className="purple">AsterTech LLC</span>
          </p>
          <ul style={{ paddingLeft: "18px", marginBottom: "12px" }}>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> Built components for intelligent, data-driven ML
              workflows with a focus on scalability and reproducibility.
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> Worked on LLM-enabled application patterns and
              modular pipeline design for iterative experimentation.
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> Produced technical documentation and structured
              outputs to support collaboration and maintainability.
            </li>
          </ul>

          {/* Student Assistant */}
          <p style={{ marginBottom: "6px" }}>
            <b>Student Assistant</b> —{" "}
            <span className="purple">University at Albany</span>
          </p>
          <ul style={{ paddingLeft: "18px", marginBottom: "12px" }}>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> Supported academic operations by coordinating
              tasks, documentation, and communication across stakeholders.
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight /> Assisted with structured information management
              and process support to improve turnaround time and clarity.
            </li>
          </ul>

          {/* Focus Areas */}
          <h5 style={{ marginTop: "18px" }}>
            <span className="purple">Focus Areas</span>
          </h5>
          <ul style={{ paddingLeft: "18px" }}>
            <li className="about-activity">
              <ImPointRight /> AI/ML Engineering & Model Evaluation
            </li>
            <li className="about-activity">
              <ImPointRight /> LLM Applications (RAG-style systems)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud & Scalable System Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Full-Stack Development for Product Delivery
            </li>
          </ul>

          <p style={{ color: "rgba(255,255,255,0.75)", marginTop: "14px" }}>
            “Designing technology that is intelligent, scalable, and impactful.”
          </p>
          <footer className="blockquote-footer">Vignesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;