import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'
const FooterApp = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row className="footer-content">
          <Col md={3} sm={6} className="mb-4">
            <h4>About Us</h4>
            <p>
            Suuave connects fashion designers and brands with African fashion artists to inspire
            collaboration for optimum productivity, creativity, and exposure.
            </p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="https://www.youtube.com/watch?v=rt-9QORRZsI" target="_blank" className="text-white">Demo</a></li>
              <li><a href="#core-values" className="text-white">Core Values</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@suuave.com" className="text-white">info@suuave.com</a></p>
            <p>Follow us on:</p>
            <div className="social-icons">
              <a href="https://x.com/suuaveftx" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-twitter icone"></i>
              </a>
              <a href="https://www.instagram.com/suuaveftx" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-instagram icone"></i>
              </a>
              <a href="https://youtube.com/@SuuaveFTx?si=bQzx3E_J2z1UsC5H" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-youtube icone"></i>
              </a>
              <a href="https://www.linkedin.com/company/suuave/" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-linkedin icone"></i>
              </a>
            </div>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Join Our Waitlist</h4>
            <p>
              Connect with top African artists and designers. Be the first to know when we launch!
            </p>
            <a href="https://docs.google.com/forms/d/1sSpMR0Xq5UYZU61T_xdU-k7NcDbpCBOf2puhSlVXNVU/viewform?edit_requested=true" className="btn button">Join Now</a>
          </Col>
        </Row>
      </Container>

      {/* White full-width footer-bottom */}
      <div className="footer-bottom py-3">
        <Container>
          <Row className="text-center">
            <Col>
              <p className="mb-0 text-dark">&copy; 2024 Suuave. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterApp;
