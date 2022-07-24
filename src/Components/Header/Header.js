import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#14C38E",
    borderRadius: "8%",
  };
  const style = {
    color: "white",
    padding: "10px",
    textDecoration: "none",
  };
  return (
    <div className="d-flex justify-content-around nav-bar py-3">
       <div>
       <NavLink style={style} activeStyle={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/destinations">
          Destinations
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/tours">
          Tours
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/about">
          About Roam
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/contact">
          Contact Us
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/login">
          Book a tour!
        </NavLink>
       </div>
      </div>
  );
};

export default Header;
