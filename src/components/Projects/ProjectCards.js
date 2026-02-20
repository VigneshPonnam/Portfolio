import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Compact Card: image + title only */}
      <Card className="project-card-view project-card-compact">
        <div
          className="project-card-media"
          role="button"
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? handleOpen() : null)}
        >
          <Card.Img variant="top" src={props.imgPath} alt={props.title} />
          <div className="project-card-overlay">
            <span className="project-card-overlay-text">View details</span>
          </div>
        </div>

        <Card.Body className="project-card-body-compact">
          <Card.Title className="project-card-title">{props.title}</Card.Title>
        </Card.Body>
      </Card>

      {/* Transparent Modal (closes on outside click by default) */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        backdrop={true}
        keyboard={true}
        dialogClassName="project-modal-dialog"
        contentClassName="project-modal-content"
      >
        <Modal.Header closeButton className="project-modal-header">
          <Modal.Title className="project-modal-title">{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="project-modal-body">
          <img
            src={props.imgPath}
            alt={props.title}
            className="project-modal-image"
          />

          <p className="project-modal-description">{props.description}</p>

          <div className="project-modal-actions">
            {props.ghLink && (
              <Button
                variant="light"
                href={props.ghLink}
                target="_blank"
                rel="noreferrer"
                className="project-modal-btn"
              >
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}

            {props.demoLink && (
              <Button
                variant="outline-light"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
                className="project-modal-btn"
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
