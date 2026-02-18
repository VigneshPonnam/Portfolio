import React from "react";
import { Col, Row } from "react-bootstrap";

// ✅ Icons from: src/Assets/TechIcons/ (single folder)
import Python from "../../Assets/TechIcons/python.svg";
import PyTorch from "../../Assets/TechIcons/pytorch.svg";
import TensorFlow from "../../Assets/TechIcons/tensorflow.svg";
import HuggingFace from "../../Assets/TechIcons/huggingface.svg";
import Neo4j from "../../Assets/TechIcons/neo4j.svg";

import ReactIcon from "../../Assets/TechIcons/react.svg";
import Flask from "../../Assets/TechIcons/flask.svg";
import Android from "../../Assets/TechIcons/android.svg";
import Java from "../../Assets/TechIcons/java.svg";
import C from "../../Assets/TechIcons/c.svg";
import Git from "../../Assets/TechIcons/git.svg";
import GitHub from "../../Assets/TechIcons/github.svg";

import AWS from "../../Assets/TechIcons/aws.svg";
import S3 from "../../Assets/TechIcons/s3.svg";
import RDS from "../../Assets/TechIcons/rds.svg";
import Redshift from "../../Assets/TechIcons/redshift.svg";
import GoogleCloud from "../../Assets/TechIcons/googlecloud.svg";
import MongoDB from "../../Assets/TechIcons/mongodb.svg";

import Cisco from "../../Assets/TechIcons/cisco.svg";
import PaloAlto from "../../Assets/TechIcons/paloalto.svg";
import Salesforce from "../../Assets/TechIcons/salesforce.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* AI / ML */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PyTorch} alt="PyTorch" />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={TensorFlow} alt="TensorFlow" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HuggingFace} alt="Hugging Face" />
        <div className="tech-icons-text">Hugging Face</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Neo4j} alt="Neo4j" />
        <div className="tech-icons-text">Neo4j</div>
      </Col>

      {/* Software / Full Stack */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Flask} alt="Flask" />
        <div className="tech-icons-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Android} alt="Android" />
        <div className="tech-icons-text">Android</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GitHub} alt="GitHub" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* Cloud & Data */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={S3} alt="Amazon S3" className="tech-icon-images" />
        <div className="tech-icons-text">S3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={RDS} alt="Amazon RDS" className="tech-icon-images" />
        <div className="tech-icons-text">RDS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redshift} alt="Amazon Redshift" className="tech-icon-images" />
        <div className="tech-icons-text">Redshift</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GoogleCloud} alt="Google Cloud" className="tech-icon-images" />
        <div className="tech-icons-text">Google Cloud</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MongoDB} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      {/* Cyber / Enterprise */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cisco} alt="Cisco" />
        <div className="tech-icons-text">Cisco</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PaloAlto} alt="Palo Alto Networks" />
        <div className="tech-icons-text">Palo Alto</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Salesforce} alt="Salesforce" />
        <div className="tech-icons-text">Salesforce</div>
      </Col>
    </Row>
  );
}

export default Techstack;
