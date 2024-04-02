import CarItem from "../components/UI/CarItem"
import { Container, Row, Col } from "reactstrap"
import carData from "../assets/data/carData"

const CarListing = () => {
  return (
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
  )
}

export default CarListing
