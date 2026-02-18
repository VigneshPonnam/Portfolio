import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agroassist from "../../Assets/Projects/agrpasssist.png";
import phishing from "../../Assets/Projects/phishing_detector.png";
import vzoom from "../../Assets/Projects/zoomclone.png";
import graphrag from "../../Assets/Projects/Graphrag.png";
import recipe from "../../Assets/Projects/recipe.png";
import graph_architecture from "../../Assets/Projects/graph_architecture.png";
import aws from "../../Assets/Projects/aws_service.png";
import Medicare from "../../Assets/Projects/Medicare.png";
import cyber from "../../Assets/databreaches.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graphrag}
              isBlog={false}
              title="GraphRAG (Explainable AI System)"
              description="Designed and implemented a Knowledge Graph–enhanced Retrieval-Augmented Generation (RAG) architecture integrating Neo4j/Kuzu with LLMs to enable structured, context-aware information retrieval. Built graph-based entity-relationship schemas, implemented query routing pipelines, and optimized retrieval latency using modular data preprocessing and semantic embedding workflows. Focused on explainability through traceable response generation and metadata-linked outputs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Explainrecords}
              isBlog={false}
              title="ExplainMyRecords (Medical Records Explain Chat – AI Healthcare Assistant)"
              description="Developed an AI-powered conversational system designed to interpret and simplify complex medical records into patient-friendly explanations. Implemented LLM-based contextual understanding with structured document parsing to extract diagnoses, lab results, prescriptions, and clinical notes. Built a secure backend pipeline for processing uploaded medical documents, enabling semantic retrieval and explainable responses while maintaining data privacy considerations. Focused on improving interpretability, accessibility, and user-centric healthcare communication through intelligent NLP-driven automation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agroassist}
              isBlog={false}
              title="Agro-Assist (AI-Powered Agricultural Platform)"
              description="Developed a full-stack AI-driven platform for crop prediction and decision support. Implemented machine learning models for yield estimation and disease classification using structured agricultural datasets. Integrated weather APIs, recommendation engines, and transactional modules for e-commerce and equipment rental. Built scalable backend services using Flask and deployed cloud-supported workflows."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phishing}
              isBlog={false}
              title="Phishing Detector (Android + ML System)"
              description="Engineered a URL-based phishing detection system using supervised machine learning models with feature extraction techniques (lexical and host-based attributes). Built a Flask-based API for model inference and integrated it with an Android front-end application for real-time detection. Performed model evaluation, accuracy tuning, and performance validation on labeled phishing datasets."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Data Visualization Pipeline"
              description="Designed a cloud-native analytics workflow leveraging AWS S3 for storage and Redshift for structured data warehousing. Implemented ETL pipelines and SQL-based transformations to process large-scale datasets. Developed visualization outputs to enable performance monitoring and business intelligence reporting."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medicare}
              isBlog={false}
              title="MediCare (Hospital Management System)"
              description="Developed a scalable hospital management system using ReactJS and Flask with Google CloudSQL backend integration. Implemented secure patient record handling, appointment scheduling modules, and role-based authentication mechanisms. Designed RESTful APIs for efficient data exchange and system scalability."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vzoom}
              isBlog={false}
              title="Meeting Scheduler (Secure Communication Platform)"
              description="Built a secure video scheduling and communication system using ReactJS and WebRTC. Implemented visual cryptography principles to enhance confidentiality during digital communication workflows. Designed real-time signaling mechanisms and secure data exchange pipelines."
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Search Application"
              description="Developed a ReactJS-based application integrating third-party REST APIs for dynamic recipe search and nutritional data retrieval. Implemented responsive UI components and asynchronous API handling for real-time query responses." />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Cybersecurity – Threat Management (SOC Study & Simulation)"
              description="Conducted structured analysis of Security Operations Center (SOC) workflows, including threat monitoring, incident detection, and response strategies. Studied network-level intrusion prevention systems, firewall configurations, and cloud security controls aligned with enterprise infrastructure protection." </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
