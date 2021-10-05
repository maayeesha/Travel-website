import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#ffb48f",
    backgroundColor: "#9300FF",
    border: "1px solid purple",
    borderRadius: "30%",
  };
  const style = {
    color: "white",
    padding: "10px",
    textDecoration: "none",
  };
  return (
    <div>
      <div>
        <h1 className="pt-3 p-0 m-0 fs-1 fw-bold"> Artsy Academy </h1>
        <Image src="https://i.ibb.co/mq9tc0G/logo.png" className="logo" />
      </div>
      <div className="nav-bar">
        <NavLink style={style} activeStyle={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/about">
          About
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/services">
          Our Services
        </NavLink>
        <NavLink style={style} activeStyle={activeStyle} to="/contact">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
