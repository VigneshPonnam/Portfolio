import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

function CertificationCard(props) {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Compact Card */}
      <Card className="project-card-view project-card-compact">
        <div
          className="project-card-media"
          role="button"
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={(e) =>
            e.key === "Enter" || e.key === " " ? handleOpen() : null
          }
        >
          <Card.Img variant="top" src={props.imgPath} alt={props.title} />

          <div className="project-card-overlay">
            <span className="project-card-overlay-text">
              View Certificate
            </span>
          </div>
        </div>

        <Card.Body className="project-card-body-compact">
          <Card.Title className="project-card-title">
            {props.title}
          </Card.Title>
        </Card.Body>
      </Card>

      {/* Transparent Modal */}
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
          <Modal.Title className="project-modal-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="project-modal-body">
          <img
            src={props.imgPath}
            alt={props.title}
            className="project-modal-image"
          />

          <p className="project-modal-description">
            {props.description}
          </p>

          {props.certLink && (
            <div className="project-modal-actions">
              <Button
                variant="light"
                href={props.certLink}
                target="_blank"
                rel="noreferrer"
                className="project-modal-btn"
              >
                <FaCertificate /> &nbsp;
                View Certificate &nbsp;
                <BsBoxArrowUpRight />
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CertificationCard;