import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [services, setServices] = useState([]);

  //Fetching JSON data
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  const serviceAccordion = {
    color: "black",
    fontSize: "20px",
  };

  return (
    <div className="main-body">
      <Container className="banner">
        <Row>
          <Col>
            <Image
              src="https://images.unsplash.com/photo-1464039397811-476f652a343b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=868&q=80"
              fluid
            />
          </Col>
          <Col>
            <h1>Clime Learn</h1>
            <p>
              Clime learn is the first global platform for Climate and
              environment education. We teach the global citizens about the
              Climate to prepare them for the future.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="description">
        <Row>
          <Col>
            <p>
              At clime learn, Kids learn about the threats of climate change.We
              have expanded our classroom for businesses to teach them about
              green technology. Our well trained teachers are concerned about
              the environment.They are determined to prepare this generation to
              tackle climate change issues by educating them on various topics
              like Climate Change, environment law, Green Technology etc.
            </p>
          </Col>
          <Col>
            <Image
              src="https://grist.org/wp-content/uploads/2020/01/burning_earth_classroom.jpg"
              fluid
            />
          </Col>
        </Row>
      </Container>

      <h1 style={{ padding: "50px" }}>Our Services</h1>

      <Accordion defaultActiveKey="0">
        {services.map((service) => (
          <Accordion.Item
            eventKey={service.id + ""}
            key={service.id}
            style={{ color: "red" }}
          >
            <Accordion.Header>
              <h2 className="accordion-head">
                #{service.id} {service.name}
              </h2>
            </Accordion.Header>
            <Accordion.Body style={serviceAccordion}>
              {service.description}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Home;
