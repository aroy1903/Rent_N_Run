
import { Container, Row, Col} from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg = '6' md = '6'>

            <div className="about__section-content">
                    <h4 className='section__subtitle'>About Us</h4>
                    <h2 className="h2 section__title">Welcome to Rent N Run</h2>
                    <p>Welcome to Rent N Run, your premier destination for car rentals. We offer a wide range of vehicles to suit your needs and make your journey unforgettable.</p>
                
                <div className="about__section-item d-flex align-items-center">
                    <p className='section__description d-flex align-items-center gap-2'>
                        <i className="ri-check-double-line"></i>
                        Rent N Run provides top-quality rental services, ensuring a hassle-free experience for every customer.
                    </p>

                     <p className='section__description d-flex align-items-center gap-2'>
                        <i className="ri-check-double-line"></i>
                        Our vehicles are meticulously maintained and thoroughly inspected to guarantee your safety and satisfaction.
                     </p>
                </div>



                </div>
            </Col>
            <Col lg = '6' md = '6'>
            <div className="about__img">
                <img src={aboutImg}
                    alt="red car" className='w-100'/>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection
