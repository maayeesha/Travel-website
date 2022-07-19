import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faVideo,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import './Images/Dhaka.jpg';
const Home = () => {
  const style ={
    color: 'navy',
    width: "18rem"
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
            <h1>Roam</h1>
            <h3>
              <i>Travelling made easy!</i>
            </h3>
            <br />
            <p>
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
        <Button variant="success" text="bold" className="fw-bold">Visit this place</Button>
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
  
      <div
        className="d-flex justify-content-around py-5"
        style={{ backgroundColor: "#4a7c78", color: "white",width: "100%"}}
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
