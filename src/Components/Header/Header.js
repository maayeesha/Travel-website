import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
  };
  const style = {
    color: "white",
    padding: "10px",
  };
  return (
    <div className="nav-bar">
      <div className="website-name">
        <h1>Clime Learn </h1>
        <Image
          src="https://i.ibb.co/mq9tc0G/logo.png"
          style={{ width: "120px" }}
        />
      </div>
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
  );
};

export default Header;
