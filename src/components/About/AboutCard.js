import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import astertechLogo from "../../Assets/Companies/astertech.png";
import ualbanyLogo from "../../Assets/Companies/ualbany.png";
import snistLogo from "../../Assets/Companies/snist.png";
function AboutCard() {
  return (
    <div className="about-container">

      {/* INTRO SECTION */}
      <Card className="about-glass-card">
        <Card.Body>
          <h3 className="about-section-title">About Me</h3>
           {/* Intro */}
          <p className="about-text">
            Hi, I’m <span className="highlight">Vignesh Ponnam</span>, currently pursuing a{" "}
            <span className="highlight">Master’s in Computer Science</span> at{" "}
            <span className="highlight">University at Albany (SUNY)</span>, where I am
            strengthening my foundation in systems design, software engineering, data
            management, and scalable application development. My graduate studies
            emphasize analytical thinking, structured problem solving, and building
            robust technical solutions that perform reliably in real-world environments.
          </p>
          <h5 className="about-section-title">Contact Information</h5>

          <ul className="about-bullets">
            <li>
              <ImPointRight /> <span className="highlight">Mobile:</span>{" "}
              <a href="tel:8382029271" className="about-link">
                8382029271
              </a>
            </li>
            <li>
              <ImPointRight /> <span className="highlight">Email:</span>{" "}
              <a href="mailto:vagnishavignesh@gmail.com" className="about-link">
                vagnishavignesh@gmail.com
              </a>
            </li>
          </ul>
          
          <h5 className="about-section-title">Interests</h5>
          <ul className="about-bullets">
            <li>• Designing scalable and reliable software systems</li>
            <li>• Cloud infrastructure and distributed architectures</li>
            <li>• AI/ML system development and model evaluation</li>
            <li>• Knowledge Graph design and structured data modeling</li>
            <li>• Retrieval-Augmented Generation (RAG) architectures</li>
            <li>• Data modeling and structured information systems</li>
            <li>• Building end-to-end technical solutions with clean system design</li>
          </ul>
        </Card.Body>
      </Card>

      {/* EDUCATION SECTION */}
      <Card className="about-glass-card">
        <Card.Body>
          <h3 className="about-section-title">Education</h3>

          <div className="about-row">
            <img src={ualbanyLogo} alt="UAlbany" className="about-logo" />
            <div>
              <h5>M.S. Computer Science</h5>
              <p className="about-subtext">University at Albany (SUNY) - 3.6/4.0</p>
            </div>
          </div>

          <div className="about-row">
            <img src={snistLogo} alt="UAlbany" className="about-logo" />
            <div>
              <h5>Bachelor’s in Information Technology</h5>
              <p className="about-subtext">Sreenidhi Institute of Technology and Sciences - 3.5/4.0</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* EXPERIENCE SECTION */}
      <Card className="about-glass-card">
        <Card.Body>
          <h3 className="about-section-title">Experience</h3>

          <div className="about-row">
            <img src={astertechLogo} alt="AsterTech" className="about-logo" />
            <div>
              <h5>AI/ML Developer — AsterTech LLC</h5>
              <ul className="about-bullets">
                <li>
                  <ImPointRight /> Designed and implemented a Knowledge Graph–enhanced Retrieval-Augmented Generation (GraphRAG) architecture integrating Neo4j/Kùzu with LLM pipelines.
                </li>
                <li>
                  <ImPointRight /> Built structured entity-relationship schemas linking DOI → abstract → sentence → fact for traceable and explainable AI responses.
                </li>
                <li>
                  <ImPointRight /> Developed secure document ingestion and chunk-sensitivity tagging workflows with role-based access control for controlled retrieval.
                </li>
                <li>
                  <ImPointRight /> Implemented semantic embedding pipelines (SentenceTransformers / domain-specific embeddings) to optimize contextual search accuracy.
                </li>
                <li>
                  <ImPointRight /> Conducted model benchmarking across ML/DL approaches and optimized retrieval latency through modular preprocessing and indexing strategies.
                </li>
                <li>
                  <ImPointRight /> Produced reproducible experimentation pipelines and technical documentation to support scalable deployment and collaborative research.
                </li>
              </ul>
            </div>
          </div>

          <div className="about-row">
            <img src={ualbanyLogo} alt="UAlbany" className="about-logo" />
            <div>
              <h5>Student Assistant — University at Albany</h5>
              <ul className="about-bullets">
                <li><ImPointRight /> Coordinated academic operations and documentation.</li>
                <li><ImPointRight /> Supported structured information management workflows.</li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* FOCUS AREAS */}
      <Card className="about-glass-card">
        <Card.Body>
          <h3 className="about-section-title">Focus Areas</h3>
          <ul className="about-bullets">
            <li><ImPointRight /> AI/ML Engineering & Model Evaluation</li>
            <li><ImPointRight /> LLM Applications (RAG-style systems)</li>
            <li><ImPointRight /> Cloud & Scalable System Design</li>
            <li><ImPointRight /> Full-Stack Engineering</li>
          </ul>
        </Card.Body>
      </Card>

    </div>
  );
}

export default AboutCard;