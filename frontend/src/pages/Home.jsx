// eslint-disable-next-line no-unused-vars
import { Container, Row, Col } from "reactstrap";
import HeroSlider from "../components/UI/HeroSlider.jsx";
import Helmet from "../components/Helmet/Helmet.jsx";
import AboutSection from "../components/UI/AboutSection.jsx";
import CarItem from "../components/UI/CarItem.jsx"; // Import the CarItem component
import carData from "../assets/data/carData.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      {/* ==========About Section=========== */}
      <AboutSection />

      {/* ==========Car Details =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Rentals</h2>
            </Col>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
