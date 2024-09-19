import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import founderImg from "../assets/images/hamzat.jpg"; 
import coFounderImg from "../assets/images/femi.jpg"; 
import "./team.css";

const TeamApp = () => {
  return (
    <Container  className="team-section py-5" id="team">
      <h3 className="text-center mb-5">Meet Our Team</h3>
      <Row className="justify-content-center">
        {/* Founder */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="team-card text-center">
            <Card.Img variant="top" src={founderImg} alt="Hamzat Ibrahim O." />
            <Card.Body>
              <Card.Title>HAMZAT IBRAHIM O.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
              <div className="social-icons">
                <a href="https://twitter.com/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Co-Founder */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="team-card text-center">
            <Card.Img variant="top" src={coFounderImg} alt="Femi Bandele" />
            <Card.Body>
              <Card.Title>FEMI BANDELE</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Co-Founder & CTO</Card.Subtitle>
              <div className="social-icons">
                <a href="https://twitter.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamApp;
