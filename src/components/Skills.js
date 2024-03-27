import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className='skill' id="skills">
        <Container>
        <Row>
        <Col>
        <div className='skill-bx'>
        <h2 style={{ backgroundImage: 'linear-gradient(to right, red, orange)', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center' }}>Skills</h2><br/>
        <p>I am a results-driven professional with a proven track record of success across various domains. My skill set encompasses technical expertise, soft skills, and specialized knowledge in the below mentioned skills. Over the course of my career, I have successfully been skilled in the below mentioned ones. Here is a more detailed breakdown of my key skills:</p>
        <Carousel responsive={responsive} infinte={true} className="skill-slider">
          <div className="item">
          <img src={meter1} alt="Image" />
          <h5>Linguaskill-Cambridge University</h5>
          </div>
          <div className="item">
          <img src={meter2} alt="Image" />
          <h5>Java S8 Features</h5>
          </div>
          <div className="item">
          <img src={meter3} alt="Image" />
          <h5>Advanced Java</h5>
          </div>
          <div className="item">
          <img src={meter1} alt="Image" />
          <h5>Web Development</h5>
          </div>
          <div className="item">
          <img src={meter3} alt="Image" />
          <h5>Hindi Prachar Sabha</h5>
          </div>
          <div className="item">
          <img src={meter2} alt="Image" />
          <h5>General Aptitude</h5>
          </div>
        </Carousel>

        </div>
        </Col>
        </Row>
        </Container>
        
        </section>
      )

}