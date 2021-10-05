import React from "react";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ListGroup } from "react-bootstrap";

//contact Information
const ContactUs = () => {
  const style = { backgroundColor: "#8f00fd", color: "white" };
  return (
    <div className="d-flex justify-content-evenly py-5 m-0 bg-dark fw-bold">
      <div style={style} className="p-5">
        <ListGroup variant="flush">
          <ListGroup.Item style={style}>
            <FontAwesomeIcon size="2x" icon={faPhone} />
            <span>+9901293274</span>
          </ListGroup.Item>
          <ListGroup.Item style={style}>
            {" "}
            <FontAwesomeIcon size="2x" icon={faAddressCard} />
            <span className="m-2">
              54, Brooklyn Sq., Sillicon Valley, San Fransisco, California, USA
            </span>
          </ListGroup.Item>
          <ListGroup.Item style={style}>
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
            <span className="m-2">artsyacademy90@academyartsy.com</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Image src="https://images.unsplash.com/photo-1531796311868-83672cd144f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </div>
    </div>
  );
};

export default ContactUs;
