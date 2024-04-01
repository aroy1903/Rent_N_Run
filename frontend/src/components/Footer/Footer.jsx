import { Container,Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from "react-router-dom";
import '../../styles/footer.css'

const quickLinks = [
  {
  path:'/home',  
  display:'Home'
},
{
  path:'/about',
  display:'About'
},
{
  path:'/cars',
  display:'Cars'
},
]

const Footer = () => {
  return <footer className='footer'>
   <Container>
  <Row className="justify-content-between">
    <Col lg='4' md='4' sm='12'>
      <div className="logo footer__logo">
        <h1>
          <Link to='/home' className="d-flex align-items-center justify-content-left gap-3">
            <i className="ri-car-line"></i>
            <span> Rent <br/>N Run</span>
          </Link>
        </h1>
      </div>
      <p className="footer__logo-content">
      Thank you for choosing Rent N Run!
       We offer a wide selection of vehicles and convenient booking options to make your journey comfortable and memorable.
      </p>
    </Col>

    <Col lg='2' md='4' sm='6'>
      <div className='mb-4'>
        <h5 className='footer__link-title'> Quick Links</h5>
        <ListGroup>
          {quickLinks.map((item,index)=>(
            <ListGroupItem key = {index} className='p-0 mt-3 quick__link'>
              <Link to ={item.path}>{item.display}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </Col>
  </Row>
</Container>


  </footer>
}

export default Footer
