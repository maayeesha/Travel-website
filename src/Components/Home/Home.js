import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Accordion,
} from "react-bootstrap";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faVideo, faHotel } from "@fortawesome/free-solid-svg-icons";
import "./Images/Dhaka.jpg";
import question from "./Images/question.jpg";
const Home = () => {
  const style = {
    color: "#001D6E",
    width: "22rem",
  };
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
              Roam is a travelling company that allows users to gain first-class
              travelling experience.Let's plan your next tour with Roam!
            </p>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <h1>Explore Local Places</h1>
      <div className="d-flex justify-content-around py-5">
        <Card style={style}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1599655094604-124d6d7d4af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <Card.Body>
            <Card.Title className="fw-bold"> Dhaka</Card.Title>
            <Card.Text>
              Dhaka is the capital city of Bangladesh.Set beside the Buriganga
              River, it’s at the center of national government,trade and
              culture. The 17th-century city was the Mughal capital of Bengal.
            </Card.Text>
            <Button
              variant="success"
              text="bold"
              className="fw-bold"
              href="/login"
            >
              Visit this place
            </Button>
          </Card.Body>
        </Card>
        <Card style={style}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <Card.Body>
            <Card.Title className="fw-bold"> Bandarban</Card.Title>
            <Card.Text>
              Bandarban (Bengali: বান্দরবান) is a district in South-Eastern
              Bangladesh, and a part of the Chittagong Division.[4] It is one of
              the three hill districts of Bangladesh and a part of the
              Chittagong Hill Tracts
            </Card.Text>
            <Button
              variant="success"
              text="bold"
              className="fw-bold cl"
              href="/login"
            >
              Visit this place
            </Button>
          </Card.Body>
        </Card>
        <Card style={style}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1631934957959-c7bd45b7ca8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Cox's Bazar</Card.Title>
            <Card.Text>
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south
            </Card.Text>
            <Button
              variant="success"
              text="bold"
              className="fw-bold"
              href="/login"
            >
              Visit this place
            </Button>
          </Card.Body>
        </Card>
      </div>
      <h1>Frequently Asked Questions</h1>
      <Container className="d-flex p-5">
        <div>
          <Image src={question} width="560px" />
        </div>
        <div>
          <Accordion style={{ width: "600px" }} defaultActiveKey={["0"]} open>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5 className="fw-bold">Does "Roam" arrange tours?</h5>
              </Accordion.Header>
              <Accordion.Body>
                Roam arranges tour every month for people around the globe. Our
                faith in diversity makes us stand out in the world of
                tourism.For booking a tour, all you need to do is, get yourself
                sign up prior to your departure time. We suggest you to book a
                tour at least two months in advance.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5 className="fw-bold">
                  {" "}
                  Do you have offline booking system?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                Roam has offices located in different parts of Bangladesh. Our
                head office is in San Francisco,California, USA. You can head to{" "}
                <span href="/contact"> Contact page</span> for more details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5 className="fw-bold">
                  {" "}
                  How far in advance should I book a tour?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                Booking a tour is not hard and you can do it online. However,
                due to the massive demand and restrictions considered after
                COVID-19, the visa process may take a long time depending on
                your destination. That's why, it is suggested that you book the
                tour at least 2 months ahead.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <div
        className="d-flex justify-content-around py-5"
        style={{ backgroundColor: "#132C33", color: "white", width: "100%" }}
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
