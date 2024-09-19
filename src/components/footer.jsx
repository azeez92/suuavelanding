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
              At Suuave, we connect African fashion illustrators with designers and brands to inspire collaboration and create groundbreaking fashion.
            </p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@suuave.com" className="text-white">info@suuave.com</a></p>
            <p>Follow us on:</p>
            <div className="social-icons">
              <a href="https://x.com/suuaveftx" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/suuaveftx" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@SuuaveFTx?si=bQzx3E_J2z1UsC5H" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/suuave/" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4>Join Our Waitlist</h4>
            <p>
              Connect with top African illustrators and designers. Be the first to know when we launch!
            </p>
            <a href="#" className="btn btn-primary">Join Now</a>
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
