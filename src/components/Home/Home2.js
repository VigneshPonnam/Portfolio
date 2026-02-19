import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science graduate student and AI/ML Engineer passionate about
              building intelligent, scalable systems that transform complex data into
              meaningful, real-world solutions. Over time, I’ve explored advanced machine
              learning, cloud architectures, and full-stack development — discovering a
              strong interest in engineering high-performance, data-driven applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, SQL, AWS, and modern ML frameworks{" "}
                </b>
              </i>
              — and I enjoy developing end-to-end systems from model design to deployment.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple">
                  {" "}
                  AI/ML Systems, LLM-based Applications, Cloud-Native Solutions,{" "}
                </b>
              </i>
              and scalable backend architectures that power intelligent automation.
              <br />
              <br />
              Whenever possible, I enjoy working with
              <b className="purple"> Retrieval-Augmented Generation (RAG) </b>
              systems and deploying solutions using
              <i>
                <b className="purple"> Cloud, and full-stack frameworks</b>.
              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
