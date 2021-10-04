import React from "react";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  //Fetching JSON data
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const carousCaption = {
    backgroundColor: " #6699DD",
    color: "#FBEEC1",
  };

  return (
    <div style={{ backgroundColor: "#DAAD86" }}>
      <h1 style={{ color: "purple", fontWeight: "bolder" }}>Our Services</h1>
      <Carousel>
        {services.map((service) => (
          <Carousel.Item key={service.id} interval={1000}>
            <img
              className="d-block w-75 img-fluid mx-auto"
              src={service.img}
              alt="First slide"
            />
            <Carousel.Caption style={carousCaption}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
