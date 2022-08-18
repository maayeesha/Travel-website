import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import rome from "./Images/rome.avif";
import london from "./Images/london.avif";
import paris from "./Images/paris.avif";
import australia from "./Images/australia.avif";
import bangkok from "./Images/bangkok.avif";
import bali from "./Images/bali.avif";
import india from "./Images/india.avif";
import switzerland from "./Images/switzerland.avif";
import japan from "./Images/japan.avif";

const Destinations = () => {
  const fontStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    backgroundColor: "#7600bc",
    opacity: 0.5,
  };
  const cardStyle = {
    width: "18rem",
    fontWeight: "bolder",
    margin: "25px",
    border: "2px solid navy",
    borderRadius: "15px",
  };
  return (
    <div style={{ backgroundColor: "#f0fff8" }}>
      <div className="d-flex justify-content-center flex-wrap">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={rome} alt="First slide" />
            <Carousel.Caption style={fontStyle}>
              <h3>Rome, Italy</h3>
              <p>
                Rome is the capital city of Italy. It is also the capital of the
                Lazio region, the centre of the Metropolitan City of Rome, and a
                special comune named Comune di Roma Capitale.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={london} alt="Second slide" />

            <Carousel.Caption style={fontStyle}>
              <h3>London, England</h3>
              <p>
                London, the capital of England and the United Kingdom, is a
                21st-century city with history stretching back to Roman times.
                At its centre stand the imposing Houses of Parliament, the
                iconic ‘Big Ben’ clock tower and Westminster Abbey, site of
                British monarch coronations. Across the Thames River, the London
                Eye observation wheel provides panoramic views of the South Bank
                cultural complex, and the entire city.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={paris} alt="Third slide" />

            <Carousel.Caption style={fontStyle}>
              <h3>Paris, France</h3>
              <p>
                Also known as the Latin Quarter, the 5th arrondissement is home
                to the Sorbonne university and student-filled cafes. It's also
                known for its bookshops, including the famed Shakespeare and
                Company.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2 className="fw-bold p-5">Book your tour</h2>
      <div className="d-flex justify-content-evenly">
        <Card style={cardStyle}>
          <Card.Img className="p-2" variant="top" src={australia} />
          <Card.Body>
            <Card.Title
              className="fw-bold"
              style={{ color: "teal", fontStyle: "italic" }}
            >
              Australia
            </Card.Title>
            <Card.Text>
              Australia, officially the Commonwealth of Australia, is a
              sovereign country comprising the mainland of the Australian
              continent, the island of Tasmania, and numerous smaller islands.
            </Card.Text>
            <Button variant="success" className="fw-bold" href="/login">
              Book a tour
            </Button>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Img className="p-2" variant="top" src={japan} />
          <Card.Body>
            <Card.Title
              className="fw-bold"
              style={{ color: "teal", fontStyle: "italic" }}
            >
              Japan
            </Card.Title>
            <Card.Text>
              Japan is an island country in East Asia. It is situated in the
              northwest Pacific Ocean, and is bordered on the west by the Sea of
              Japan, while extending from the Sea of Okhotsk in the north toward
              the East China Sea, Philippine Sea, and Taiwan in the south.
            </Card.Text>
            <Button variant="success" className="fw-bold" href="/login">
              Book a tour
            </Button>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Img className="p-2" variant="top" src={switzerland} />
          <Card.Body>
            <Card.Title
              className="fw-bold"
              style={{ color: "teal", fontStyle: "italic" }}
            >
              Switzerland
            </Card.Title>
            <Card.Text>
              Switzerland is a mountainous Central European country, home to
              numerous lakes, villages and the high peaks of the Alps. Its
              cities contain medieval quarters, with landmarks like capital
              Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge.
            </Card.Text>
            <Button variant="success" className="fw-bold" href="/login">
              Book a tour
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Destinations;
