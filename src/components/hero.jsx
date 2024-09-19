import Carousel from 'react-bootstrap/Carousel';
import firstSlide from '../assets/images/African-Artistry-Global-Fashion.jpg';
import secondSlide from '../assets/images/Inspire-Create-Celebrate.jpg';
import thirdSlide from '../assets/images/slide-33.jpg';
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
          <p>Connecting fashion designers with top African illustrators to foster creativity, innovation, and cultural expression in the fashion industry.</p>
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
          <p>Discover the power of collaboration in fashion, where creativity meets cultural expression, and groundbreaking designs are brought to life through the synergy between designers and top African illustrators.</p>
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
