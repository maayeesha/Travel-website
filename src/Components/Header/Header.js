import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const { currentUser, logout } = useAuth();

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
      <Navbar>
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
        {!currentUser ? (
          <NavLink style={style} activeStyle={activeStyle} to="/signup">
            Book a tour!
          </NavLink>
        ) : (
          <span>
            {" "}
            <Link
              to="/bookings"
              style={{
                textDecoration: "none",
                color: "navy",
                backgroundColor: "#ADD8E6",
                borderRadius: "6%",
                padding: "8px",
              }}
            >
              {currentUser?.email}
            </Link>
          </span>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
