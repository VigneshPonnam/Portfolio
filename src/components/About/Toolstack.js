import React from "react";
import { Col, Row } from "react-bootstrap";

import huggingface from "../../Assets/TechIcons/huggingface.svg";
import github from "../../Assets/TechIcons/github.svg";
import vscode from "../../Assets/TechIcons/vscode.svg";
import neo4j from "../../Assets/TechIcons/neo4j.svg";

function Toolstack() {
  const tools = [
    { icon: huggingface, name: "Hugging Face" },
    { icon: github, name: "GitHub" },
    { icon: vscode, name: "VS Code" },
    { icon: neo4j, name: "Neo4j" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={3} className="tech-icons">
          <img
            src={tool.icon}
            alt={tool.name}
            className="tech-icon-img"
          />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;