import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"


const Routers = () => {

  const {user} = useContext(AuthContext)


  return (
    <Routes>

      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cars" element={user  ? <CarListing /> : <Home/>} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
