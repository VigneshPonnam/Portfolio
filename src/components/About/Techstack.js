import React from "react";
import { Col, Row } from "react-bootstrap";

// AI / ML
import python from "../../Assets/TechIcons/python.svg";
import pytorch from "../../Assets/TechIcons/pytorch.svg";
import tensorflow from "../../Assets/TechIcons/tensorflow.svg";
import huggingface from "../../Assets/TechIcons/huggingface.svg";
import yolo from "../../Assets/TechIcons/yolo.svg";
import mistralai from "../../Assets/TechIcons/mistralai.svg";
import googlegemini from "../../Assets/TechIcons/googlegemini.svg";
import kaggle from "../../Assets/TechIcons/kaggle.svg";

// Software / Full Stack
import ReactIcon from "../../Assets/TechIcons/React.svg";
import flask from "../../Assets/TechIcons/flask.svg";
import android from "../../Assets/TechIcons/android.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import c from "../../Assets/TechIcons/c.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import github from "../../Assets/TechIcons/github.svg";
import vscode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import graphql from "../../Assets/TechIcons/graphql.svg";
import streamlit from "../../Assets/TechIcons/streamlit.svg";
import gradio from "../../Assets/TechIcons/gradio.svg";

// Cloud
import AWS from "../../Assets/TechIcons/AWS.svg";
import googlecloud from "../../Assets/TechIcons/googlecloud.svg";
import elasticcloud from "../../Assets/TechIcons/elasticcloud.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import mongodb from "../../Assets/TechIcons/mongodb.svg";
import neo4j from "../../Assets/TechIcons/neo4j.svg";

// Cyber / Networking
import cisco from "../../Assets/TechIcons/cisco.svg";
import paloalto from "../../Assets/TechIcons/paloaltonetworks.svg";
import wireshark from "../../Assets/TechIcons/wireshark.svg";
import webrtc from "../../Assets/TechIcons/webrtc.svg";

// Others
import knowledgebase from "../../Assets/TechIcons/knowledgebase.svg";
import latex from "../../Assets/TechIcons/latex.svg";
import datasci from "../../Assets/TechIcons/365datascience.svg";

function Techstack() {
  const skills = [
    { icon: python, name: "Python" },
    { icon: pytorch, name: "PyTorch" },
    { icon: tensorflow, name: "TensorFlow" },
    { icon: huggingface, name: "Hugging Face" },
    { icon: yolo, name: "YOLO" },
    { icon: mistralai, name: "Mistral AI" },
    { icon: googlegemini, name: "Google Gemini" },
    { icon: kaggle, name: "Kaggle" },

    { icon: ReactIcon, name: "React.js" },
    { icon: flask, name: "Flask" },
    { icon: android, name: "Android" },
    { icon: Java, name: "Java" },
    { icon: c, name: "C" },
    { icon: Javascript, name: "JavaScript" },
    { icon: Typescript, name: "TypeScript" },
    { icon: Node, name: "Node.js" },
    { icon: Git, name: "Git" },
    { icon: github, name: "GitHub" },
    { icon: vscode, name: "VS Code" },
    { icon: Postman, name: "Postman" },
    { icon: Docker, name: "Docker" },
    { icon: SQL, name: "SQL" },
    { icon: graphql, name: "GraphQL" },
    { icon: streamlit, name: "Streamlit" },
    { icon: gradio, name: "Gradio" },

    { icon: AWS, name: "AWS" },
    { icon: googlecloud, name: "Google Cloud" },
    { icon: elasticcloud, name: "Elastic Cloud" },
    { icon: Mongo, name: "Mongo" },
    { icon: mongodb, name: "MongoDB" },
    { icon: neo4j, name: "Neo4j" },

    { icon: cisco, name: "Cisco" },
    { icon: paloalto, name: "Palo Alto" },
    { icon: wireshark, name: "Wireshark" },
    { icon: webrtc, name: "WebRTC" },

    { icon: knowledgebase, name: "Knowledge Base" },
    { icon: latex, name: "LaTeX" },
    { icon: datasci, name: "Data Science" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img
            src={skill.icon}
            alt={skill.name}
            className="tech-icon-img"
          />
          <div className="tech-icons-text">{skill.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;