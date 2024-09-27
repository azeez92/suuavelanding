import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../assets/images/slide-1.jpg';
import secondSlide from '../assets/images/slide-2.jpg';
import thirdSlide from '../assets/images/slide-3.jpg';
import './hero.css'

function HeroApp() {
  return (
    <Carousel fade id='home'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstSlide}
          alt="First slide"
        />
        <Carousel.Caption className='one'>
          <h3>African Artistry, Global Fashion.</h3>
          <p>Connecting fashion designers and brands with African fashion artists to inspire collaboration for optimum creativity, productivity and exposure.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondSlide}
          alt="Second slide"
        />
        <Carousel.Caption className='two'>
          <h3>Inspire. Create. Celebrate.</h3>
          <p>Unlock the potential of fashion collaboration, where designers and African artists merge
          creativity, culture, and expertise to create groundbreaking, culturally-rich designs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdSlide}
          alt="Third slide"
        />
        <Carousel.Caption className='three'>
          <h3>Unleashing Creativity Together.</h3>
          <p>Where African culture meets global fashion trends, creating a vibrant fusion of tradition and innovation that redefines style on the world stage.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroApp;
