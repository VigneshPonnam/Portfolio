import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import agroassist from "../../Assets/Projects/agroassist.png";
import phishing from "../../Assets/Projects/phishing_detector.png";
import vzoom from "../../Assets/Projects/zoomclone.png";
import graphrag from "../../Assets/Projects/Graphrag.png";
import recipe from "../../Assets/Projects/recipe.png";
import aws from "../../Assets/Projects/aws_service.png";
import Medicare from "../../Assets/Projects/Medicare.png";
import cyber from "../../Assets/databreaches.png";
import Explainrecords from "../../Assets/Projects/Explainrecords.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* GraphRAG */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphrag}
              title="GraphRAG (Explainable AI System)"
              description={
                <>
                  <ul>
                    <li>Designed Knowledge Graph–enhanced RAG architecture integrating graph DBs with LLMs.</li>
                    <li>Implemented entity-relationship schemas for structured, context-aware querying.</li>
                    <li>Built query routing + modular semantic embedding pipelines.</li>
                    <li>Enabled explainable outputs with traceable metadata links.</li>
                  </ul>

                  <strong>Tech Stack:</strong> Neo4j / Kùzu, LLMs, Knowledge Graphs, Semantic Embeddings
                </>
              }
            />
          </Col>

          {/* ExplainMyRecords */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Explainrecords}
              title="ExplainMyRecords (AI Healthcare Assistant)"
              description={
                <>
                  <ul>
                    <li>Built conversational AI to simplify complex medical documents.</li>
                    <li>Extracted diagnoses, lab results, prescriptions via structured parsing.</li>
                    <li>Implemented secure document ingestion + semantic retrieval workflow.</li>
                    <li>Focused on explainability and privacy-aware design.</li>
                  </ul>

                  <strong>Tech Stack:</strong> LLM-based NLP, Document Parsing, Semantic Retrieval, Backend Pipeline
                </>
              }
            />
          </Col>

          {/* Agro Assist */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agroassist}
              title="Agro-Assist (AI Agricultural Platform)"
              description={
                <>
                  <ul>
                    <li>Developed crop prediction + decision-support platform.</li>
                    <li>Implemented ML models for yield estimation and disease classification.</li>
                    <li>Integrated weather APIs + recommendation engines.</li>
                    <li>Built scalable Flask backend with cloud-supported workflows.</li>
                  </ul>

                  <strong>Tech Stack:</strong> Python, Flask, ML Models, Weather APIs, Cloud Workflows
                </>
              }
            />
          </Col>

          {/* Phishing Detector */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishing}
              title="Phishing Detector (Android + ML)"
              description={
                <>
                  <ul>
                    <li>Engineered URL phishing classifier using lexical + host features.</li>
                    <li>Built Flask API for inference and Android frontend integration.</li>
                    <li>Performed accuracy tuning and model validation.</li>
                    <li>Enabled real-time detection through REST architecture.</li>
                  </ul>

                  <strong>Tech Stack:</strong> Android, Flask, Supervised ML, Feature Engineering, REST APIs
                </>
              }
            />
          </Col>

          {/* AWS Pipeline */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              title="AWS Data Visualization Pipeline"
              description={
                <>
                  <ul>
                    <li>Designed cloud-native analytics pipeline using S3 + Redshift.</li>
                    <li>Implemented ETL + SQL transformation workflows.</li>
                    <li>Processed large-scale datasets for BI reporting.</li>
                    <li>Built structured monitoring and visualization outputs.</li>
                  </ul>

                  <strong>Tech Stack:</strong> AWS S3, Amazon Redshift, ETL, SQL, Data Visualization
                </>
              }
            />
          </Col>

          {/* MediCare */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medicare}
              title="MediCare (Hospital Management System)"
              description={
                <>
                  <ul>
                    <li>Developed secure patient record + appointment system.</li>
                    <li>Implemented role-based authentication mechanisms.</li>
                    <li>Built scalable REST APIs with Flask.</li>
                    <li>Integrated Google CloudSQL for persistent storage.</li>
                  </ul>

                  <strong>Tech Stack:</strong> ReactJS, Flask, Google CloudSQL, REST APIs, RBAC
                </>
              }
            />
          </Col>

          {/* Meeting Scheduler */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vzoom}
              title="Meeting Scheduler (Secure Communication Platform)"
              description={
                <>
                  <ul>
                    <li>Built real-time scheduling + communication system using WebRTC.</li>
                    <li>Implemented visual cryptography concepts for confidentiality.</li>
                    <li>Designed signaling + secure data exchange workflows.</li>
                    <li>Enabled real-time video communication infrastructure.</li>
                  </ul>

                  <strong>Tech Stack:</strong> ReactJS, WebRTC, Real-time Signaling, Visual Cryptography
                </>
              }
            />
          </Col>

          {/* Recipe App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              title="Recipe Search Application"
              description={
                <>
                  <ul>
                    <li>Integrated third-party REST APIs for dynamic recipe search.</li>
                    <li>Implemented async data fetching + responsive UI components.</li>
                    <li>Enabled real-time nutrition and search results rendering.</li>
                    <li>Designed scalable API consumption layer.</li>
                  </ul>

                  <strong>Tech Stack:</strong> ReactJS, REST APIs, Async Data Handling
                </>
              }
            />
          </Col>

          {/* Cybersecurity */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyber}
              title="Cybersecurity – Threat Management (SOC Simulation)"
              description={
                <>
                  <ul>
                    <li>Analyzed SOC workflows including detection and incident response.</li>
                    <li>Studied IDS/IPS, firewall configuration, and cloud security controls.</li>
                    <li>Mapped threat-handling strategies to enterprise infrastructure.</li>
                    <li>Simulated monitoring and response scenarios.</li>
                  </ul>

                  <strong>Tech Stack:</strong> SOC Concepts, IDS/IPS, Firewall Concepts, Cloud Security Controls
                </>
              }
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;