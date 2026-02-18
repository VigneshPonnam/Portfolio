import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="cert-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.certLink && (
          <Button
            variant="primary"
            href={props.certLink}
            target="_blank"
          >
            <FaCertificate /> &nbsp;
            View Certificate &nbsp;
            <BsBoxArrowUpRight />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
