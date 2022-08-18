import React from "react";
import "./Footer.css";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import logo from "./logo/logo.png";
const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: "#f5e0d8" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a
              href="/"
              className="d-flex align-items-center p-0 text-dark"
              style={{ backgroundColor: "#ffc3b1", borderRadius: "50px" }}
            >
              <img alt="logo" src={logo} width="120px" />
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              We are providing the best travel experiences for people around the
              globe.
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <h2 className="h5 mb-4" style={{ fontWeight: "600" }}>
              Travel with Roam
            </h2>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/destinations">Destinations</CDBFooterLink>
              <CDBFooterLink href="/about">About Us</CDBFooterLink>
              <CDBFooterLink href="/contact">Contact</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
              <CDBFooterLink href="/login">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/login">Book a tour</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          {" "}
          Roam, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
