import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import hiking from "./Images/hiking.avif";
import seadive from "./Images/seadive.avif";
import skydive from "./Images/skydive.avif";
import women from "./Images/women.avif";
import museum from "./Images/museum.avif";
import camp from "./Images/camp.avif";

const Tours = () => {
  const cardStyle = {
    width: "18rem",
    fontWeight: "bolder",
    margin: "25px",
    border: "2px solid navy",
    borderRadius: "15px",
  };

  return (
    <Container>
      <Row style={{ border: "2px solid" }} className="mt-2">
        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={hiking} />
            <Card.Body>
              <Card.Title>Hiking in Dragon's back, Hong kong</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Hiking in hong Kong
            </h4>
            ​​The Dragons Back walk starts in the small village of Pengenffordd
            within the Brecon Beacons National Park. It boasts fantastic views
            of the surrounding country side and the beautiful Black
            Mountains.Hiking is a long, vigorous walk, usually on trails or
            footpaths in the countryside.
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            Go Hiking
          </Button>
        </Col>

        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={museum} />
            <Card.Body>
              <Card.Title>The British Museum, London, England</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Museum Tour
            </h4>
            ​​Discover ancient civilisations, learn from the incredible
            achievements and challenges of people and societies past and
            present, and immerse yourself in the culture, languages,
            environments, people and debates of our ever-changing world.
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            Visit Museum
          </Button>
        </Col>
      </Row>

      <Row style={{ border: "2px solid" }}>
        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={women} />
            <Card.Body>
              <Card.Title>Travel safe in Women's group</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Solo Tours for Women
            </h4>
            Many women take their first solo trip with our group; therefore we
            expect to spend time on the phone to work through any worries you
            might have. If you wish to book or ask questions about a Women's
            Travel Group tour or talk about travel generally,click below.
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            For women tourists
          </Button>
        </Col>

        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={seadive} />
            <Card.Body>
              <Card.Title>Sea dive in Miami</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Diving deep
            </h4>
            Underwater diving, as a human activity, is the practice of
            descending below the water's surface to interact with the
            environment. It is also often referred to as diving, an ambiguous
            term with several possible meanings, depending on context.
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            Go Sea diving
          </Button>
        </Col>
      </Row>

      <Row className="pb-2 mb-5" style={{ border: "2px solid" }}>
        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={camp} />
            <Card.Body>
              <Card.Title>Fun camping with other tourists</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Camping in Bandarban
            </h4>
            Camping is an outdoor activity that involves staying the night/more
            than one night in a protective shelter out in nature. Camping is a
            broad term but in its essence, camping is a way of getting away from
            the hassle of urban life, to a more natural environment for a
            limited time
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            Book Camping
          </Button>
        </Col>

        <Col>
          <Card style={cardStyle}>
            <Card.Img className="p-2" variant="top" src={skydive} />
            <Card.Body>
              <Card.Title>Sky dive in Dubai</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p className="pt-4 fw-bold text-wrap">
            <h4
              className="fw-bold p-2"
              style={{
                color: "white",
                backgroundColor: "#2c3e4c",
                border: "2px solid",
                borderRadius: "10px",
              }}
            >
              Exotic Sky diving
            </h4>
            Skydiving, is a method of transiting from a high point in the
            atmosphere to the surface of Earth with the aid of gravity,
            involving the control of speed during the descent using a parachute
            or parachutes
          </p>
          <Button className="fw-bold" href="/login" variant="warning">
            Go Sky diving
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Tours;
