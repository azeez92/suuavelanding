import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping, faUsers, faComments } from "@fortawesome/free-solid-svg-icons"; // Import icons
import "./core-value.css";

function CoreApp() {
  return (
    <Container fluid className="core" id="core-value">
      <Row>
        <Col>
          <h3>Core Values</h3>
          <p className="sub">
          
          </p>
          <hr />
        </Col>
      </Row>

      <Row className="core-content">
        <Col xs={12} lg={4}>
          <h4>
            <FontAwesomeIcon icon={faHandsHelping} className="icon" /> COLLABORATION
          </h4>
          <p>
            Our commitment lies in delivering top-tier services to our
            prospects. Upholding a standard of excellence and transparency
            throughout all their interactions is paramount to our ethos.
          </p>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <h4>
            <FontAwesomeIcon icon={faUsers} className="icon" /> INCLUSIVITY
          </h4>
          <p>
            We believe that everyone should have access to this platform,
            regardless of where they live or what their skill set may be. This
            will allow them to grow as designers and illustrators, not just by
            providing access to information, but also by creating opportunities
            for people from all different backgrounds.
          </p>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <h4>
            <FontAwesomeIcon icon={faComments} className="icon" /> COLLABORATION
          </h4>
          <p>
            The objective is to establish a seamless network that facilitates
            effective communication and collaboration between two entities,
            fostering creativity and stimulating innovation.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CoreApp;
