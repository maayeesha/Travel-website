import React from "react";
import { Container, Form, Image } from "react-bootstrap";

const ContactUs = () => {
  const bodyStyle = {
    backgroundColor: "#FBEEC1",
    padding: "20px",
  };
  return (
    <div style={bodyStyle}>
      <div
        className="card text-dark p-5 m-5"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="card-header fw-bold bg-primary fs-2">
          Our Home Office
        </div>
        <div className="card-body text-success fw-bold fs-4">
          <p className="card-text">20/A, Green Road, Dhaka</p>
          <p>Contact No: 017xxxxxx</p>
        </div>
      </div>

      <div
        className="card text-dark p-5 m-5"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="card-header fw-bold bg-primary fs-2">
          Our International Office
        </div>
        <div className="card-body text-success fw-bold fs-4">
          <p className="card-text">
            52, Greenwich sq, Scarborough, Toronto, Canada
          </p>
          <p>Contact No: 01347xxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
