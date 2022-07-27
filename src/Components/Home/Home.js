import React from "react";
import { Button, Card, Col, Container, Image, Row,Accordion } from "react-bootstrap";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faVideo,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import './Images/Dhaka.jpg';
import question from "./Images/question.jpg"
const Home = () => {
  const style ={
    color: '#001D6E',
    width: "22rem"
  }
  return (
    <div className="main-body fw-bolder">
      <Container className="banner mx-5">
        <Row>
          <Col>
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              fluid
            />
          </Col>
          <Col>
            <h1 className="site_title">Roam</h1>
            <h3>
              <i className="moto">Travelling made easy!</i>
            </h3>
            <br />
            <p className="site_des">
              Roam is a travelling company that allows users to gain first-class travelling experience.Let's plan your next tour with Roam!
            </p>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <h1>Explore Local Places</h1>
    <div className="d-flex justify-content-around py-5">
    <Card style={style}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1599655094604-124d6d7d4af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
      <Card.Body>
        <Card.Title className="fw-bold"> Dhaka</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" text="bold" className="fw-bold">Visit this place</Button>
      </Card.Body>
    </Card>
    <Card style={style}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
      <Card.Body>
        <Card.Title className="fw-bold"> Bandarban</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" text="bold" className="fw-bold cl">Visit this place</Button>
      </Card.Body>
    </Card>
    <Card style={style}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1631934957959-c7bd45b7ca8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
      <Card.Body>
        <Card.Title className="fw-bold">Cox's Bazar</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success" text="bold" className="fw-bold">Visit this place</Button>
      </Card.Body>
    </Card>
    </div>
    <h1>Frequently Asked Questions</h1>
    <Container className="d-flex p-5">
        <div>
         <Image src={question} fluid/>
        </div>
      <div>
      <Accordion defaultActiveKey={['0']} Open>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Does "Roam" arranges tours?</Accordion.Header>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you have offline booking system?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How far in advance should I book a tour?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
      </Container>
      <div
        className="d-flex justify-content-around py-5"
        style={{ backgroundColor: "#132C33", color: "white",width: "100%"}}
      >
        <div>
          <FontAwesomeIcon size="6x" icon={faSmile} />
          <h5 className="p-2">10000+ Happy Travellers</h5>
        </div>
        <div>
          <FontAwesomeIcon size="6x" icon={faVideo} />
          <h5 className="p-2">100+ Features</h5>
        </div>
        <div>
          <FontAwesomeIcon size="6x" icon={faHotel} />
          <h5 className="p-2">2000+ hotel bookings</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
