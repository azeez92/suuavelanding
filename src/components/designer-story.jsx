import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kay from "../assets/images/kay.png";
import zee from "../assets/images/Zee.png";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./designer-story.css";


function DesignerStoryApp() {
  return (
    <Container fluid className="story">

         

      <Row className="artist-story" id="artist-story">

    
    <Col sm={12} lg={6}>
    
          <h2><strong>Artist Story:</strong> Meet Kay</h2>
          <hr />
        
      <p>
        Kay is a talented African fashion artist with a passion for collaboration.
        He seeks to work with leading fashion designers and brands, aiming to showcase
        he creativity while earning a fair income. With Suuave, Kay has access to unique benefits, including:
      </p>
      <ul>
        <li>
          <strong>Price Determination</strong>: Gain a pricing advantage by setting competitive rates.
        </li>
        <li>
          <strong>Secure & Guaranteed Payments</strong>: Enjoy peace of mind with reliable and timely payments.
        </li>
        <li>
          <strong>No Application Letters or Proposals</strong>: Start collaborating without the hassle of formal applications.
        </li>
        <li>
          <strong>No Discrimination</strong>: Experience an inclusive platform where your talent speaks for itself.
        </li>
        <li>
          <strong>Promotions and Incentives</strong>: Unlock growth opportunities through promotional programs.
        </li>
        <li>
          <strong>Promotions and Incentives</strong>: Unlock growth opportunities through promotional programs.
        </li>
        <li>
          <strong>Promotions and Incentives</strong>: Copyright Protection: Display, license and monetize your works.
        </li>
      </ul>

      <Nav.Link href="https://www.youtube.com/watch?v=rt-9QORRZsI" target="_blank"> <Button>Learn More</Button></Nav.Link>
   </Col>
  

   <Col sm={12} lg={6}>
   <img
   src={kay}
   />
    </Col>
      </Row>

      <Row className="designer-story" id="designer-story">

    
    <Col sm={12} lg={6}>
    <img
   src={zee}
   />
          
   </Col>
  

   <Col sm={12} lg={6}>

   <h2><strong>Designer Story:</strong> Zee's Fashion House</h2>
          <hr />
    <p>Zee, a renowned fashion designer, is on a mission to elevate her collections with culture-inspired, Afro-infused urban designs. 
    To bring her creative vision to life, she seeks talented African fashion artists who can seamlessly blend traditional African 
    influences with modern urban trends, helping her make a bold statement in the fashion world.</p>

    <p>Zee needs Suuave for:</p>

    <ul>
        <li><strong>Access to Talents: </strong>Find and collaborate with skilled and creative African fashion artists.</li>
        <li> <strong>Quality Assurance: </strong>Get seamless experience from briefing to delivery.</li>
        <li><strong> Flexible Pricing:</strong> Negotiate your terms to meet your investment goals.</li>
        <li><strong>Ready-to-Use Designs:</strong> Boost your collection with a multitude of ready-to-use designs.</li>
        <li> <strong>Rewards Programs & Promotions:</strong> Unlock Exclusive Rewards and Boost Your Business</li>
    </ul>

    <Nav.Link href="https://www.youtube.com/watch?v=rt-9QORRZsI" target="_blank"> <Button>Learn More</Button></Nav.Link>
  
    </Col>
      </Row>

    </Container>
  );
}

export default DesignerStoryApp;
