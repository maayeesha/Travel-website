import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSmile,
  faVideo,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [services, setServices] = useState([]);

  //Fetching JSON data
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const slicedServices = services.slice(0, 4);
  // console.log(services);

  return (
    <div className="main-body fw-bolder">
      <Container className="banner">
        <Row>
          <Col>
            <Image
              src="https://data.whicdn.com/images/337884287/original.jpg"
              fluid
            />
          </Col>
          <Col>
            <h1>Artsy Academy</h1>
            <h3>
              <i>Creative learning made easy!</i>
            </h3>
            <br />
            <p style={{ transition: " width infinite" }}>
              Artsy Academy is a creative learning platform that offers courses
              on Drawing, Painting,Graphics Design,Digital Arts etc.This is
              country's first ever platform to offer online and offline classes
              on arts.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="services">
        <h1 className="pt-5 fs-1 fw-bolder" style={{ color: "#A64AC9" }}>
          Our Services
        </h1>

        <div className="d-flex pt-2 p-5">
          {slicedServices.map((service) => (
            <Card
              className="p-3 m-2"
              style={{ width: "30%", backgroundColor: "#ffc0cb" }}
            >
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title className="fw-bold text-dark">
                  {service.name}
                </Card.Title>
                <Card.Text style={{ color: "purple" }}>
                  {service.description}
                </Card.Text>
                <h2 className="fw-bold text-dark">Fees: ${service.price}</h2>
                <Button variant="warning">
                  <Link
                    className="text-white fw-bold"
                    to="/services"
                    style={{ textDecoration: "none" }}
                  >
                    Learn more
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-evenly p-5 my-0"
        style={{ backgroundColor: "#8f00fd", color: "white" }}
      >
        <div>
          <FontAwesomeIcon size="6x" icon={faSmile} />
          <h5 className="p-2">10000+ Happy Students</h5>
        </div>
        <div>
          <FontAwesomeIcon size="6x" icon={faVideo} />
          <h5 className="p-2">700+ Tutorials</h5>
        </div>
        <div>
          <FontAwesomeIcon size="6x" icon={faSchool} />
          <h5 className="p-2">200+ Offline Classes</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
