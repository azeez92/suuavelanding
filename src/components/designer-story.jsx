import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kay from "../assets/images/kay.png";
import zee from "../assets/images/Zee.png";
import "./designer-story.css";


function DesignerStoryApp() {
  return (
    <Container fluid className="story">

         

      <Row className="illustrator-story" id="illustrator-story">

    
    <Col>
    
          <h2><strong>Illustrator Story:</strong> Kay's Story</h2>
          <hr />
        
      <p>
        Kay is a talented African fashion illustrator with a passion for collaboration.
        She seeks to work with leading fashion designers and brands, aiming to showcase
        her creativity while earning a fair income. With Suuave, Kay has access to unique benefits, including:
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
      </ul>
   </Col>
  

   <Col>
   <img
   src={kay}
   />
    </Col>
      </Row>

      <Row className="designer-story" id="designer-story">

    
    <Col>
    <img
   src={zee}
   />
          
   </Col>
  

   <Col>

   <h2><strong>Designer Story:</strong> Zee's Story</h2>
          <hr />
    <p>Zee, a renowned fashion designer, is on a mission to elevate her collections with culture-inspired, Afro-infused urban designs. 
    To bring her creative vision to life, she seeks talented African fashion illustrators who can seamlessly blend traditional African 
    influences with modern urban trends, helping her make a bold statement in the fashion world.</p>

    <p>Zee is committed to working with illustrators who offer:</p>

    <ul>
        <li> Reward Programs & Promotions: Opportunities for growth and recognition.</li>
        <li> Quality Assurance: A focus on delivering top-tier designs.</li>
        <li> Ready-to-Use Designs: Illustrations that are readily available to integrate into her collections.</li>
        <li> Flexible Negotiation: Open discussions for pricing that benefits both parties.</li>
        <li> Copyright Protection: Ensuring her designs remain unique and secure.</li>
    </ul>

    <p>By collaborating with the right illustrators, Zee aims to create a fashion line that not only celebrates African culture but also 
    pushes the boundaries of contemporary fashion.</p>
  
    </Col>
      </Row>

    </Container>
  );
}

export default DesignerStoryApp;
