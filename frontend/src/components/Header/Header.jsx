/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { useContext} from "react"
import {AuthContext} from "../../context/AuthContext.jsx"
import {signUserOut} from "../../firebase/firebaseActions"

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
];

const Header = () => {

 
  const {user} = useContext(AuthContext)



  return (
    <header className="header">
      {/* ======header top ======= */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
               {!user && <Link to="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Login
                </Link>}
                {user && <Link  onClick={()=>signUserOut()} to="/login" className="d-flex align-items-center gap-1">
                  <i className="ri-logout-circle-line"></i>Logout
                </Link>}

                {!user && <Link to="/register">
                  <i className="ri-user-line"></i>Register
                </Link>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*==========================Header Middle================================*/}

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg={4} md={3} sm={4}>
              <div className="logo">
                <h1>
                  <Link
                    to="/home"
                    className="d-flex align-items-center justify-content-left gap-3"
                  >
                    <i className="ri-car-line"></i>
                    <span>
                      {" "}
                      Rent <br />N Run
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg={3} md={4} sm={4}>
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Los Angeles</h4>
                  <h6>California</h6>
                </div>
              </div>
            </Col>

            <Col lg={3} md={4} sm={4}>
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content ">
                  <h4>Monday to Friday</h4>
                  <h6>8am - 6pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center 
                            justify-content-end text-end"
            >
              <button className="header__btn">
                <Link to="/about">
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/*============= main navigation ===============*/}
      <div className="main__navbar">
        <Container>
          <div
            className="navigation__wrapper d-flex 
                        align-items-center justify-content-between"
          >
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>

            <div className="navigation">
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
