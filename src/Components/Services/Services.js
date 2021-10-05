import React from "react";
import { Carousel, Button } from "react-bootstrap";
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
      <Carousel className="w-75 p-5 mx-auto">
        {services.map((service) => (
          <Carousel.Item key={service.id} interval={2500}>
            <img
              className="d-block w-75 img-fluid mx-auto"
              src={service.img}
              alt="First slide"
            />
            <Carousel.Caption style={carousCaption}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="d-flex justify-content-evenly">
                <span
                  className="border rounded-3 p-2 fw-bold"
                  style={{ color: "pink", backgroundColor: "purple" }}
                >
                  Fees: ${service.price}
                </span>

                <Button className="bg-dark"> Purchase </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
