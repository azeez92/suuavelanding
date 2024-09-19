import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage from "../assets/images/about.jpg";
import "./about.css";

function AboutApp() {
  return (
    <Container fluid className="about" id="about">
      <Row>


        <Col>
          <img src={aboutImage} />
          <Row className="mission-contain">
            <Col xs={12} md={6} className="mission">
              <h4>Our Mission</h4>
              <p>Our Mission is to create a streamlined network for our prospects to connect, collaborate and create.</p>
            </Col>
            <Col xs={12} md={6} className="vision">
              <h4>Our Vision</h4>
              <p>Our Vision is to be the foremost go-to platform for discovering and connecting with talented African creatives, and unlocking new levels of innovation in the African fashion industry.</p>
            </Col>
          </Row>

          </Col>
          

        <Col>
          <Row>
            <Col>
              <h3>About Suuave</h3>
              <p className="sub">
              Together, let's inspire, create, and celebrate the beauty of African fashion.
              </p>
              <hr />
              <p>
                We understand that collaboration is key to unleashing the full potential of creativity. By bringing together fashion designers and brands with African fashion illustrators, we envision a dynamic environment that encourages the exploration of fresh perspectives, cultural influences, and innovative designs. Through this synergy, we believe that groundbreaking and trend-setting creations can be realized.

              </p>
              <p>By embracing the rich tapestry of African culture and integrating it into the global fashion landscape, we aim to contribute to the evolution and amplification of African fashion as a force to be reckoned with.</p>

              <p>Not only do we provide a space for collaboration, but we also strive to ensure that both designers and illustrators receive the recognition and exposure they deserve. By showcasing their collaborative projects, we aim to shine a light on the talent, skill, and creativity of African fashion illustrators, helping them gain visibility within the industry.</p>

              <p>We are thrilled to embark on this journey of creativity, collaboration, and cultural appreciation. Join us as we strive to revolutionize the fashion industry by connecting fashion designers and brands with African fashion illustrators, allowing for the realization of extraordinary and boundary-pushing creations.</p>
            </Col>
          </Row>
        
        </Col>
      </Row>
    </Container>
  );
}

export default AboutApp;
