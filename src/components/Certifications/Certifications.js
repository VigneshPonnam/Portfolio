import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";

import aws from "../../Assets/Certifications/aws.png";
import salesforce from "../../Assets/Certifications/salesforce.png";
import cisco from "../../Assets/Certifications/cisco.png";
import paloalto from "../../Assets/Certifications/paloalto.png";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Professional certifications and technical training I have completed.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Salesforce */}
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={salesforce}
              title="Salesforce Developer – 55 Badges | 13 SuperBadges"
              description="Developed enterprise-grade Salesforce applications using Apex, Lightning Web Components (LWC), SOQL, and workflow automation. Implemented data modeling with S-Objects, triggers, validation rules, and security configurations including profiles, roles, and permission sets."
            />
          </Col>

          {/* Palo Alto */}
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={paloalto}
              title="Palo Alto Cybersecurity – SOC Operations"
              description="Gained practical exposure to SOC workflows, firewall policy configuration, VPN setup, intrusion detection concepts, and network traffic monitoring. Studied security event analysis, incident response procedures, and hybrid cloud security controls."
            />
          </Col>

          {/* AWS */}
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={aws}
              title="AWS Cloud Architecture & Data Analytics"
              description="Completed AWS Academy training with hands-on exposure to EC2, S3, RDS, RedShift, IAM, and VPC. Designed scalable cloud architectures, implemented secure data storage solutions, configured role-based access control, and built ETL pipelines for batch and analytics-driven workloads."
            />
          </Col>

          {/* Cisco */}
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cisco}
              title="Cisco Networking Associate (CCNAv7)"
              description="Configured routers and switches, implemented IPv4/IPv6 addressing schemes, subnetting, VLANs, and routing protocols. Applied network troubleshooting techniques and security best practices across LAN and WAN environments using Cisco IOS."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;