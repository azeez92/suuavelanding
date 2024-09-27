import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import founderImg from "../assets/images/hamzat.jpg"; 
import coFounderImg3 from "../assets/images/idiat-shiole.jpeg";
import coFounderImg2 from "../assets/images/azeez-sodiq.jpg";
import "./team.css";

const TeamApp = () => {
  return (
    <Container  className="team-section py-5" id="team">
      <div className="title mb-5">
        <h3 className="">Meet Our Team</h3>
        <p> We’re passionate and forward-thinking individuals of diverse backgrounds, united by the vivid vision and ardent desire to illuminate the African fashion industry.</p>
        <hr />
      </div>
      <Row className="justify-content-center">
        {/* Founder */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="team-card text-center">
            <Card.Img variant="top" src={founderImg} alt="Hamzat Ibrahim O." />
            <Card.Body>
              <Card.Title>HAMZAT IBRAHIM O.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Founder & CEO</Card.Subtitle>
              {/* <div className="social-icons">
                <a href="https://twitter.com/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/hamzat" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div> */}
            </Card.Body>
          </Card>
        </Col>

        {/* Co-Founder */}
     
        <Col md={6} lg={4} className="mb-4">
          <Card className="team-card text-center">
            <Card.Img variant="top" src={coFounderImg2} alt="Azeez Picture" />
            <Card.Body>
              <Card.Title>Azeez Sodiq</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Co-Founder & CTO</Card.Subtitle>
              {/* <div className="social-icons">
                <a href="https://twitter.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card className="team-card text-center">
            <Card.Img variant="top" src={coFounderImg3} alt="Idiat pics" />
            <Card.Body>
              <Card.Title>Idiat Shiole</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Quality Assurance Advisor (QAA)</Card.Subtitle>
              {/* <div className="social-icons">
                <a href="https://twitter.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/femi" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://instagram.com/femi" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div> */}
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>
  );
};

export default TeamApp;
